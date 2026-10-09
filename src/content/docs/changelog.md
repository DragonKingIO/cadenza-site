---
title: Changelog
description: What changed in each version.
---

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
