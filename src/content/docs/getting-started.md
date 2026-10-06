---
title: Getting started
description: Install Cadenza, choose how it recognizes your speech, and type your first sentence.
---

Cadenza turns speech into text where your cursor is. Hold a shortcut, speak, release.

## What you need

- A Mac with Apple silicon running **macOS 26 or later**.
- About 200 MB of free space for the recommended local model (the app downloads it when you ask).
- A microphone.

## 1. Install

There is no release yet, so [build it from source](../download/). It takes a few minutes. When a release exists you will
download a zip instead.

## 2. First run

A short wizard opens the first time. It explains the privacy promise, guides you through the permissions and lets you
choose how speech is recognized. The sensible choice is a **local model**: recognition happens on your Mac and nothing is
uploaded. **SenseVoice** is recommended; the app downloads it for you.

## 3. Allow the permissions

| Permission | Why |
|---|---|
| Microphone | Capture your speech while you record |
| Accessibility | Find the text field and type the result |
| Input Monitoring | Detect the global shortcut |
| Speech Recognition | Only if you choose Apple's built-in recognition |

Settings → Privacy shows the state of each one. If the shortcut page says a permission is "on but not working", see
[Shortcuts and permissions](../shortcuts-and-permissions/).

## 4. Dictate

1. Click into any text field.
2. **Hold your shortcut** (Left Option by default), speak, then release.
3. The text is typed at the cursor. If it cannot be typed, the app keeps it so you can copy it.

Press **Esc** to cancel a recording. You can change the shortcut, or use "tap to start, tap to stop", on the Shortcut page.

## Next

- [Choose a recognition engine](../engines/)
- [Compare models with your own voice](../compare-models/)
- [Troubleshooting](../troubleshooting/)
