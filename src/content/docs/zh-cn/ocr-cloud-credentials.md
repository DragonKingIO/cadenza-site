---
title: 云端 OCR：注册与配置
description: Google Cloud Vision、腾讯云、百度截图与图片文字识别的开通与密钥填写教程。
---

OCR 识别的是**截图和图片里的文字**，语音转文字请看[云端语音识别配置](../cloud-credentials/)。两类教程、服务开通、凭据和上传授权各自独立。

目前应用接入 **Google Cloud Vision、腾讯云 OCR、百度 OCR**。系统 Apple Vision 和可下载的 PP-OCR 在本机运行，不需要云端密钥。阿里云 OCR、OpenAI 等视觉服务目前没有接入本应用。

以下先提供注册地址与文字步骤，后续补充截图。步骤参考官方文档，尚未完成逐服务商真实账号验收；控制台入口和账号要求可能变化，请先查看计费与额度。

## Google Cloud Vision 配置

<a id="google"></a>

1. 打开 [Google Cloud](https://cloud.google.com/) 注册或登录，在[控制台](https://console.cloud.google.com/)创建或选择项目，按 Vision 的要求关联结算账号。
2. 为该项目启用 [Cloud Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com)。
3. 进入 [API 和服务 → 凭据](https://console.cloud.google.com/apis/credentials)，创建 **API 密钥**，将 API 限制设为 **Cloud Vision API**。应用限制要允许这台 Mac 发出请求；网页来源限制不适合本桌面应用。
4. 在随言的 OCR 设置中配置 **Google Cloud Vision**，将密钥填入 **API Key**。这里不接受服务账号 JSON 文件，也不是 Gemini / AI Studio 密钥。
5. 阅读图片上传授权，保存，再选为 OCR 常用引擎。

[官方开通与结算说明](https://docs.cloud.google.com/vision/docs/setup) · [API 密钥管理说明](https://docs.cloud.google.com/docs/authentication/api-keys)

## 腾讯云 OCR

<a id="tencent"></a>

1. 在[腾讯云中国站](https://cloud.tencent.com/)注册或登录。腾讯云也有[国际站](https://www.tencentcloud.com/)，但下面步骤对应中国控制台，不能视为国际账号在本应用中已验证可用。
2. 打开[文字识别控制台](https://console.cloud.tencent.com/ocr/overview)，阅读服务条款并开通 OCR。开通语音识别不等于开通 OCR。
3. 在[访问管理 → API 密钥管理](https://console.cloud.tencent.com/cam/capi)创建有 OCR 权限的密钥，在创建时保存 **SecretId / SecretKey**。
4. 填入随言 OCR 的 **Secret ID / Secret Key**，选择账号支持的 OCR 地域；应用默认 `ap-guangzhou`。OCR 不需要语音配置中的账号 AppID。
5. 阅读图片上传授权，保存并选择该引擎。如果开启高精度，请确认账号可以调用对应的 OCR 接口。

[官方新手指引](https://cloud.tencent.com/document/product/866/45338/) · [国际站英文文档](https://www.tencentcloud.com/document/product/1005)

## 百度 OCR

<a id="baidu"></a>

1. 通过[百度智能云账号入口](https://login.bce.baidu.com/)注册或登录，按服务商要求完成账号验证。
2. 打开[文字识别控制台](https://console.bce.baidu.com/ai/#/ai/ocr/overview/index)，开通通用文字识别并创建 **OCR 应用**。
3. 将该应用的 **API Key / Secret Key** 填入随言 OCR 同名字段。不要填通用云 AccessKey，也不要假定语音应用已经有 OCR 权限。
4. 阅读图片上传授权，保存并选择百度。如果开启高精度，请确认对应接口已经开通且有可用额度。

[官方应用创建与密钥说明](https://ai.baidu.com/ai-doc/REFERENCE/Bkru0l60m)

## 测试与数据去向

OCR 的 **测试连接** 会发送应用生成的 `OCR TEST 123` 测试图片，**不是你的桌面截图**。它仍会联系当前服务商，需要图片上传授权，可能消耗服务商额度。语音配置的连接检查不同，不发送录音。

保存后可用不含隐私的截图试识别。云端 OCR 在你同意后，将选中的图片发送给当前服务商，不发送音频。即使属于同一家公司，OCR 与语音的凭据和上传同意也单独配置。本地回退另行设置，不代表允许向其他云服务上传。

不要把密钥放进反馈、截图或公开文档。国际英文用户目前可使用英文控制台的 Google Cloud Vision；选择本机 Apple Vision 或 PP-OCR 则无需云端注册。
