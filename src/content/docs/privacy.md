---
title: Privacy promise
description: What Cadenza does and does not do with your voice, your text and your credentials.
---

Cadenza collects nothing. This page summarizes it; the [privacy notice](../privacy/notice/) and the [terms](../privacy/terms/)
are the full text.

## The promise

- **No data collection.** No server, no account, no analytics, no crash reporting, no tracking.
- **Your voice goes only where you send it.** Local recognition keeps audio on this Mac. A cloud service gets audio only after
  you agree, for that provider.
- **Nothing is kept.** Recordings are not saved. Recognized text stays in memory until you clear it.
- **Credentials stay in the Keychain.** You can delete them in Settings → Privacy.

## What the app writes to disk

- Your settings, and the local models you downloaded.
- A local log, capped at about 512 KB, with timestamps, state, errors and text *lengths*. It does not contain audio or the
  recognized text. You can turn logging off or clear it in Settings → Privacy.

## When the network is used

Only when you ask: downloading a model, using a cloud service you set up, or pressing **Check** for an app update (automatic
update checks are off by default). There are no other background connections, and the **never go online** switch removes
even those choices.

## Typing into other apps

Cadenza uses Accessibility only to find the focused text field and type your text into it. It never types into password fields.

## Open source

You do not have to take our word for it. The code is public, and the contributing rules require that no change adds
telemetry or a network request the user did not ask for.
