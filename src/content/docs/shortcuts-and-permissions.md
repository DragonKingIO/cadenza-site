---
title: Shortcuts and permissions
description: How the hold shortcut works, how to change it, and what each permission is for.
---

## The shortcut

By default you **hold Left Option**, speak, and release. The text is typed when you let go. Press **Esc** to cancel.

On the **Shortcut** page you can:

- change the shortcut: click **Change** and press the key or combination you want;
- switch to **tap to start, tap to stop**, with its own shortcut;
- turn the shortcut off. You can still record from the menu bar item.

A single modifier key, either Left Option or Right Option, works as a hold shortcut as long as you press it on its own. If you press another
key together with it, the recording is cancelled, so normal Option shortcuts keep working.

## Which key should I use?

Left Option is only the default. It is not a macOS standard: macOS's own dictation is started, by default, by pressing the Globe
(Fn) key twice. Cadenza uses a single modifier key because those are reliable to detect.

Today **Left Option and Right Option are the only single keys Cadenza supports** as a shortcut, and Fn itself is not supported.
Command, Shift and Control are left out on purpose: they are pressed all the time as part of other shortcuts, so holding one
alone would start recordings by accident. Option is also used for special characters and shortcuts. Cadenza cancels a recording
when you press another key together with it, but the recording has already started for a moment.

If Option gets in your way, record a different shortcut on the Shortcut page: a key together with at least two modifiers
(including Control or Command), or a function key.

If a combination is refused, Cadenza says why and the Shortcut page suggests a few combinations that work. Command with Shift and a key (such as ⌘⇧A) works. Editing commands such as ⌘C, ⌘V and ⌘Z are refused, because every app uses them. Control with Option is refused only while VoiceOver is on, since that pair is VoiceOver's own.

## Permissions

| Permission | Why Cadenza needs it |
|---|---|
| **Microphone** | To hear you while you record. |
| **Accessibility** | To find the focused text field and type the result. |
| **Input Monitoring** | To notice the global shortcut while another app is in front. |
| **Speech Recognition** | Only if you use Apple's built-in recognition. |

Settings → **Privacy** lists each permission and its state. A button appears only when a permission still needs attention.

### "On but not working"

macOS can keep showing a permission as allowed while the app can no longer use it. This happens, for example, after you
turn the switch off and on, or after the app was rebuilt. Cadenza checks for it and says so. To fix it:

1. Open System Settings → Privacy & Security → Input Monitoring (or Accessibility).
2. Turn Cadenza off and on again, or remove it with **−** and add it back.
3. Quit and reopen Cadenza.

The shortcut listener is also rebuilt automatically when permissions change and after the Mac wakes from sleep.

## Keyboards and remapping

The shortcut follows the physical key macOS reports. If it does not respond:

- On a **PC keyboard**, the Alt and Windows keys may be swapped with Option and Command. Open Settings → Shortcut, click
  **Change**, and press the key you actually want to use.
- Check System Settings → Keyboard → Keyboard Shortcuts → **Modifier Keys** and any keyboard-remapping tool for rules that
  change Option or Command.
- Remote-control or virtual-keyboard software can make macOS believe a normal key is held down. Cadenza ignores keys it never
  saw being pressed, so this should not block the shortcut, but if it does, [open an issue](https://github.com/DragonKingIO/Cadenza-voice/issues).
