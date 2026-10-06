---
title: Recognition engines
description: Local models, cloud services and Apple's built-in recognition, and how to choose.
---

Open **Settings → Speech**. The top of the page always shows what is in use, and the tabs only change what you
are looking at, never the engine itself.

## Local models (recommended)

Recognition runs on your Mac. Nothing is uploaded and no account is needed. Models are downloaded inside the app, each
verified with a checksum, and can be deleted at any time.

| Model | Size | Good for | Notes |
|---|---|---|---|
| **SenseVoice** (recommended) | about 164 MB | Chinese, English, Japanese, Korean, Cantonese | Writes punctuation and formats numbers. Fast. |
| FireRedASR2 (experimental) | about 520 MB download | Mandarin and English | In our tests its accuracy matched SenseVoice, but it writes no punctuation and is about four times slower. |
| Parakeet TDT v3 (experimental) | about 490 MB download | 25 European languages | Has no Mandarin. |

Not sure which fits your voice? [Compare them with your own voice](../compare-models/).

### Recognition settings

The **Recognition settings** tab holds language, number formatting, voice-detection sensitivity and CPU use.

- **Language.** "Automatic" lets SenseVoice guess for each clip. When the app is set to Chinese it uses Mandarin, because
  the guess sometimes took short Mandarin for Japanese or Korean.
- **Voice-detection sensitivity.** Move toward "More sensitive" if you speak softly and the start gets cut off; toward
  "Fewer false starts" if background noise is treated as speech.

## Cloud services (optional)

iFLYTEK, Volcengine, Tencent Cloud, Alibaba Cloud, Baidu and Deepgram. You use your own account and credentials, which are
stored in the macOS Keychain. **Audio is sent to the provider only after you agree for that provider.** Cancelling a
recording stops further upload but cannot recall audio that was already sent.

If the cloud fails or you are offline, Cadenza can continue with a local model (the "When the cloud fails" setting on the Cloud services tab).

## Apple's built-in recognition

Uses macOS speech recognition. An extra switch decides whether Apple's servers may be used, which can be more accurate but
sends audio to Apple.

## Never go online

The switch at the top of the page hides the cloud services and Apple's recognition, and the app makes no automatic network
connections. Local models must already be downloaded.

## How accurate is it?

On a benchmark of synthesized Mandarin speech, SenseVoice reached about 10% character error rate overall and about
1% on short sentences; FireRedASR2 about 10.6%. Synthesized speech is cleaner than a person and the benchmark cannot
measure your voice or accent, so treat the numbers as a guide. See the [accuracy benchmark](../developers/accuracy/).
