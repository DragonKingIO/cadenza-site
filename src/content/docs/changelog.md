---
title: Changelog
description: What changed in each version.
---

## 1.3.4 — early preview

- **The keyboard shortcut keeps working after you use the voice remote.** The Mac could keep treating one of the remote's keys as held down, so Left Option did not start dictation again until Cadenza was restarted.
- Local model downloads show their progress again.

## 1.3.3 — early preview

- **Fewer clipped sentence endings with the voice remote.** The remote stops sending sound slightly before you let go, so the Mac microphone now listens from the start of the hold, fills that gap and keeps listening for 0.3 seconds after the release. Not used with a Bluetooth microphone; a hold longer than the remote's 21-second limit ends as before.
- **The keyboard shortcut keeps listening for 0.3 seconds after you let go** with a local model, so the last syllable of a quick sentence is kept.
- The remote's recording wave no longer freezes after the click of pressing the key.

## 1.3.2 — early preview

- **A smoother recording bar.** The wave no longer stutters while you speak.
- **Numbers in digits.** With a local model, a number written half in digits and half in Chinese numerals (`十0本`) now uses digits (`10本`). Words such as `一个` or `第二章` are never changed.

## 1.3.1 — early preview

- **Voice remote: 66 key actions in groups, and three presets** (Voice assistant, Select and edit, Media and system). Move or select text, edit, page, media, volume, brightness, Mission Control, Spotlight, tab and window shortcuts, screenshots and more.
- Holding an arrow, page or volume key repeats it; the voice key can also *hold to talk and translate*; the power key can be set to *Ignore*.
- The remote's level bar adapts to its quiet microphone.

## 1.3.0 — early preview

- **Xiaomi Bluetooth voice remote (Remote 2 and 2 Pro).** Settings → Hardware pairs it directly: hold the voice key to dictate, and remap the other keys. Its own keys no longer type into the front window. Measured on one Remote 2; the Pro has not been measured on a physical device.
- **A larger vocabulary.** About 350 new terms and a new *Apps and software* pack. Transliterated Chinese aliases match other characters of the same sound, and a string of letters that is no English word is corrected when it is one easily confused letter from a single-word term (`gbt` becomes `GPT`).
- **A Vocabulary term form** for suggesting words and spellings.
- The menu bar menu groups *Pause*, the remote and *Settings* together.

## 1.2.0 — early preview

- **Voice translation has its own shortcut and page.** Ordinary dictation no longer translates. If you had a language chosen, set a translate shortcut to keep translating.
- **Shortcuts:** "Hold to talk" and "Tap to start and stop" are two rows, each with its own switch. The Hold/Tap choice is gone.
- **More cloud speech services:** OpenAI, Groq, Google Cloud, Microsoft Azure, AssemblyAI and ElevenLabs, plus any OpenAI-compatible service. Not yet tested against the real services.
- **More cloud text recognition:** Microsoft Azure AI Vision and Mistral OCR. One key per company is shared across speech, text recognition and My AI models.
- Quiet speech: local models read soft recordings with noise reduction when a steady room noise is close to the voice.
- Vocabulary packs, text tidying, AI polish and "My AI models" for polishing and translation.
- Not notarized; macOS 14 or later, Apple silicon or Intel.

## 1.1.0 — early preview

- One package for Apple silicon **and Intel** Macs; the minimum system is now **macOS 14** (it was macOS 26).
- Recording bar: see-through glass in light mode; an optional character style with short animations.
- On-device text recognition models for screenshots (PP-OCR).
- Not yet verified on a real Intel Mac, or on macOS 14 and 15.

## 1.0.0 — early preview

The first public build. It is used every day on the maintainer's Mac but has not been tested on many setups yet.

- Voice input: hold a shortcut, speak, and the text is typed at your cursor.
- Local recognition with SenseVoice, FireRedASR2 and Parakeet; optional cloud services with your own keys and consent.
- Screenshots and text recognition (new, still being tested).
- An optional local API for your own programs and hardware.
- Not notarized, macOS 26 or later, Apple silicon only.

Every release is listed, with its package and checksum, on
[GitHub Releases](https://github.com/DragonKingIO/Cadenza-voice/releases). The full, detailed list is the repository's
[CHANGELOG.md](https://github.com/DragonKingIO/Cadenza-voice/blob/main/cadenza/CHANGELOG.md).
