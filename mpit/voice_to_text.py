#!/usr/bin/env python3
"""
Voice-to-Text Converter (Распознавание речи)
============================================
Поддерживает:
- Распознавание с микрофона
- Распознавание из аудиофайла
- Несколько движков: Google (онлайн), Vosk (офлайн), Whisper (офлайн)

Установка зависимостей:
pip install SpeechRecognition pyaudio

Для офлайн-режима (Vosk):
pip install vosk
# Скачайте модель: https://alphacephei.com/vosk/models
# Распакуйте в папку models/

Для Whisper (точнее, но тяжелее):
pip install openai-whisper

Запуск:
python voice_to_text.py
"""

import argparse
import sys
import os
import json
import wave

# ──────────────────────────────────────────
# Try importing optional engines
# ──────────────────────────────────────────

try:
    import speech_recognition as sr
    HAS_SR = True
except ImportError:
    HAS_SR = False
    print("[WARN] speech_recognition не установлен. Установите: pip install SpeechRecognition")

try:
    import vosk
    HAS_VOSK = True
except ImportError:
    HAS_VOSK = False

try:
    import whisper
    HAS_WHISPER = True
except ImportError:
    HAS_WHISPER = False

try:
    import pyaudio
    HAS_PYAUDIO = True
except ImportError:
    HAS_PYAUDIO = False
    print("[WARN] pyaudio не установлен. Установите: pip install pyaudio")


# ──────────────────────────────────────────
# Configuration
# ──────────────────────────────────────────

DEFAULT_LANGUAGE = "ru-RU"
SAMPLE_RATE = 16000
CHUNK_SIZE = 4096


# ══════════════════════════════════════════
# 1. GOOGLE SPEECH RECOGNITION (online)
# ══════════════════════════════════════════

def recognize_google(audio_source, language=DEFAULT_LANGUAGE):
    """Распознавание через Google Speech Recognition (требует интернет)."""
    if not HAS_SR:
        raise RuntimeError("speech_recognition не установлен")

    recognizer = sr.Recognizer()

    # Если передан путь к файлу
    if isinstance(audio_source, str):
        with sr.AudioFile(audio_source) as source:
            audio = recognizer.record(source)
    else:
        audio = audio_source

    try:
        text = recognizer.recognize_google(audio, language=language)
        return {"engine": "google", "text": text, "confidence": None}
    except sr.UnknownValueError:
        return {"engine": "google", "text": "", "error": "Речь не распознана"}
    except sr.RequestError as e:
        return {"engine": "google", "text": "", "error": f"Ошибка API: {e}"}


# ══════════════════════════════════════════
# 2. VOSK (offline, lightweight)
# ══════════════════════════════════════════

class VoskRecognizer:
    """Офлайн-распознавание через Vosk."""

    def __init__(self, model_path=None, language="ru"):
        if not HAS_VOSK:
            raise RuntimeError("vosk не установлен. Установите: pip install vosk")

        self.model = None
        self.model_path = model_path
        self.language = language
        self._load_model()

    def _load_model(self):
        """Загружает модель Vosk."""
        if self.model_path and os.path.exists(self.model_path):
            print(f"[INFO] Загрузка модели Vosk из: {self.model_path}")
            self.model = vosk.Model(self.model_path)
        else:
            # Попытка авто-загрузки по языку
            print(f"[INFO] Попытка загрузки модели Vosk для языка: {self.language}")
            try:
                self.model = vosk.Model(lang=self.language)
            except Exception as e:
                print(f"[ERROR] Не удалось загрузить модель: {e}")
                print("[HINT] Скачайте модель с https://alphacephei.com/vosk/models")
                print("[HINT] Или укажите путь через --vosk-model")
                raise

    def recognize_file(self, file_path):
        """Распознаёт аудиофайл WAV."""
        if not self.model:
            raise RuntimeError("Модель не загружена")

        wf = wave.open(file_path, "rb")
        if wf.getnchannels() != 1 or wf.getsampwidth() != 2 or wf.getcomptype() != "NONE":
            raise ValueError("Файл должен быть WAV моно 16-bit")

        recognizer = vosk.KaldiRecognizer(self.model, wf.getframerate())

        results = []
        while True:
            data = wf.readframes(CHUNK_SIZE)
            if len(data) == 0:
                break
            if recognizer.AcceptWaveform(data):
                result = json.loads(recognizer.Result())
                if result.get("text"):
                    results.append(result["text"])

        final = json.loads(recognizer.FinalResult())
        if final.get("text"):
            results.append(final["text"])

        wf.close()

        full_text = " ".join(results).strip()
        return {"engine": "vosk", "text": full_text, "confidence": None}

    def recognize_microphone(self, duration=None):
        """Распознаёт с микрофона."""
        if not HAS_PYAUDIO:
            raise RuntimeError("pyaudio не установлен")

        recognizer = vosk.KaldiRecognizer(self.model, SAMPLE_RATE)

        p = pyaudio.PyAudio()
        stream = p.open(
            format=pyaudio.paInt16,
            channels=1,
            rate=SAMPLE_RATE,
            input=True,
            frames_per_buffer=CHUNK_SIZE
        )

        print("🎤 Слушаю... (нажмите Ctrl+C для остановки)")

        try:
            while True:
                data = stream.read(CHUNK_SIZE, exception_on_overflow=False)
                if recognizer.AcceptWaveform(data):
                    result = json.loads(recognizer.Result())
                    if result.get("text"):
                        print(f"  📝 {result['text']}")
        except KeyboardInterrupt:
            print("\n🛑 Остановлено пользователем")
        finally:
            stream.stop_stream()
            stream.close()
            p.terminate()

        final = json.loads(recognizer.FinalResult())
        return {"engine": "vosk", "text": final.get("text", ""), "confidence": None}


# ══════════════════════════════════════════
# 3. WHISPER (offline, high accuracy)
# ══════════════════════════════════════════

class WhisperRecognizer:
    """Распознавание через OpenAI Whisper."""

    def __init__(self, model_size="base"):
        if not HAS_WHISPER:
            raise RuntimeError("whisper не установлен. Установите: pip install openai-whisper")

        print(f"[INFO] Загрузка модели Whisper ({model_size})...")
        self.model = whisper.load_model(model_size)
        print("[INFO] Модель загружена")

    def recognize_file(self, file_path, language="ru"):
        """Распознаёт аудиофайл любого формата."""
        result = self.model.transcribe(file_path, language=language)
        return {
            "engine": "whisper",
            "text": result["text"].strip(),
            "confidence": None,
            "segments": result.get("segments", [])
        }


# ══════════════════════════════════════════
# 4. MICROPHONE INPUT (via SpeechRecognition)
# ══════════════════════════════════════════

def listen_microphone(duration=None, language=DEFAULT_LANGUAGE):
    """Слушает микрофон и распознаёт через Google."""
    if not HAS_SR or not HAS_PYAUDIO:
        raise RuntimeError("Требуются: speech_recognition и pyaudio")

    recognizer = sr.Recognizer()
    mic = sr.Microphone()

    print("🎤 Настройка микрофона...")
    with mic as source:
        recognizer.adjust_for_ambient_noise(source, duration=1)
        print("🎤 Слушаю... (говорите)")
        try:
            audio = recognizer.listen(source, timeout=duration, phrase_time_limit=duration)
        except sr.WaitTimeoutError:
            return {"engine": "google", "text": "", "error": "Таймаут ожидания"}

    print("🔍 Распознаю...")
    return recognize_google(audio, language)


# ══════════════════════════════════════════
# 5. AUDIO FILE CONVERSION
# ══════════════════════════════════════════

def convert_to_wav(input_path, output_path="temp.wav"):
    """Конвертирует аудиофайл в WAV моно 16-bit."""
    try:
        from pydub import AudioSegment
        audio = AudioSegment.from_file(input_path)
        audio = audio.set_channels(1).set_frame_rate(SAMPLE_RATE).set_sample_width(2)
        audio.export(output_path, format="wav")
        return output_path
    except ImportError:
        print("[WARN] pydub не установлен. Установите: pip install pydub")
        print("[WARN] Попытка использовать ffmpeg напрямую...")
        import subprocess
        cmd = [
            "ffmpeg", "-y", "-i", input_path,
            "-ar", str(SAMPLE_RATE), "-ac", "1", "-sample_fmt", "s16",
            output_path
        ]
        try:
            subprocess.run(cmd, check=True, capture_output=True)
            return output_path
        except (subprocess.CalledProcessError, FileNotFoundError):
            raise RuntimeError("Не удалось конвертировать файл. Установите pydub или ffmpeg.")


# ══════════════════════════════════════════
# CLI INTERFACE
# ══════════════════════════════════════════

def print_result(result):
    """Красивый вывод результата."""
    print("\n" + "=" * 50)
    print(f"🔧 Движок: {result.get('engine', 'unknown')}")
    if "error" in result:
        print(f"❌ Ошибка: {result['error']}")
    else:
        print(f"📝 Текст: {result.get('text', '')}")
    if result.get("confidence"):
        print(f"📊 Уверенность: {result['confidence']:.2%}")
    print("=" * 50 + "\n")


def main():
    parser = argparse.ArgumentParser(
        description="Распознавание речи (Speech-to-Text)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Примеры:
%(prog)s --microphone                    # Слушать микрофон (Google)
%(prog)s --microphone --engine vosk      # Слушать микрофон (Vosk офлайн)
%(prog)s -f audio.wav                    # Распознать файл
%(prog)s -f audio.mp3 --engine whisper   # Распознать через Whisper
%(prog)s -f audio.wav --engine vosk --vosk-model ./models/vosk-model-ru
        """
    )

    parser.add_argument("-f", "--file", help="Путь к аудиофайлу")
    parser.add_argument("-m", "--microphone", action="store_true", help="Слушать микрофон")
    parser.add_argument("--engine", choices=["google", "vosk", "whisper"], 
                        default="google", help="Движок распознавания (default: google)")
    parser.add_argument("--language", default=DEFAULT_LANGUAGE, 
                        help=f"Язык (default: {DEFAULT_LANGUAGE})")
    parser.add_argument("--vosk-model", help="Путь к модели Vosk")
    parser.add_argument("--whisper-model", default="base", 
                        choices=["tiny", "base", "small", "medium", "large"],
                        help="Размер модели Whisper (default: base)")
    parser.add_argument("--output", "-o", help="Сохранить результат в файл")
    parser.add_argument("--duration", type=int, help="Длительность записи с микрофона (сек)")

    args = parser.parse_args()

    if not args.file and not args.microphone:
        parser.print_help()
        sys.exit(1)

    result = None

    # ── Google (online) ──
    if args.engine == "google":
        if args.microphone:
            result = listen_microphone(args.duration, args.language)
        else:
            result = recognize_google(args.file, args.language)

    # ── Vosk (offline) ──
    elif args.engine == "vosk":
        recognizer = VoskRecognizer(model_path=args.vosk_model, language=args.language[:2])
        if args.microphone:
            result = recognizer.recognize_microphone(args.duration)
        else:
            # Конвертация если нужно
            wav_path = args.file
            if not args.file.endswith(".wav"):
                wav_path = convert_to_wav(args.file)
            result = recognizer.recognize_file(wav_path)
            if wav_path != args.file and os.path.exists(wav_path):
                os.remove(wav_path)

    # ── Whisper (offline, high quality) ──
    elif args.engine == "whisper":
        recognizer = WhisperRecognizer(model_size=args.whisper_model)
        result = recognizer.recognize_file(args.file, language=args.language[:2])

    # ── Output ──
    if result:
        print_result(result)

        if args.output:
            with open(args.output, "w", encoding="utf-8") as f:
                f.write(result.get("text", ""))
            print(f"💾 Сохранено в: {args.output}")

        # Копируем в буфер обмена если возможно
        try:
            import pyperclip
            pyperclip.copy(result.get("text", ""))
            print("📋 Текст скопирован в буфер обмена")
        except ImportError:
            pass


if __name__ == "__main__":
    main()
