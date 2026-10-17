---
title: Hardware and buying guide
description: Use the Xiaomi Bluetooth voice remote directly, choose a microphone or a DIY voice controller, and tell tested compatibility from documented capabilities.
---

**For everyday dictation, start with a microphone your Mac already recognizes.** An ESP32 board is useful when you want to build a separate voice button, pendant or recorder; it is not required to use Cadenza.

:::note[Compatibility status]
**Xiaomi Bluetooth Voice Remote 2 and 2 Pro are supported directly** (Settings → Hardware). The support was measured on one Remote 2; the Pro is recognized by its product name and has not been measured on a physical device. The boards and third-party bridges below are **development candidates, not a certified compatibility list**: their specifications have been checked against manufacturer or project documentation, but physical USB/Bluetooth/Wi-Fi integration with Cadenza has not been verified.
:::

## Choose your setup

| You want to… | Start with | Setup needed |
|---|---|---|
| Dictate at your desk | Your Mac's microphone, or a macOS-compatible USB microphone/headset | Select the input device and try a sentence before buying another microphone. |
| Record with a wireless button | Xiaomi Bluetooth Voice Remote 2 or 2 Pro | Pair it in Settings → Hardware, hold the voice key to dictate. No bridge program is needed; see [the remote](#xiaomi-bluetooth-voice-remote). |
| Build a pendant or custom voice button | A microphone-equipped ESP32-S3 board | Write or adapt firmware and a Mac bridge, or USB microphone + keyboard firmware. |
| Use a button with the Mac's microphone | A controller connected to a program on the Mac | Use the [local API](../developers/local-api/) to start, stop or cancel recording. |

For a standard microphone, look for macOS support, a return policy and a suitable speaking distance. Test normal and soft speech in your usual room. A development board's microphone specification does not establish recognition accuracy.

## Development boards to consider

**XIAO ESP32S3 Sense is a useful starting candidate when you want an integrated microphone.** For a larger wired prototype, consider an ESP32-S3-DevKitC-1 plus a separate microphone. These choices are based on documented features, not comparative microphone measurements.

| Candidate | Why consider it | Manufacturer / documentation |
|---|---|---|
| Seeed XIAO ESP32S3 Sense | Compact ESP32-S3; the Sense expansion board includes a digital microphone. Check that the complete Sense kit is included. | [Buy](https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html) · [Board guide](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) |
| Seeed XIAO ESP32S3 | Compact board without the Sense microphone; add a microphone and button yourself. | [Buy](https://www.seeedstudio.com/XIAO-ESP32S3-p-5627.html) · [Board guide](https://wiki.seeedstudio.com/xiao_esp32s3_getting_started/) |
| Espressif ESP32-S3-DevKitC-1 | A breadboard-friendly reference board for experimenting with a separate microphone. Check the exact board revision and module. | [Official board guide](https://docs.espressif.com/projects/esp-dev-kits/en/latest/esp32s3/esp32-s3-devkitc-1/user_guide_v1.1.html) |
| M5Stack ATOM Echo / Atom Voice (ESP32-PICO-D4) | Integrated microphone, speaker and button. This older ESP32 model is a candidate for a Mac bridge, not native USB microphone firmware. | [Manufacturer store and specifications](https://shop.m5stack.com/products/atom-echo-smart-speaker-dev-kit) |
| M5Stack AtomS3R AI Chatbot Kit | ESP32-S3 controller plus an audio base; an alternative when you also want a speaker. Check the kit contents and board-specific firmware. | [Manufacturer store and specifications](https://shop.m5stack.com/products/atoms3r-ai-chatbot-kit-8mb-psram) |

### Buying internationally or in China

The links above lead to manufacturer stores or documentation. Check shipping to your country, tax, stock and the exact kit before ordering. In China, search the complete model names above on [JD](https://www.jd.com/) or [Taobao](https://www.taobao.com/) and check the seller and included parts. A similarly named S3 or Sense variant may be a different product.

Prices change, so use the live store listing rather than a fixed total for a complete build. As reference snapshots on **October 11, 2026**, M5Stack listed Atom Voice at **US$13.50** and the AtomS3R AI Chatbot Kit at **US$21.50**, before shipping and applicable tax. These are board/kit prices, not the total cost of a working Cadenza setup. No affiliate or tracking links are used here.

## Microphones for a bare board

Only buy a separate microphone if your chosen board has none. A generic **INMP441 I2S breakout** is one DIY option; check the seller's actual module documentation. For documented alternatives, see [Adafruit's I2S MEMS microphone guide](https://learn.adafruit.com/adafruit-i2s-mems-microphone-breakout), which covers its SPH0645LM4H and ICS-43434 breakouts. Follow the documentation for the exact part rather than mixing pinouts or sample formats.

For an I2S module, match the supply and logic voltage, bit clock, word select, data and channel selection to the board and firmware. **There is no universal ESP32-S3 wiring table.** In particular, [Espressif documents GPIO26–32 as normally used for flash/PSRAM](https://docs.espressif.com/projects/esp-idf/en/stable/esp32s3/api-reference/peripherals/gpio.html); GPIO32 should not be a generic microphone clock recommendation. A USB build also needs to preserve the pins used by the board's native USB connection.

## How a custom device reaches Cadenza

### Mac bridge and local API

The device sends audio to a bridge program on the Mac over USB, Bluetooth, serial or Wi-Fi. That program forwards it to Cadenza on `127.0.0.1`. **Cadenza does not expose a direct LAN endpoint.** A Wi-Fi receiver, device firmware and pairing are work the bridge author must implement; the example client is not a complete ESP32 firmware or network receiver.

For external audio, `/v1/audio` requires **16 kHz mono, little-endian signed 16-bit PCM** and an authorized token. Compressed IMA-ADPCM must be decoded first. Typing into another app additionally requires a device token with `insert`, the global insertion switch and a session requesting insertion. The owner token cannot insert text.

Choose an available local model or a configured cloud engine with upload consent. Apple's built-in recognition does not accept externally submitted audio through this interface. See the [hardware integration](../developers/hardware-integration/) and [local API](../developers/local-api/) documents, and the [example clients](https://github.com/DragonKingIO/Cadenza-voice/tree/main/cadenza/examples/local-api).

### USB microphone and keyboard

An ESP32-S3 can be used for USB audio + HID keyboard firmware, but an ordinary board is not a microphone just because it has a USB-C socket. You need appropriate firmware and the board's native USB connection; a USB-to-serial socket alone does not provide USB audio.

Select the resulting microphone in Cadenza and configure the hardware key to match its shortcut. For hold-to-talk, the firmware must send both press and release. Test cancellation and reconnect behavior before everyday use. This path uses normal microphone capture, not the external-audio API; the API's PCM format requirement is specific to API submissions.

## Xiaomi Bluetooth voice remote

**Cadenza connects to the Xiaomi Bluetooth Voice Remote 2 and 2 Pro itself.** Open Settings → Hardware, wake the remote, and follow the pairing card. Hold the voice key and speak; release to insert, or switch the key to press-to-start and press-to-stop. The remote's microphone audio goes to the same recognizer as your Mac's microphone, so a local model keeps it on your Mac.

- **Keys.** The other keys can be remapped to any of 66 actions (text movement and selection, edit shortcuts, page keys, media, volume and brightness, Mission Control, Spotlight, tab and window shortcuts, screenshots, your own shortcut), with three presets; holding an arrow or volume key repeats it. The voice key can also hold to talk and translate. Only the voice key starts dictation. *Key test* shows which key arrives without running anything.
- **No stray typing.** The remote also looks like a keyboard to macOS. Cadenza drops the key events that the remote itself is holding so they do not type into the front window; your keyboard is not touched. This needs the Accessibility permission.
- **Permissions.** Bluetooth to connect the remote, Input Monitoring to read its keys, and Accessibility for the point above. Nothing leaves the Mac for the connection itself; see the [privacy notice](../privacy/notice/).
- **What was tested.** One Remote 2 (USB vendor id 0x2717, product id 0x32B8). The Pro is matched by Xiaomi's vendor id and shown by its product name; it has not been measured on a physical device, so tell us if a Pro does not connect.

How it works is described in [hardware integration](../developers/hardware-integration/).

## Third-party bridges

If you cannot use the built-in support, [SayAll](https://sayall.app/) documents support for Xiaomi Bluetooth Remote 2 and 2 Pro, provides a virtual microphone and lets users map buttons to a separate dictation application. It is a third-party project, not a Cadenza component. Install its current Mac version, pair the supported remote, choose its microphone and configure a matching shortcut. **This combination has not been tested with Cadenza.** Consult SayAll's own setup and licensing information.

For developers, [MI-RC003-ESP32-Bridge](https://github.com/ncmro7/MI-RC003-ESP32-Bridge) describes an ESP32-S3 bridge with USB audio and HID. Its firmware decodes the remote's IMA-ADPCM into PCM. Its documented default voice shortcut is **Right Alt + comma**, so it needs remapping rather than assuming it already sends Cadenza's default Left Option. Check its supported board and firmware instructions; this is another unverified Cadenza integration candidate.

## Try a device before relying on it

1. Check that macOS sees the microphone, or that the bridge returns audio through the local API.
2. Try short and long speech, normal and soft speech, and a pause in your usual room.
3. Check press, release, cancel and reconnect; confirm text reaches the intended field.
4. Check what the device firmware and bridge send over the network. Cadenza's local-model setting does not control a third-party firmware's own cloud requests. Factory AI-assistant firmware is not a Cadenza bridge.

A successful connection is not an accuracy measurement. Use [Compare models with your voice](../compare-models/) to choose a speech model after the audio path works, and [Shortcuts and permissions](../shortcuts-and-permissions/) if the button does not trigger recording.
