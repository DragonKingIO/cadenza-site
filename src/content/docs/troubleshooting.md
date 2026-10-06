---
title: Troubleshooting
description: Fixes for the common problems, and how to report a bug without sharing anything private.
---

## The shortcut does nothing

See [Shortcuts and permissions](../shortcuts-and-permissions/): check Settings → Privacy for "on but not working", restart the app
after changing a permission, and check for keyboard remapping.

## The text did not appear

- Cadenza types into the field that had focus when you started. If you switch to another window while you speak, it will not
  type into the new one; the text is kept so you can copy it.
- Some apps do not expose a text field to macOS. Cadenza then types into the window directly, which works in many of them but
  is not guaranteed everywhere.
- Password fields and other secure inputs are never typed into.
- Check that **Accessibility** is allowed.

## Recognition is wrong or missing words

- Speak at a normal pace, close to the microphone. Very quiet speech is raised automatically, but a distant microphone still hurts.
- Try another model with [Compare models with my voice](../compare-models/). The best model depends on your voice.
- **Settings → Speech → Recognition settings:** if the start of a sentence is cut off, move voice-detection sensitivity toward
  "More sensitive".
- English words inside Chinese sentences are the weakest spot of every local model we measured.
- No punctuation? FireRedASR2 does not write any. SenseVoice does.

## macOS asks for permissions or Keychain access again

Builds are signed ad hoc, so every new build looks like a different app to macOS. After you rebuild or update, allow
Microphone, Accessibility and Input Monitoring again, and allow access to your saved cloud credentials if asked.

## macOS says the app cannot be opened

Releases are not notarized. Open System Settings → Privacy & Security and choose **Open Anyway**. See [Download](../download/).

## Report a bug

Open an issue with the [Bug report form](https://github.com/DragonKingIO/Cadenza-voice/issues/new/choose). It asks for your macOS
version, the engine, the trigger mode and which permissions are allowed.

**Do not attach recordings, transcripts, API keys or unredacted logs.** The log holds state, errors and text lengths, never audio
or the recognized text; remove anything private from it anyway before pasting.
