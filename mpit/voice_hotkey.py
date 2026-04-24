#!/usr/bin/env python3
"""
Voice-to-Text с горячими клавишами
==================================
Shift — начать запись
Enter — остановить и распознать

Установка:
  pip install sounddevice numpy SpeechRecognition keyboard

Запуск:
  python voice_hotkey.py
"""

import speech_recognition as sr
import sounddevice as sd
import numpy as np
import wave
import tempfile
import os
import threading
import time

# ── НАСТРОЙКИ ──
SAMPLE_RATE = 16000
CHANNELS = 1
HOTKEY_START = "shift"     # Клавиша начала записи
HOTKEY_STOP = "enter"      # Клавиша остановки

# ── ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ ──
recording = False
audio_buffer = []
record_thread = None
stop_event = threading.Event()


def record_audio():
    """Фоновая запись в буфер."""
    global audio_buffer
    audio_buffer = []

    def callback(indata, frames, time_info, status):
        if recording:
            audio_buffer.append(indata.copy())

    stream = sd.InputStream(
        samplerate=SAMPLE_RATE,
        channels=CHANNELS,
        dtype=np.int16,
        callback=callback
    )

    with stream:
        while not stop_event.is_set():
            time.sleep(0.1)


def save_wav(buffer, path):
    """Сохраняет буфер в WAV."""
    if not buffer:
        return False

    data = np.concatenate(buffer, axis=0)
    with wave.open(path, 'wb') as wf:
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(2)
        wf.setframerate(SAMPLE_RATE)
        wf.writeframes(data.tobytes())
    return True


def recognize(path):
    """Распознаёт WAV через Google."""
    r = sr.Recognizer()
    with sr.AudioFile(path) as source:
        audio = r.record(source)

    try:
        text = r.recognize_google(audio, language="ru-RU")
        return text
    except sr.UnknownValueError:
        return None
    except sr.RequestError as e:
        return f"[ОШИБКА СЕТИ: {e}]"


def start_recording():
    """Начать запись."""
    global recording, record_thread, stop_event

    if recording:
        print("\n⚠️ Уже идёт запись!")
        return

    recording = True
    stop_event.clear()
    audio_buffer.clear()

    record_thread = threading.Thread(target=record_audio, daemon=True)
    record_thread.start()

    print("\n🔴 ЗАПИСЬ НАЧАЛАСЬ... Говорите!")
    print(f"   Нажмите {HOTKEY_STOP.upper()} для остановки")


def stop_recording():
    """Остановить и распознать."""
    global recording

    if not recording:
        return

    recording = False
    stop_event.set()

    if record_thread:
        record_thread.join(timeout=2)

    print("\n⏹ Запись остановлена. Обработка...")

    # Сохраняем временный файл
    with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
        temp_path = tmp.name

    if save_wav(audio_buffer, temp_path):
        text = recognize(temp_path)
        os.remove(temp_path)

        if text:
            print(f"\n{'='*50}")
            print(f"📝 РЕЗУЛЬТАТ: {text}")
            print(f"{'='*50}\n")
        else:
            print("❌ Речь не распознана\n")
    else:
        print("❌ Запись пустая\n")

    print(f"Готов. Нажмите {HOTKEY_START.upper()} для новой записи\n")


def main():
    print("=" * 50)
    print("🎤 РАСПОЗНАВАНИЕ РЕЧИ (горячие клавиши)")
    print("=" * 50)
    print(f"\n⌨️  {HOTKEY_START.upper()} — начать запись")
    print(f"⌨️  {HOTKEY_STOP.upper()} — остановить и распознать")
    print("\nОжидание команды... (Ctrl+C для выхода)\n")

    # Пробуем keyboard
    try:
        import keyboard
        keyboard.add_hotkey(HOTKEY_START, start_recording)
        keyboard.add_hotkey(HOTKEY_STOP, stop_recording)

        # Бесконечное ожидание
        while True:
            time.sleep(1)

    except ImportError:
        print("❌ Библиотека 'keyboard' не установлена")
        print("   Установите: pip install keyboard")
        print("\n--- РЕЗЕРВНЫЙ РЕЖИМ ---")
        fallback_mode()


def fallback_mode():
    """Резервный режим без keyboard — через Enter."""
    print("\nРЕЗЕРВ: Нажмите Enter для начала записи, снова Enter для остановки")

    while True:
        input("\n[Enter] — начать запись...")
        start_recording()

        input("[Enter] — остановить...")
        stop_recording()


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n👋 До свидания!")
