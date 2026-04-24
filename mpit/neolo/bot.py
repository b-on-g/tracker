"""
SchoolPlan Telegram Bot
Запуск: python bot.py
Работает параллельно с app.py (python app.py в одном окне, python bot.py в другом).
"""

import asyncio
import json
import os
import logging
from datetime import datetime, timedelta

from telegram import Update, ReplyKeyboardMarkup, ReplyKeyboardRemove
from telegram.ext import (
    Application, CommandHandler, MessageHandler,
    filters, ContextTypes, ConversationHandler
)

logging.basicConfig(
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
    level=logging.INFO
)
logger = logging.getLogger(__name__)

# ──────────────────────────────────────────
# КОНФИГ
# ──────────────────────────────────────────
BOT_TOKEN = "8228032530:AAEjRXKotOY-nV1bAqknVumpnTJ_3kbOxUs"
DB_FILE   = os.path.join(os.path.dirname(os.path.abspath(__file__)), "db.json")

# Состояния ConversationHandler для авторизации
ASK_LOGIN, ASK_PASSWORD = range(2)

# ──────────────────────────────────────────
# РАБОТА С БД (напрямую, без HTTP)
# ──────────────────────────────────────────

def load_db():
    if not os.path.exists(DB_FILE):
        return {"users": {}, "tasks": {}, "invitations": {}, "classes": {}}
    with open(DB_FILE, "r", encoding="utf-8") as f:
        db = json.load(f)
    if "invitations" not in db: db["invitations"] = {}
    if "classes"     not in db: db["classes"]     = {}
    return db

def save_db(db):
    with open(DB_FILE, "w", encoding="utf-8") as f:
        json.dump(db, f, ensure_ascii=False, indent=2)

def get_user_by_chat_id(chat_id: int):
    """Возвращает (username, user_dict) или (None, None)."""
    db = load_db()
    for username, u in db["users"].items():
        if u.get("tg_chat_id") == chat_id:
            return username, u
    return None, None

def get_user_by_username(username: str):
    db = load_db()
    return db["users"].get(username)

def link_tg(username: str, chat_id: int):
    db = load_db()
    db["users"][username]["tg_chat_id"] = chat_id
    save_db(db)

def unlink_tg(username: str):
    db = load_db()
    if username in db["users"]:
        db["users"][username].pop("tg_chat_id", None)
        save_db(db)

def check_password(username: str, password: str) -> bool:
    from werkzeug.security import check_password_hash
    db = load_db()
    u  = db["users"].get(username)
    if not u:
        return False
    return check_password_hash(u["password_hash"], password)

# ──────────────────────────────────────────
# ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
# ──────────────────────────────────────────

def fmt_task(task: dict) -> str:
    title  = task.get("title", "—")
    date   = task.get("date", "")
    time   = task.get("time", "")
    desc   = task.get("desc", "")
    source = task.get("source", "")
    src_label = {"teacher": "от учителя", "parent": "от родителя", "self": "личное"}.get(source, source)
    lines = [f"📌 <b>{title}</b>"]
    if date: lines.append(f"📅 {date}" + (f"  ⏰ {time}" if time else ""))
    if desc: lines.append(f"📝 {desc[:120]}{'…' if len(desc) > 120 else ''}")
    if src_label: lines.append(f"👤 {src_label}")
    return "\n".join(lines)

def parse_time_range(time_str: str):
    """
    Разбирает строку вида '15:30–16:30' или '15:30-16:30'.
    Возвращает (start_hhmm, end_hhmm) как строки 'HH:MM' или (None, None).
    """
    if not time_str:
        return None, None
    for sep in ("–", "-", "—"):
        if sep in time_str:
            parts = time_str.split(sep, 1)
            return parts[0].strip(), parts[1].strip()
    # одно время
    return time_str.strip(), None

def task_start_dt(task: dict):
    """Возвращает datetime начала задания или None."""
    date_str = task.get("date", "")
    time_str = task.get("time", "")
    if not date_str:
        return None
    start_t, _ = parse_time_range(time_str)
    dt_str = date_str + " " + (start_t if start_t else "00:00")
    try:
        return datetime.strptime(dt_str, "%Y-%m-%d %H:%M")
    except Exception:
        try:
            return datetime.strptime(date_str, "%Y-%m-%d")
        except Exception:
            return None

def task_end_dt(task: dict):
    """Возвращает datetime конца задания или None."""
    date_str = task.get("date", "")
    time_str = task.get("time", "")
    if not date_str:
        return None
    _, end_t = parse_time_range(time_str)
    if not end_t:
        return None
    dt_str = date_str + " " + end_t
    try:
        return datetime.strptime(dt_str, "%Y-%m-%d %H:%M")
    except Exception:
        return None

# ──────────────────────────────────────────
# КОМАНДЫ БОТА
# ──────────────────────────────────────────

async def cmd_start(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    username, user = get_user_by_chat_id(chat_id)
    if user:
        name = user.get("name", username)
        await update.message.reply_text(
            f"👋 Привет, {name}! Ты уже авторизован.\n"
            f"Используй /tasks — мои задания\n/logout — выйти из аккаунта"
        )
        return ConversationHandler.END

    await update.message.reply_text(
        "👋 Привет! Это бот SchoolPlan.\n\n"
        "Введи свой <b>логин</b> от сайта:",
        parse_mode="HTML"
    )
    return ASK_LOGIN

async def ask_login(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    ctx.user_data["login"] = update.message.text.strip().lower()
    await update.message.reply_text("Теперь введи <b>пароль</b>:", parse_mode="HTML")
    return ASK_PASSWORD

async def ask_password(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    login    = ctx.user_data.get("login", "")
    password = update.message.text.strip()
    chat_id  = update.effective_chat.id

    if not check_password(login, password):
        await update.message.reply_text(
            "❌ Неверный логин или пароль. Попробуй ещё раз — /start"
        )
        return ConversationHandler.END

    link_tg(login, chat_id)
    user = get_user_by_username(login)
    name = user.get("name", login)
    role = user.get("role", "")
    role_label = {"student": "ученик", "teacher": "учитель", "parent": "родитель"}.get(role, role)

    await update.message.reply_text(
        f"✅ Добро пожаловать, <b>{name}</b> ({role_label})!\n\n"
        f"Теперь ты будешь получать уведомления о заданиях.\n\n"
        f"/tasks — мои задания\n/logout — выйти",
        parse_mode="HTML"
    )
    return ConversationHandler.END

async def cmd_cancel(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Отменено.", reply_markup=ReplyKeyboardRemove())
    return ConversationHandler.END

async def cmd_logout(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    username, user = get_user_by_chat_id(chat_id)
    if not user:
        await update.message.reply_text("Ты не авторизован. /start")
        return
    unlink_tg(username)
    await update.message.reply_text("👋 Ты вышел из аккаунта. /start — войти снова.")

async def cmd_tasks(update: Update, ctx: ContextTypes.DEFAULT_TYPE):
    chat_id = update.effective_chat.id
    username, user = get_user_by_chat_id(chat_id)
    if not user:
        await update.message.reply_text("Сначала авторизуйся: /start")
        return

    db    = load_db()
    tasks = db["tasks"].get(username, [])
    pending = [t for t in tasks if t.get("status") not in ("done",) and not t.get("done")]

    if not pending:
        await update.message.reply_text("🎉 Нет активных заданий!")
        return

    lines = [f"📋 <b>Активные задания ({len(pending)}):</b>\n"]
    for t in pending[:10]:
        status_emoji = {
            "pending":  "⏳",
            "progress": "🔄",
            "review":   "👀",
            "rejected": "❌",
        }.get(t.get("status", ""), "❓")
        lines.append(f"{status_emoji} {t.get('title','—')}  📅 {t.get('date','')}")

    if len(pending) > 10:
        lines.append(f"\n…и ещё {len(pending)-10} заданий")

    await update.message.reply_text("\n".join(lines), parse_mode="HTML")

# ──────────────────────────────────────────
# // ПЛАНИРОВЩИК УВЕДОМЛЕНИЙ
# ──────────────────────────────────────────

async def scheduler(app: Application):
    """Запускается раз в минуту, проверяет задания и шлёт напоминания."""
    logger.info("Планировщик запущен")
    # Храним уже отправленные напоминания чтобы не дублировать
    # sent: set of (username, task_id, reminder_type)
    sent = set()

    while True:
        try:
            now = datetime.now()
            db  = load_db()

            for username, tasks in db["tasks"].items():
                user = db["users"].get(username, {})
                chat_id = user.get("tg_chat_id")
                if not chat_id:
                    continue

                for task in tasks:
                    status   = task.get("status", "pending")
                    task_id  = task.get("id")
                    title    = task.get("title", "—")
                    start_dt = task_start_dt(task)
                    end_dt   = task_end_dt(task)

                    if not start_dt:
                        continue

                    # ── За 30 минут до начала ──
                    key_30 = (username, task_id, "30min")
                    if key_30 not in sent:
                        diff = (start_dt - now).total_seconds()
                        if 0 < diff <= 1800 and status == "pending":
                            sent.add(key_30)
                            mins = int(diff // 60)
                            await app.bot.send_message(
                                chat_id,
                                f"⏰ <b>Через {mins} мин.</b> начинается задание:\n\n{fmt_task(task)}\n\n"
                                f"Статус: ещё не начато — не забудь!",
                                parse_mode="HTML"
                            )

                    # ── В момент начала ──
                    key_start = (username, task_id, "start")
                    if key_start not in sent:
                        diff = (now - start_dt).total_seconds()
                        if 0 <= diff < 60 and status == "pending":
                            sent.add(key_start)
                            await app.bot.send_message(
                                chat_id,
                                f"🔔 <b>Сейчас начинается задание!</b>\n\n{fmt_task(task)}\n\n"
                                f"Статус: ещё не начато — пора приступать!",
                                parse_mode="HTML"
                            )

                    # ── После половины отведённого времени ──
                    key_half = (username, task_id, "half")
                    if key_half not in sent and end_dt and start_dt:
                        mid_dt = start_dt + (end_dt - start_dt) / 2
                        diff   = (now - mid_dt).total_seconds()
                        if 0 <= diff < 60 and status == "pending":
                            sent.add(key_half)
                            await app.bot.send_message(
                                chat_id,
                                f"⚠️ <b>Половина времени прошла!</b>\n\n{fmt_task(task)}\n\n"
                                f"Задание ещё не начато — срочно приступай!",
                                parse_mode="HTML"
                            )

        except Exception as e:
            logger.error(f"Ошибка планировщика: {e}")

        await asyncio.sleep(60)  # проверяем раз в минуту


# ──────────────────────────────────────────
# ОТПРАВКА УВЕДОМЛЕНИЙ ИЗ app.py
# (вызывается через отдельный HTTP-эндпоинт /api/notify)
# ──────────────────────────────────────────

async def send_notify(bot, chat_id: int, text: str):
    try:
        await bot.send_message(chat_id, text, parse_mode="HTML")
    except Exception as e:
        logger.warning(f"Не удалось отправить уведомление {chat_id}: {e}")


# ──────────────────────────────────────────
# ЗАПУСК
# ──────────────────────────────────────────

def main():
    app = Application.builder().token(BOT_TOKEN).build()

    # Авторизация через ConversationHandler
    conv = ConversationHandler(
        entry_points=[CommandHandler("start", cmd_start)],
        states={
            ASK_LOGIN:    [MessageHandler(filters.TEXT & ~filters.COMMAND, ask_login)],
            ASK_PASSWORD: [MessageHandler(filters.TEXT & ~filters.COMMAND, ask_password)],
        },
        fallbacks=[CommandHandler("cancel", cmd_cancel)],
    )

    app.add_handler(conv)
    app.add_handler(CommandHandler("logout", cmd_logout))
    app.add_handler(CommandHandler("tasks",  cmd_tasks))

    # Запускаем планировщик как фоновую задачу
    app.job_queue.run_repeating(
        lambda ctx: asyncio.ensure_future(scheduler_tick(ctx)),
        interval=60, first=5
    )

    logger.info("Бот запущен!")
    app.run_polling(allowed_updates=Update.ALL_TYPES)


# ──────────────────────────────────────────
# ПЛАНИРОВЩИК ЧЕРЕЗ job_queue (правильный способ для PTB 20)
# ──────────────────────────────────────────

# Хранилище отправленных напоминаний (в памяти)
_sent_reminders: set = set()

async def scheduler_tick(ctx: ContextTypes.DEFAULT_TYPE):
    """Вызывается каждые 60 секунд через job_queue."""
    global _sent_reminders
    now = datetime.now()

    try:
        db = load_db()
    except Exception as e:
        logger.error(f"Ошибка загрузки БД: {e}")
        return

    for username, tasks in db["tasks"].items():
        user    = db["users"].get(username, {})
        chat_id = user.get("tg_chat_id")
        if not chat_id:
            continue

        for task in tasks:
            status   = task.get("status", "pending")
            task_id  = task.get("id")
            title    = task.get("title", "—")
            start_dt = task_start_dt(task)
            end_dt   = task_end_dt(task)

            if not start_dt:
                continue

            # ── За 30 минут до начала ──
            key_30 = (username, task_id, "30min")
            if key_30 not in _sent_reminders:
                diff = (start_dt - now).total_seconds()
                if 0 < diff <= 1860 and status == "pending":   # окно 31 мин
                    _sent_reminders.add(key_30)
                    mins = int(diff // 60) + 1
                    try:
                        await ctx.bot.send_message(
                            chat_id,
                            f"⏰ <b>Через ~{mins} мин.</b> начинается задание:\n\n"
                            f"{fmt_task(task)}\n\n"
                            f"Статус: ещё не начато — не забудь!",
                            parse_mode="HTML"
                        )
                    except Exception as e:
                        logger.warning(f"notify 30min {chat_id}: {e}")

            # ── В момент начала ──
            key_start = (username, task_id, "start")
            if key_start not in _sent_reminders:
                diff = (now - start_dt).total_seconds()
                if 0 <= diff < 120 and status == "pending":   # окно 2 мин
                    _sent_reminders.add(key_start)
                    try:
                        await ctx.bot.send_message(
                            chat_id,
                            f"🔔 <b>Сейчас начинается задание!</b>\n\n"
                            f"{fmt_task(task)}\n\n"
                            f"Статус: ещё не начато — пора приступать!",
                            parse_mode="HTML"
                        )
                    except Exception as e:
                        logger.warning(f"notify start {chat_id}: {e}")

            # ── После половины отведённого времени ──
            key_half = (username, task_id, "half")
            if key_half not in _sent_reminders and end_dt and start_dt:
                mid_dt = start_dt + (end_dt - start_dt) / 2
                diff   = (now - mid_dt).total_seconds()
                if 0 <= diff < 120 and status == "pending":   # окно 2 мин
                    _sent_reminders.add(key_half)
                    try:
                        await ctx.bot.send_message(
                            chat_id,
                            f"⚠️ <b>Половина времени прошла!</b>\n\n"
                            f"{fmt_task(task)}\n\n"
                            f"Задание ещё не начато — срочно приступай!",
                            parse_mode="HTML"
                        )
                    except Exception as e:
                        logger.warning(f"notify half {chat_id}: {e}")


if __name__ == "__main__":
    main()
