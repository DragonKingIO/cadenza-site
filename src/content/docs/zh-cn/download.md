---
title: 下载
description: 如何获得随言。目前还没有发布版本，需要从源码构建。
---

:::caution[还没有发布版本]
第一个版本尚未发布。在此之前请自己构建，几分钟即可。发布后会出现在 [GitHub Releases](https://github.com/DragonKingIO/Cadenza-voice/releases)。
:::

## 要求

Apple 芯片、macOS 26 或更高版本，并安装 Xcode 命令行工具（`xcode-select --install`）。

## 从源码构建

```sh
git clone https://github.com/DragonKingIO/Cadenza-voice.git
cd Cadenza-voice
./cadenza/tools/fetch-sherpa-onnx.sh     # 可选：本地模型需要的推理库
./cadenza/build.sh --stage-only          # 生成 cadenza/build/stage.noindex/Cadenza.app.zip
```

解压后打开应用。自己构建的副本可以直接打开。本地模型不随应用打包，而是在应用里下载，每次下载都会做校验。

## 有了发布版本之后

从 GitHub Releases 下载 zip，用 `shasum -a 256 -c SHA256SUMS.txt` 校验，解压后打开应用。发布版是临时签名、**没有公证**（项目没有预算购买 Apple 开发者证书），所以 macOS 会拦截下载副本的第一次打开：

1. 先尝试打开一次应用。
2. 打开 **系统设置 → 隐私与安全性**。
3. 下拉找到关于这个应用的提示，点**仍要打开**并确认。

（macOS 15 起，右键“打开”已经不能绕过。）每次临时签名的构建都是新的身份，所以更新后 macOS 会再次询问麦克风、辅助功能和输入监控。

## 其他平台

目前只支持 macOS，见[平台说明](../developers/platforms/)。
