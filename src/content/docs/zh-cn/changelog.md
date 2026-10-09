---
title: 更新记录
description: 每个版本改了什么。
---

## 1.2.0 — 早期预览

- **语音翻译有自己的快捷键和页面。** 普通听写不再翻译。原来选了语言的，请设置一个翻译快捷键，才会继续翻译。
- **快捷键**：“按住说话”和“点按开始和结束”各有一行，各自有开关。“触发方式”的选择已去掉。
- **更多云端语音识别**：OpenAI、Groq、Google Cloud、Microsoft Azure、AssemblyAI、ElevenLabs，以及任何兼容 OpenAI 的服务。还没有用真实服务测试。
- **更多云端文字识别**：Microsoft Azure AI Vision、Mistral OCR。同一家公司的密钥在语音识别、文字识别和“我的 AI 模型”之间共用。
- 轻声识别：本机模型在环境噪声接近人声时做降噪处理。
- 词库、文字整理、AI 润色，以及用于润色和翻译的“我的 AI 模型”。
- 没有公证；要求 macOS 14 及以上，Apple 芯片或 Intel。

## 1.1.0 — 早期预览

- 一个安装包同时支持 Apple 芯片**和 Intel** 的 Mac，最低系统从 macOS 26 降到 **macOS 14**。
- 录音条：浅色模式下是透明玻璃；可选的角色样式，用短动画代替波形。
- 截图用的本地文字识别模型（PP-OCR）。
- 还没有在 Intel 真机以及 macOS 14、15 上验证。

## 1.0.0 — 早期预览

第一个公开版本。维护者每天都在用，但还没在很多环境里测试过。

- 语音输入：按住快捷键说话，文字写到光标处。
- 本地识别：SenseVoice、FireRedASR2、Parakeet；可选云端服务，使用你自己的密钥并经你同意。
- 截图与文字识别（新功能，仍在测试）。
- 可选的本地接口，给你自己的程序和硬件用。
- 没有公证，要求 macOS 26 及以上、Apple 芯片。

每个版本的安装包和校验文件都列在 [GitHub Releases](https://github.com/DragonKingIO/Cadenza-voice/releases)。详细的完整列表见仓库的
[CHANGELOG.md](https://github.com/DragonKingIO/Cadenza-voice/blob/main/cadenza/CHANGELOG.md)（英文）。
