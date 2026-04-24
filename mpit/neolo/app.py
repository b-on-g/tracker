"""
SchoolPlan Backend v2
Запуск: python app.py
Бэкенд слушает на http://localhost:5000
Открывай index.html в браузере напрямую (или через Live Server).
"""

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
import json, os, uuid, numpy as np
import requests  # для вызовов к Ollama API
import atexit   # для выгрузки модели при остановке

# ──────────────────────────────────────────
# ML — предсказание времени выполнения задачи
# ──────────────────────────────────────────
_st_model    = None
_cb_models   = None
_ml_ready    = False
_ml_error    = None

# ──────────────────────────────────────────
# OLLAMA - AI тесты и объяснения
# ──────────────────────────────────────────
OLLAMA_URL = os.environ.get("OLLAMA_URL", "http://127.0.0.1:11434")
OLLAMA_MODEL = os.environ.get("OLLAMA_MODEL", "gemma3:4b")

def _ollama_chat(system_prompt, user_content, temperature=0.7, max_tokens=512):
    """
    Отправляет запрос к Ollama API в режиме стриминга,
    собирает весь текст и возвращает строку.
    Стриминг позволяет начать получать токены сразу,
    без ожидания полной генерации на стороне сервера.
    """
    try:
        url = f"{OLLAMA_URL}/api/chat"
        payload = {
            "model": OLLAMA_MODEL,
            "messages": [
                {"role": "system", "content": system_prompt},
                {"role": "user",   "content": user_content}
            ],
            "stream": True,          # ← стриминг: токены идут сразу
            "keep_alive": -1,        # ← модель остаётся в VRAM между запросами
            "options": {
                "temperature": temperature,
                "num_predict": max_tokens,   # ← жёсткий лимит токенов
                "num_ctx": 2048,             # ← контекст: хватит для школьных задач
            }
        }
        print(f"  [Ollama] POST {url} model={OLLAMA_MODEL} max_tokens={max_tokens}")
        r = requests.post(url, json=payload, timeout=120, stream=True)
        r.raise_for_status()

        # Читаем стрим и склеиваем токены
        content = []
        for line in r.iter_lines():
            if not line:
                continue
            try:
                chunk = json.loads(line)
            except json.JSONDecodeError:
                continue
            token = chunk.get("message", {}).get("content", "")
            if token:
                content.append(token)
            if chunk.get("done"):
                break

        result = "".join(content)
        print(f"  [Ollama] Done, length={len(result)}")
        return result

    except requests.exceptions.ConnectionError as e:
        print(f"  [Ollama] Connection error: {e}")
        return None
    except Exception as e:
        print(f"  [Ollama] Error: {type(e).__name__}: {e}")
        return None

def _unload_ollama_model():
    """Выгружает модель из памяти при остановке сервера."""
    try:
        url = f"{OLLAMA_URL}/api/generate"
        payload = {
            "model": OLLAMA_MODEL,
            "keep_alive": 0  # 0 = выгрузить немедленно
        }
        print(f"  [Ollama] Unloading model {OLLAMA_MODEL}...")
        r = requests.post(url, json=payload, timeout=10)
        if r.status_code == 200:
            print(f"  [Ollama] Модель выгружена из памяти")
        else:
            print(f"  [Ollama] Статус выгрузки: {r.status_code}")
    except Exception as e:
        print(f"  [Ollama] Не удалось выгрузить модель: {e}")

# Регистрируем выгрузку при выходе
atexit.register(_unload_ollama_model)

def _load_ml():
    global _st_model, _cb_models, _ml_ready, _ml_error
    try:
        from sentence_transformers import SentenceTransformer
        from catboost import CatBoostRegressor

        base_dir  = os.path.dirname(os.path.abspath(__file__))
        local_st  = os.path.join(base_dir, "model")
        remote_st = "sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2"

        cbm_files = [os.path.join(base_dir, f"catboost_fold_{i}.cbm") for i in range(5)]
        missing   = [f for f in cbm_files if not os.path.exists(f)]
        if missing:
            _ml_error = "Не найдены файлы catboost_fold_N.cbm рядом с app.py"
            print(f"  WARNING ML: {_ml_error}")
            return

        if os.path.isfile(os.path.join(local_st, "config.json")):
            print("  Загружаем sentence-transformer из ./model/ (оффлайн)")
            _st_model = SentenceTransformer(local_st)
        else:
            print("  Загружаем с HuggingFace...")
            _st_model = SentenceTransformer(remote_st)

        _cb_models = []
        for f in cbm_files:
            m = CatBoostRegressor()
            m.load_model(f)
            _cb_models.append(m)

        _ml_ready = True
        print("  ML-модели загружены успешно!")
    except Exception as e:
        _ml_error = str(e)
        print(f"  Предупреждение: ML-модели не загружены: {e}")

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# ──────────────────────────────────────────
# VOSK — офлайн распознавание речи
# ──────────────────────────────────────────
_vosk_model  = None
_vosk_ready  = False
_vosk_error  = None

def _load_vosk():
    global _vosk_model, _vosk_ready, _vosk_error
    try:
        import vosk
        base_dir   = os.path.dirname(os.path.abspath(__file__))
        model_path = os.path.join(base_dir, "vosk-model-small-ru-0.22")
        if not os.path.isdir(model_path):
            _vosk_error = f"Папка модели не найдена: {model_path}"
            print(f"  WARNING Vosk: {_vosk_error}")
            return
        vosk.SetLogLevel(-1)           # глушим лишние логи
        _vosk_model = vosk.Model(model_path)
        _vosk_ready = True
        print("  Vosk модель загружена успешно!")
    except ImportError:
        _vosk_error = "Пакет vosk не установлен. Выполните: pip install vosk"
        print(f"  WARNING Vosk: {_vosk_error}")
    except Exception as e:
        _vosk_error = str(e)
        print(f"  WARNING Vosk: {e}")

app = Flask(__name__, static_folder=".")
CORS(app)

DB_FILE = "db.json"

# ──────────────────────────────────────────
# БД
# users:      { username: { id, username, password_hash, name, surname, school, role } }
# tasks:      { username: [ {id, title, desc, date, time, source, done, status,
#                             teacher_file, teacher_file_path,        ← файл учителя
#                             student_file, student_file_path,        ← файл ученика
#                             assigned_by, class_id} ] }
# invitations:{ username: [ {id, from_teacher_id, from_teacher_name,
#                             class_id, class_name, status, created_at} ] }
# classes:    { class_id: { id, name, subject, teacher_id, student_ids:[] } }
# ──────────────────────────────────────────

def load_db():
    if not os.path.exists(DB_FILE):
        return {"users": {}, "tasks": {}, "invitations": {}, "classes": {}}
    with open(DB_FILE, "r", encoding="utf-8") as f:
        db = json.load(f)
    # миграция старых БД
    if "invitations" not in db: db["invitations"] = {}
    if "classes"     not in db: db["classes"]     = {}
    return db

def save_db(db):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

def init_db():
    db = load_db()
    if not db["users"]:
        db["users"]["ivan"] = {
            "id": 1001,
            "username": "ivan",
            "password_hash": generate_password_hash("1234"),
            "name": "Иван",
            "surname": "Иванов",
            "school": "Школа №123",
            "role": "student"
        }
        db["tasks"]["ivan"] = [
            {"id": 1, "title": "Математика",     "desc": "Решить уравнения",        "date": "2025-05-15", "time": "15:30–16:30", "source": "teacher", "done": True,  "status": "done"},
            {"id": 2, "title": "История",         "desc": "Подготовить доклад",      "date": "2025-05-16", "time": "16:10–17:00", "source": "teacher", "done": False, "status": "progress"},
            {"id": 3, "title": "Английский язык", "desc": "Выучить новые слова",     "date": "2025-05-14", "time": "14:00–14:40", "source": "parent",  "done": False, "status": "pending"},
            {"id": 4, "title": "Литература",      "desc": "Прочитать главы 5-6",     "date": "2025-05-15", "time": "18:00–19:00", "source": "teacher", "done": False, "status": "review"},
            {"id": 5, "title": "Физика",          "desc": "Оформить лабораторную",   "date": "2025-05-18", "time": "12:20–13:10", "source": "teacher", "done": False, "status": "pending"},
            {"id": 6, "title": "Биология",        "desc": "Подготовить презентацию", "date": "2025-05-19", "time": "17:00–18:00", "source": "parent",  "done": False, "status": "pending"},
            {"id": 7, "title": "География",       "desc": "Выучить карту регионов",  "date": "2025-05-20", "time": "13:00–13:45", "source": "teacher", "done": True,  "status": "done"},
        ]
        db["invitations"]["ivan"] = []
        save_db(db)

def gen_id():
    return str(uuid.uuid4())[:8]

# ──────────────────────────────────────────
# TELEGRAM УВЕДОМЛЕНИЯ (асинхронно через поток)
# ──────────────────────────────────────────

def _tg_notify(chat_id: int, text: str):
    """Отправляет Telegram-сообщение в фоновом потоке. Не блокирует запрос."""
    import threading, asyncio as _asyncio
    BOT_TOKEN = "8228032530:AAEjRXKotOY-nV1bAqknVumpnTJ_3kbOxUs"

    def _send():
        import httpx
        url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
        try:
            httpx.post(url, json={
                "chat_id":    chat_id,
                "text":       text,
                "parse_mode": "HTML"
            }, timeout=10)
        except Exception as e:
            print(f"  [TG notify] Ошибка: {e}")

    threading.Thread(target=_send, daemon=True).start()

def _notify_user(username: str, text: str):
    """Отправляет уведомление пользователю по username если у него привязан Telegram."""
    db      = load_db()
    user    = db["users"].get(username, {})
    chat_id = user.get("tg_chat_id")
    if chat_id:
        _tg_notify(chat_id, text)

def _notify_user_by_id(user_id: int, text: str):
    """Отправляет уведомление пользователю по числовому id."""
    db = load_db()
    for username, u in db["users"].items():
        if u.get("id") == user_id:
            chat_id = u.get("tg_chat_id")
            if chat_id:
                _tg_notify(chat_id, text)
            break

# ──────────────────────────────────────────
# AUTH
# ──────────────────────────────────────────

@app.route("/api/register", methods=["POST"])
def register():
    data = request.json or {}
    username = str(data.get("username", "")).strip().lower()
    password = str(data.get("password", ""))
    name     = str(data.get("name", "")).strip()
    surname  = str(data.get("surname", "")).strip()
    school   = str(data.get("school", "")).strip() or None
    role     = str(data.get("role", ""))

    if len(username) < 3:
        return jsonify({"ok": False, "error": "Логин — не менее 3 символов."}), 400
    if len(password) < 4:
        return jsonify({"ok": False, "error": "Пароль — не менее 4 символов."}), 400
    if not name:
        return jsonify({"ok": False, "error": "Введите имя."}), 400
    if not surname:
        return jsonify({"ok": False, "error": "Введите фамилию."}), 400
    if role not in ("student", "teacher", "parent"):
        return jsonify({"ok": False, "error": "Выберите роль."}), 400
    if role in ("student", "teacher") and not school:
        return jsonify({"ok": False, "error": "Введите название школы."}), 400

    db = load_db()
    if username in db["users"]:
        return jsonify({"ok": False, "error": "Такой логин уже занят."}), 400

    user_id = int(gen_id(), 16) % 9000000 + 1000000
    db["users"][username] = {
        "id": user_id,
        "username": username,
        "password_hash": generate_password_hash(password),
        "name": name,
        "surname": surname,
        "school": school,
        "role": role,
    }
    db["tasks"][username]      = []
    db["invitations"][username] = []
    save_db(db)

    user = {k: v for k, v in db["users"][username].items() if k != "password_hash"}
    return jsonify({"ok": True, "user": user})


@app.route("/api/login", methods=["POST"])
def login():
    data     = request.json or {}
    username = str(data.get("username", "")).strip().lower()
    password = str(data.get("password", ""))

    if not username or not password:
        return jsonify({"ok": False, "error": "Введите логин и пароль."}), 400

    db = load_db()
    u  = db["users"].get(username)
    if not u or not check_password_hash(u["password_hash"], password):
        return jsonify({"ok": False, "error": "Неверный логин или пароль."}), 401

    user = {k: v for k, v in u.items() if k != "password_hash"}
    return jsonify({"ok": True, "user": user})


# ──────────────────────────────────────────
# ПОИСК ПОЛЬЗОВАТЕЛЯ ПО ID (для учителя)
# ──────────────────────────────────────────

@app.route("/api/user_by_id/<int:user_id>", methods=["GET"])
def user_by_id(user_id):
    db = load_db()
    for username, u in db["users"].items():
        if u["id"] == user_id:
            safe = {k: v for k, v in u.items() if k != "password_hash"}
            return jsonify({"ok": True, "user": safe})
    return jsonify({"ok": False, "error": "Пользователь не найден"}), 404


# ──────────────────────────────────────────
# ПРИГЛАШЕНИЯ
# ──────────────────────────────────────────

@app.route("/api/invitations/<username>", methods=["GET"])
def get_invitations(username):
    db = load_db()
    invs = db["invitations"].get(username, [])
    return jsonify({"ok": True, "invitations": invs})


@app.route("/api/invitations/send", methods=["POST"])
def send_invitation():
    """Учитель отправляет приглашение ученику в класс."""
    data = request.json or {}
    student_id      = data.get("student_id")
    class_id        = data.get("class_id")
    class_name      = str(data.get("class_name", ""))
    teacher_id      = data.get("teacher_id")
    teacher_name    = str(data.get("teacher_name", ""))

    db = load_db()
    # Найти ученика по id
    student_user = None
    for username, u in db["users"].items():
        if u["id"] == student_id:
            student_user = u
            student_username = username
            break
    if not student_user:
        return jsonify({"ok": False, "error": "Ученик не найден"}), 404
    if student_user["role"] != "student":
        return jsonify({"ok": False, "error": "Пользователь не является учеником"}), 400

    invs = db["invitations"].setdefault(student_username, [])
    # Не дублировать
    for inv in invs:
        if inv["class_id"] == class_id and inv["status"] == "pending":
            return jsonify({"ok": False, "error": "Приглашение уже отправлено"}), 400

    inv = {
        "id":               gen_id(),
        "from_teacher_id":  teacher_id,
        "from_teacher_name":teacher_name,
        "class_id":         class_id,
        "class_name":       class_name,
        "status":           "pending",
        "created_at":       __import__("datetime").datetime.now().isoformat()
    }
    invs.append(inv)
    db["invitations"][student_username] = invs
    save_db(db)

    safe = {k: v for k, v in student_user.items() if k != "password_hash"}
    return jsonify({"ok": True, "user": safe, "invitation": inv})


@app.route("/api/invitations/<username>/<inv_id>", methods=["PUT"])
def respond_invitation(username, inv_id):
    """Ученик принимает или отклоняет приглашение."""
    data   = request.json or {}
    action = data.get("action")  # "accept" | "reject"
    if action not in ("accept", "reject"):
        return jsonify({"ok": False, "error": "action must be accept or reject"}), 400

    db   = load_db()
    invs = db["invitations"].get(username, [])
    inv  = next((i for i in invs if i["id"] == inv_id), None)
    if not inv:
        return jsonify({"ok": False, "error": "Приглашение не найдено"}), 404

    inv["status"] = "accepted" if action == "accept" else "rejected"

    if action == "accept":
        # Добавить ученика в класс (в БД)
        cls = db["classes"].get(inv["class_id"])
        if cls:
            student_id = db["users"][username]["id"]
            if student_id not in cls.get("student_ids", []):
                cls.setdefault("student_ids", []).append(student_id)
                db["classes"][inv["class_id"]] = cls

    db["invitations"][username] = invs
    save_db(db)
    return jsonify({"ok": True, "invitation": inv})


# ──────────────────────────────────────────
# КЛАССЫ (серверная хранилище)
# ──────────────────────────────────────────

@app.route("/api/classes", methods=["POST"])
def create_class():
    data    = request.json or {}
    name    = str(data.get("name", "")).strip()
    subject = str(data.get("subject", "")).strip()
    teacher_id = data.get("teacher_id")
    if not name:
        return jsonify({"ok": False, "error": "Введите название класса"}), 400

    db  = load_db()
    cid = "cls_" + gen_id()
    cls = {
        "id":          cid,
        "name":        name,
        "subject":     subject,
        "teacher_id":  teacher_id,
        "student_ids": [],
        "created_at":  __import__("datetime").datetime.now().isoformat()
    }
    db["classes"][cid] = cls
    save_db(db)
    return jsonify({"ok": True, "class": cls})


@app.route("/api/classes/teacher/<int:teacher_id>", methods=["GET"])
def get_classes_by_teacher(teacher_id):
    db      = load_db()
    classes = [c for c in db["classes"].values() if c.get("teacher_id") == teacher_id]
    return jsonify({"ok": True, "classes": classes})


@app.route("/api/classes/<class_id>", methods=["DELETE"])
def delete_class(class_id):
    db = load_db()
    if class_id not in db["classes"]:
        return jsonify({"ok": False, "error": "Класс не найден"}), 404
    del db["classes"][class_id]
    save_db(db)
    return jsonify({"ok": True})


# ──────────────────────────────────────────
# ЗАДАНИЯ
# ──────────────────────────────────────────

def get_tasks_for(username):
    db = load_db()
    return db["tasks"].get(username, [])

def save_tasks_for(username, tasks):
    db = load_db()
    db["tasks"][username] = tasks
    save_db(db)


@app.route("/api/tasks/<username>", methods=["GET"])
def tasks_get(username):
    return jsonify({"ok": True, "tasks": get_tasks_for(username)})


@app.route("/api/tasks/<username>", methods=["POST"])
def task_create(username):
    data  = request.json or {}
    tasks = get_tasks_for(username)
    new_id = max((t["id"] for t in tasks), default=0) + 1
    task = {
        "id":          new_id,
        "title":       str(data.get("title", "")).strip(),
        "desc":        str(data.get("desc", "")).strip(),
        "date":        str(data.get("date", "")),
        "time":        str(data.get("time", "")),
        "source":      str(data.get("source", "self")),
        "done":        bool(data.get("done", False)),
        "status":      "pending",
        "assigned_by": data.get("assigned_by"),   # teacher_id если от учителя
        "class_id":    data.get("class_id"),
    }
    if not task["title"] or not task["date"]:
        return jsonify({"ok": False, "error": "Заполните обязательные поля."}), 400
    tasks.append(task)
    save_tasks_for(username, tasks)

    # Уведомляем ученика если задание от родителя
    if task["source"] == "parent":
        _notify_user(
            username,
            f"👨‍👩‍👧 <b>Новое задание от родителя!</b>\n\n"
            f"📌 <b>{task['title']}</b>\n"
            f"📅 {task['date']}" + (f"  ⏰ {task['time']}" if task['time'] else "") + "\n" +
            (f"📝 {task['desc'][:150]}" if task['desc'] else "")
        )

    return jsonify({"ok": True, "task": task})


@app.route("/api/tasks/<username>/<int:task_id>", methods=["PUT"])
def task_update(username, task_id):
    data  = request.json or {}
    tasks = get_tasks_for(username)
    task  = next((t for t in tasks if t["id"] == task_id), None)
    if not task:
        return jsonify({"ok": False, "error": "Задача не найдена."}), 404

    VALID_STATUSES = {"pending", "progress", "review", "done", "rejected"}
    new_status = data.get("status", task.get("status", "pending"))
    if new_status not in VALID_STATUSES:
        new_status = task.get("status", "pending")

    task.update({
        "title":  str(data.get("title",  task["title"])).strip(),
        "desc":   str(data.get("desc",   task["desc"])).strip(),
        "date":   str(data.get("date",   task["date"])),
        "time":   str(data.get("time",   task["time"])),
        "source": str(data.get("source", task["source"])),
        "status": new_status,
        "done":   new_status == "done",
    })
    save_tasks_for(username, tasks)

    # Уведомляем учителя/родителя если задание отправлено на проверку
    if new_status == "review":
        db   = load_db()
        u    = db["users"].get(username, {})
        name = f"{u.get('name','')} {u.get('surname','')}".strip() or username
        assigned_by = task.get("assigned_by")
        source      = task.get("source", "")
        notify_text = (
            f"👀 <b>Задание отправлено на проверку!</b>\n\n"
            f"👤 Ученик: {name}\n"
            f"📌 {task.get('title','—')}\n"
            f"📅 {task.get('date','')}"
        )
        if assigned_by:
            _notify_user_by_id(assigned_by, notify_text)
        elif source == "parent":
            # Уведомляем всех родителей этого ученика
            for uname, pu in db["users"].items():
                if pu.get("role") == "parent":
                    children = pu.get("children", [])
                    if u.get("id") in children:
                        chat_id = pu.get("tg_chat_id")
                        if chat_id:
                            _tg_notify(chat_id, notify_text)

    return jsonify({"ok": True, "task": task})


@app.route("/api/tasks/<username>/<int:task_id>", methods=["DELETE"])
def task_delete(username, task_id):
    tasks = get_tasks_for(username)
    new_tasks = [t for t in tasks if t["id"] != task_id]
    if len(new_tasks) == len(tasks):
        return jsonify({"ok": False, "error": "Задача не найдена."}), 404
    save_tasks_for(username, new_tasks)
    return jsonify({"ok": True})


# ── Массовое создание задания учителем (всему классу или одному ученику) ──

@app.route("/api/teacher/assign", methods=["POST"])
def teacher_assign():
    """
    Учитель создаёт задание.
    target: "class" | "student"
    target_id: class_id | student_id (число)
    """
    data        = request.json or {}
    target      = data.get("target")   # "class" | "student"
    target_id   = data.get("target_id")
    title       = str(data.get("title", "")).strip()
    desc        = str(data.get("desc",  "")).strip()
    date        = str(data.get("date",  ""))
    time        = str(data.get("time",  ""))
    teacher_id  = data.get("teacher_id")
    class_id    = data.get("class_id")

    if not title or not date:
        return jsonify({"ok": False, "error": "Заполните название и дату"}), 400

    db = load_db()

    # Определяем список учеников
    usernames = []
    if target == "class":
        cls = db["classes"].get(str(target_id))
        if not cls:
            return jsonify({"ok": False, "error": "Класс не найден"}), 404
        student_ids = cls.get("student_ids", [])
        for uname, u in db["users"].items():
            if u["id"] in student_ids and u["role"] == "student":
                usernames.append(uname)
    elif target == "student":
        for uname, u in db["users"].items():
            if u["id"] == target_id and u["role"] == "student":
                usernames.append(uname)
                break
    else:
        return jsonify({"ok": False, "error": "target must be class or student"}), 400

    if not usernames:
        return jsonify({"ok": False, "error": "Нет учеников для назначения"}), 400

    created = []
    for uname in usernames:
        tasks = db["tasks"].get(uname, [])
        new_id = max((t["id"] for t in tasks), default=0) + 1
        task = {
            "id":          new_id,
            "title":       title,
            "desc":        desc,
            "date":        date,
            "time":        time,
            "source":      "teacher",
            "done":        False,
            "status":      "pending",
            "assigned_by": teacher_id,
            "class_id":    class_id,
        }
        tasks.append(task)
        db["tasks"][uname] = tasks
        created.append({"username": uname, "task_id": new_id})

    save_db(db)

    # Уведомляем учеников о новом задании
    for item in created:
        _notify_user(
            item["username"],
            f"📚 <b>Новое задание от учителя!</b>\n\n"
            f"📌 <b>{title}</b>\n"
            f"📅 {date}" + (f"  ⏰ {time}" if time else "") + "\n" +
            (f"📝 {desc[:150]}" if desc else "")
        )

    return jsonify({"ok": True, "assigned": created})


# ── Файл учителя к заданию ──

@app.route("/api/teacher/task_file", methods=["POST"])
def upload_teacher_file():
    """Учитель прикрепляет файл к заданию всему классу или одному ученику."""
    task_id_str = request.form.get("task_id")
    username    = request.form.get("username")   # ученик
    if not task_id_str or not username:
        return jsonify({"ok": False, "error": "Нужны task_id и username"}), 400
    if "file" not in request.files:
        return jsonify({"ok": False, "error": "Файл не найден"}), 400

    file = request.files["file"]
    if not file.filename:
        return jsonify({"ok": False, "error": "Пустое имя файла"}), 400

    original_name = secure_filename(file.filename)
    save_name = f"teacher_{username}_{task_id_str}_{original_name}"
    file.save(os.path.join(UPLOAD_FOLDER, save_name))

    db    = load_db()
    tasks = db["tasks"].get(username, [])
    task  = next((t for t in tasks if t["id"] == int(task_id_str)), None)
    if task:
        task["teacher_file"]      = original_name
        task["teacher_file_path"] = save_name
        db["tasks"][username]     = tasks
        save_db(db)

    return jsonify({"ok": True, "filename": original_name})


@app.route("/api/teacher/task_file/<username>/<int:task_id>", methods=["GET"])
def download_teacher_file(username, task_id):
    db    = load_db()
    tasks = db["tasks"].get(username, [])
    task  = next((t for t in tasks if t["id"] == task_id), None)
    if not task or not task.get("teacher_file_path"):
        return jsonify({"ok": False, "error": "Файл не найден"}), 404
    return send_from_directory(UPLOAD_FOLDER, task["teacher_file_path"],
                               as_attachment=True, download_name=task["teacher_file"])


# ── Файл ученика к заданию ──

@app.route("/api/tasks/<username>/<int:task_id>/file", methods=["POST"])
def upload_student_file(username, task_id):
    if "file" not in request.files:
        return jsonify({"ok": False, "error": "Файл не найден"}), 400
    file = request.files["file"]
    if not file.filename:
        return jsonify({"ok": False, "error": "Пустое имя файла"}), 400

    original_name = secure_filename(file.filename)
    save_name     = f"{username}_{task_id}_{original_name}"
    file.save(os.path.join(UPLOAD_FOLDER, save_name))

    db    = load_db()
    tasks = db["tasks"].get(username, [])
    task  = next((t for t in tasks if t["id"] == task_id), None)
    if task:
        task["student_file"]      = original_name
        task["student_file_path"] = save_name
        # Обратная совместимость
        task["attachment"]      = original_name
        task["attachment_path"] = save_name
        db["tasks"][username]   = tasks
        save_db(db)

    return jsonify({"ok": True, "filename": original_name})


@app.route("/api/tasks/<username>/<int:task_id>/file", methods=["GET"])
def download_student_file(username, task_id):
    db    = load_db()
    tasks = db["tasks"].get(username, [])
    task  = next((t for t in tasks if t["id"] == task_id), None)
    if not task or not task.get("student_file_path"):
        return jsonify({"ok": False, "error": "Файл не найден"}), 404
    return send_from_directory(UPLOAD_FOLDER, task["student_file_path"],
                               as_attachment=True, download_name=task["student_file"])


# ── Задания на проверку (для учителя) ──

@app.route("/api/teacher/review_tasks/<int:teacher_id>", methods=["GET"])
def get_review_tasks(teacher_id):
    """Возвращает все задания учеников со статусом review, назначенные этим учителем."""
    db    = load_db()
    result = []
    for username, tasks in db["tasks"].items():
        for task in tasks:
            if task.get("assigned_by") == teacher_id and task.get("status") == "review":
                u = db["users"].get(username, {})
                result.append({
                    **task,
                    "student_username": username,
                    "student_name":     u.get("name", ""),
                    "student_surname":  u.get("surname", ""),
                    "student_id":       u.get("id"),
                })
    return jsonify({"ok": True, "tasks": result})


@app.route("/api/teacher/review_tasks/<username>/<int:task_id>", methods=["PUT"])
def teacher_review_task(username, task_id):
    """Учитель принимает (done) или отклоняет (rejected) работу ученика."""
    data      = request.json or {}
    new_status = data.get("status")  # "done" | "rejected"
    if new_status not in ("done", "rejected"):
        return jsonify({"ok": False, "error": "status must be done or rejected"}), 400

    tasks = get_tasks_for(username)
    task  = next((t for t in tasks if t["id"] == task_id), None)
    if not task:
        return jsonify({"ok": False, "error": "Задача не найдена"}), 404

    task["status"] = new_status
    task["done"]   = (new_status == "done")
    save_tasks_for(username, tasks)
    return jsonify({"ok": True, "task": task})


# ──────────────────────────────────────────
# Serve index.html
# ──────────────────────────────────────────

@app.route("/")
def index():
    return send_from_directory(".", "index.html")


# ──────────────────────────────────────────
# VOSK — эндпоинт распознавания речи
# ──────────────────────────────────────────

@app.route("/api/speech", methods=["POST"])
def speech_recognize():
    """
    Принимает аудио-файл (WAV, 16-bit PCM, любая частота дискретизации)
    и возвращает распознанный текст через Vosk.
    Content-Type: multipart/form-data, поле "audio".
    """
    if not _vosk_ready:
        return jsonify({"ok": False, "error": _vosk_error or "Vosk не инициализирован"}), 503

    if "audio" not in request.files:
        return jsonify({"ok": False, "error": "Поле audio не найдено"}), 400

    audio_file = request.files["audio"]
    tmp_path   = os.path.join(UPLOAD_FOLDER, f"_vosk_tmp_{gen_id()}.wav")

    try:
        audio_file.save(tmp_path)

        import wave, json as _json, subprocess, tempfile
        import vosk

        # Конвертируем входной файл (webm/ogg/mp4/wav) в WAV 16-bit mono 16kHz через ffmpeg
        wav_path = tmp_path.replace('.wav', '_conv.wav')
        ffmpeg_cmd = [
            'ffmpeg', '-y', '-i', tmp_path,
            '-ar', '16000',   # 16 kHz — оптимально для Vosk
            '-ac', '1',       # моно
            '-sample_fmt', 's16',
            wav_path
        ]
        result = subprocess.run(ffmpeg_cmd, capture_output=True, timeout=30)
        if result.returncode != 0:
            return jsonify({"ok": False,
                            "error": "ffmpeg не смог конвертировать аудио: " +
                                     result.stderr.decode(errors='replace')[:200]}), 500

        wf = wave.open(wav_path, "rb")
        sample_rate = wf.getframerate()

        rec = vosk.KaldiRecognizer(_vosk_model, sample_rate)
        rec.SetWords(False)

        results = []
        while True:
            data = wf.readframes(4000)
            if not data:
                break
            if rec.AcceptWaveform(data):
                r = _json.loads(rec.Result())
                if r.get("text"):
                    results.append(r["text"])

        final = _json.loads(rec.FinalResult())
        if final.get("text"):
            results.append(final["text"])

        wf.close()
        text = " ".join(results).strip()
        return jsonify({"ok": True, "text": text})

    except Exception as e:
        return jsonify({"ok": False, "error": str(e)}), 500
    finally:
        for p in (tmp_path, tmp_path.replace('.wav', '_conv.wav')):
            if os.path.exists(p):
                os.remove(p)


# ──────────────────────────────────────────
# AI - ГЕНЕРАЦИЯ ТЕСТА
# ──────────────────────────────────────────

@app.route("/api/ai/generate_test", methods=["POST"])
def ai_generate_test():
    """
    Генерирует тест на основе темы/описания/файла.
    Body: {title, desc, file_name?}
    """
    data = request.json or {}
    title = str(data.get("title", "")).strip()
    desc = str(data.get("desc", "")).strip()
    file_name = str(data.get("file_name", "")).strip()

    if not title and not desc:
        return jsonify({"ok": False, "error": "Нет данных для генерации теста"}), 400

    system_prompt = (
        "Ты — помощник учителя. Твоя задача — создать тест из 5 вопросов с 4 вариантами ответа (A, B, C, D). "
        "Каждый вопрос должен проверять понимание материала, а не зубрёжку. "
        "\n\nСТРОГИЙ ФОРМАТ (без вступлений, без пояснений, только вопросы):\n"
        "Q1. [Текст вопроса]\n"
        "A) [вариант ответа]\n"
        "B) [вариант ответа]\n"
        "C) [вариант ответа]\n"
        "D) [вариант ответа]\n"
        "Правильный: [буква A/B/C/D]\n\n"
        "Q2. [Текст вопроса]... и так далее до Q5."
    )

    user_content = f"Школьное задание: {title}\nЧто нужно изучить или выполнить: {desc}"
    if file_name:
        user_content += f"\nФайл: {file_name}"
    user_content += "\n\nСоздай тест из 5 вопросов по этому материалу."

    response = _ollama_chat(system_prompt, user_content)
    if response is None:
        return jsonify({"ok": False, "error": "Ollama недоступна. Убедитесь, что сервер запущен."}), 503

    return jsonify({"ok": True, "content": response})


# ──────────────────────────────────────────
# AI - ОБЪЯСНЕНИЕ ТЕМЫ (ИСПРАВЛЕНО)
# ──────────────────────────────────────────

@app.route("/api/ai/explain", methods=["POST"])
def ai_explain():
    """
    Объясняет тему или определяет, что это не тема.
    Body: {title, desc}
    Returns: {ok, is_topic, content?}
    """
    data = request.json or {}
    title = str(data.get("title", "")).strip()
    desc = str(data.get("desc", "")).strip()

    # ИСПРАВЛЕНИЕ: Если title пустой — используем desc, и наоборот
    # Берём то, что не пустое
    if not title and desc:
        title = desc
        desc = ""
    
    # Если и то и другое пустое — ошибка
    if not title:
        return jsonify({"ok": False, "error": "Нет данных для объяснения"}), 400

    # First, check if it's a topic or just an instruction
    check_prompt = (
        "Ты анализируешь школьные задания. "
        "Определи: содержит ли задание КОНКРЕТНУЮ УЧЕБНУЮ ДИСЦИПЛИНУ или ПРЕДМЕТ для изучения "
        "(например: радиоактивность, квадратные уравнения, Вторая мировая война, клеточное строение, закон Ома) "
        "или это просто ДЕЙСТВИЕ без конкретного предмета (прочитать, сделать дз, выучить, решить, подготовить). "
        "\n\nОтветь ТОЛЬКО одним словом: TOPIC (если есть конкретный предмет изучения) или INSTRUCTION (если только действие)."
    )

    check_content = f'Задание: "{title}"\nОписание: "{desc}"\n\nВ задании есть конкретный предмет изучения (TOPIC) или только действие (INSTRUCTION)?'

    check_response = _ollama_chat(check_prompt, check_content, temperature=0.3)
    if check_response is None:
        return jsonify({"ok": False, "error": "Ollama недоступна"}), 503

    is_topic = "TOPIC" in check_response.upper() and "INSTRUCTION" not in check_response.upper()

    if not is_topic:
        return jsonify({"ok": True, "is_topic": False, "content": None})

    # Generate explanation
    explain_prompt = (
        "Ты - дружелюбный учитель, объясняющий школьные темы простым языком. "
        "Дай развёрнутое объяснение (3-5 абзацев). Используй примеры, аналогии, структурируй текст. "
        "Формат: Markdown с заголовками (###), жирным текстом (**), списками."
    )

    explain_content = f'Объясни тему: "{title}"\n\nКонтекст: {desc}'

    explain_response = _ollama_chat(explain_prompt, explain_content)
    if explain_response is None:
        return jsonify({"ok": False, "error": "Ollama недоступна при генерации объяснения"}), 503

    return jsonify({"ok": True, "is_topic": True, "content": explain_response})


# ──────────────────────────────────────────
# AI - УТОЧНЯЮЩИЙ ВОПРОС (чат)
# ──────────────────────────────────────────

@app.route("/api/ai/ask", methods=["POST"])
def ai_ask():
    """
    Отвечает на уточняющий вопрос по теме.
    Body: {topic, question, history?}
    """
    data = request.json or {}
    topic = str(data.get("topic", "")).strip()
    question = str(data.get("question", "")).strip()
    history = data.get("history", [])

    if not question:
        return jsonify({"ok": False, "error": "Введите вопрос"}), 400

    system_prompt = f'Ты продолжаешь объяснять тему "{topic}". Отвечай кратко и понятно, как учитель школьнику.'

    messages = [{"role": "system", "content": system_prompt}]
    for h in history:
        messages.append({"role": h.get("role", "user"), "content": h.get("content", "")})
    messages.append({"role": "user", "content": question})

    try:
        r = requests.post(
            f"{OLLAMA_URL}/api/chat",
            json={"model": OLLAMA_MODEL, "messages": messages, "stream": False, "temperature": 0.7, "keep_alive": -1},
            timeout=60
        )
        r.raise_for_status()
        data = r.json()
        answer = data.get("message", {}).get("content", "")
        return jsonify({"ok": True, "answer": answer})
    except Exception as e:
        return jsonify({"ok": False, "error": str(e)}), 503


# ──────────────────────────────────────────
# ПРЕДСКАЗАНИЕ ВРЕМЕНИ
# ──────────────────────────────────────────

@app.route("/api/predict_time", methods=["POST"])
def predict_time():
    if not _ml_ready:
        return jsonify({"ok": False, "error": _ml_error or "ML-модели не загружены"}), 503
    data = request.json or {}
    text = str(data.get("text", "")).strip()
    if not text:
        return jsonify({"ok": False, "error": "Передайте поле text"}), 400
    try:
        emb   = _st_model.encode([text])
        preds = [float(np.expm1(m.predict(emb)[0])) for m in _cb_models]
        minutes = max(1, round(float(np.mean(preds))))
        return jsonify({"ok": True, "minutes": minutes})
    except Exception as e:
        return jsonify({"ok": False, "error": str(e)}), 500


# ──────────────────────────────────────────
# AI - СОВЕТЫ НА ОСНОВЕ СТАТИСТИКИ
# ──────────────────────────────────────────

@app.route("/api/ai/stats_advice", methods=["POST"])
def ai_stats_advice():
    """
    Анализирует просроченные и отклонённые задания ученика.
    Возвращает ответ как SSE-стрим: токены идут сразу по мере генерации.
    Клиент начинает видеть текст через ~1с вместо ожидания полного ответа.
    """
    data = request.json or {}
    overdue  = data.get("overdue",  [])
    rejected = data.get("rejected", [])
    done_count  = int(data.get("done_count",  0))
    total_count = int(data.get("total_count", 0))

    if not overdue and not rejected:
        # Нет проблем — отвечаем сразу без AI
        def no_problems():
            yield f"data: {json.dumps({'token': '🎉 Отлично! Нет просроченных и отклонённых заданий. Так держать!'})}\n\n"
            yield "data: [DONE]\n\n"
        return app.response_class(no_problems(), mimetype="text/event-stream",
                                   headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    lines = [f"Всего заданий: {total_count}, выполнено: {done_count}."]
    if overdue:
        lines.append(f"\nПросроченные ({len(overdue)}):")
        for t in overdue[:8]:
            lines.append(f"  - «{t.get('title','')}»: {t.get('desc','')[:60]}")
    if rejected:
        lines.append(f"\nОтклонённые ({len(rejected)}):")
        for t in rejected[:8]:
            lines.append(f"  - «{t.get('title','')}»: {t.get('desc','')[:60]}")
    stats_text = "\n".join(lines)

    system_prompt = (
        "Ты — дружелюбный школьный наставник. Анализируй успеваемость кратко и по делу. "
        "Пиши по-русски. Markdown: ### заголовки, ** жирный, - списки. "
        "Структура (строго): ### 📊 Что происходит\n### 🔁 Что повторить\n### 💡 Советы\n"
        "Максимум 200 слов. Будь конкретным."
    )
    user_content = f"Статистика:\n{stats_text}\n\nКраткий анализ и советы."

    def generate():
        try:
            url = f"{OLLAMA_URL}/api/chat"
            payload = {
                "model": OLLAMA_MODEL,
                "messages": [
                    {"role": "system", "content": system_prompt},
                    {"role": "user",   "content": user_content}
                ],
                "stream": True,
                "keep_alive": -1,
                "options": {"temperature": 0.6, "num_predict": 350, "num_ctx": 1024}
            }
            r = requests.post(url, json=payload, timeout=120, stream=True)
            r.raise_for_status()
            for line in r.iter_lines():
                if not line:
                    continue
                try:
                    chunk = json.loads(line)
                except Exception:
                    continue
                token = chunk.get("message", {}).get("content", "")
                if token:
                    yield f"data: {json.dumps({'token': token})}\n\n"
                if chunk.get("done"):
                    break
            yield "data: [DONE]\n\n"
        except requests.exceptions.ConnectionError:
            yield f"data: {json.dumps({'error': 'Ollama недоступна. Запустите: ollama serve'})}\n\n"
            yield "data: [DONE]\n\n"
        except Exception as e:
            yield f"data: {json.dumps({'error': str(e)})}\n\n"
            yield "data: [DONE]\n\n"

    return app.response_class(
        generate(),
        mimetype="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"}
    )


def _warmup_ollama():
    """
    Прогревает Ollama в фоне при старте — модель загружается в VRAM заранее.
    Используем стриминг чтобы прогрев тоже был быстрым.
    """
    import threading
    def _do_warmup():
        print(f"  [Ollama] Прогрев модели {OLLAMA_MODEL}...")
        try:
            url = f"{OLLAMA_URL}/api/chat"
            payload = {
                "model": OLLAMA_MODEL,
                "messages": [{"role": "user", "content": "ok"}],
                "stream": True,
                "keep_alive": -1,
                "options": {"num_predict": 1}   # генерируем 1 токен — только загрузка
            }
            r = requests.post(url, json=payload, timeout=60, stream=True)
            if r.status_code == 200:
                for _ in r.iter_lines(): pass   # дочитываем стрим до конца
                print(f"  [Ollama] ✓ Модель {OLLAMA_MODEL} загружена в память")
            else:
                print(f"  [Ollama] Прогрев: статус {r.status_code}")
        except requests.exceptions.ConnectionError:
            print(f"  [Ollama] Сервер недоступен при прогреве. Запустите: ollama serve")
        except Exception as e:
            print(f"  [Ollama] Ошибка прогрева: {e}")
    threading.Thread(target=_do_warmup, daemon=True).start()


if __name__ == "__main__":
    init_db()
    _load_ml()
    _load_vosk()
    _warmup_ollama()
    print("=" * 50)
    print("  SchoolPlan Backend v2 запущен!")
    print("  Открой в браузере: http://localhost:5000")
    print("  Демо-аккаунт: ivan / 1234")
    print("=" * 50)
    app.run(debug=True, port=5000)
