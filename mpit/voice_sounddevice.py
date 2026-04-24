import speech_recognition as sr
import sounddevice as sd
import numpy as np
import wave
import tempfile
import os

print("=" * 50)
print("🎤 РАСПОЗНАВАНИЕ РЕЧИ")
print("=" * 50)

SAMPLE_RATE = 16000

# Покажем микрофоны
print("\n📋 Доступные устройства:")
print(sd.query_devices())

try:
    DURATION = int(input("\n⏱ Сколько секунд записывать? (например: 5): ").strip() or "5")
except (EOFError, ValueError):
    DURATION = 5

print(f"\n🎤 ЗАПИСЬ {DURATION} СЕКУНД...")
print("ГОВОРИТЕ СЕЙЧАС!")

audio_data = sd.rec(int(DURATION * SAMPLE_RATE), samplerate=SAMPLE_RATE, channels=1, dtype=np.int16)
sd.wait()

print("✅ Запись завершена")

# Сохраняем во временный WAV
with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as tmp:
    temp_path = tmp.name

with wave.open(temp_path, 'wb') as wf:
    wf.setnchannels(1)
    wf.setsampwidth(2)
    wf.setframerate(SAMPLE_RATE)
    wf.writeframes(audio_data.tobytes())

# Распознаём
r = sr.Recognizer()
with sr.AudioFile(temp_path) as source:
    audio = r.record(source)

print("🔍 Распознаю...")
try:
    text = r.recognize_google(audio, language="ru-RU")
    print(f"\n{'='*50}")
    print(f"📝 РЕЗУЛЬТАТ: {text}")
    print(f"{'='*50}")
except sr.UnknownValueError:
    print("❌ Речь не распознана")
except sr.RequestError as e:
    print(f"❌ Ошибка сети: {e}")
finally:
    os.remove(temp_path)