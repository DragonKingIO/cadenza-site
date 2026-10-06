---
title: Download
description: How to get Cadenza. There is no release yet; build it from source.
---

:::caution[No release yet]
The first release has not been published. Until then, build Cadenza yourself; it takes a few minutes. Releases will appear at
[GitHub Releases](https://github.com/DragonKingIO/Cadenza-voice/releases).
:::

## Requirements

macOS 26 or later on Apple silicon, with the Xcode Command Line Tools (`xcode-select --install`).

## Build from source

```sh
git clone https://github.com/DragonKingIO/Cadenza-voice.git
cd Cadenza-voice
./cadenza/tools/fetch-sherpa-onnx.sh     # optional: the library for local models
./cadenza/build.sh --stage-only          # creates cadenza/build/stage.noindex/Cadenza.app.zip
```

Unzip the result and open the app. A copy you built yourself opens normally. Local models are not bundled: you download
them inside the app, and each download is verified with a checksum.

## When there is a release

Download the zip from GitHub Releases, check it with `shasum -a 256 -c SHA256SUMS.txt`, unzip, and open the app.
Releases are signed ad hoc and **not notarized**, because the project has no budget for an Apple Developer ID.
macOS therefore blocks the first launch of a downloaded copy:

1. Try to open the app once.
2. Open **System Settings → Privacy & Security**.
3. Scroll to the message about the app and choose **Open Anyway**, then confirm.

(Since macOS 15, right-click → Open no longer bypasses this.) Each ad hoc build has a new identity, so macOS asks again for
Microphone, Accessibility and Input Monitoring after you update.

## Other platforms

Only macOS is supported. See [Platforms](../developers/platforms/).
