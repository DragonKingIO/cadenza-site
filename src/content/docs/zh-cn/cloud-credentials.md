---
title: 云端语音识别：注册与配置
description: 火山引擎、腾讯云、阿里云等云端语音识别服务的开通、凭据获取和填写教程。
---

这是**语音转文字（ASR）**教程，不是截图文字识别。[截图与图片的云端 OCR 配置](../ocr-cloud-credentials/)单独说明；同一家公司的密钥可以同时用于语音与文字识别（见 OCR 教程）；两类服务的开通、权限与上传授权互相独立。

## 注册入口与账号区域

| 服务 | 注册或登录入口 | 当前应用接入说明 |
| --- | --- | --- |
| Deepgram | [国际注册入口](https://console.deepgram.com/signup) | 英文控制台；按下文创建项目 API Key |
| 火山引擎 | [中国控制台](https://console.volcengine.com/) | 豆包语音；不是 BytePlus 账号或密钥 |
| 腾讯云 | [中国站](https://cloud.tencent.com/) · [国际站](https://www.tencentcloud.com/) | 本教程对应中国控制台；国际账号未完成应用实测 |
| 阿里云 | [中国站](https://www.aliyun.com/) · [国际站](https://www.alibabacloud.com/) | 本教程对应国内 NLS；国际账号、地域与权限需另行验证 |
| 百度 | [账号入口](https://login.bce.baidu.com/) | 本教程对应中国站语音服务 |
| 讯飞 | [开放平台](https://www.xfyun.cn/) | 本教程对应中国站语音听写 |
| OpenAI | [API 平台](https://platform.openai.com/) | 按请求计费；同一密钥也用于“我的 AI 模型” |
| Groq | [控制台](https://console.groq.com/) | Whisper 模型；同一密钥也用于“我的 AI 模型” |
| Google Cloud | [云控制台](https://console.cloud.google.com/) | Speech-to-Text，使用 API 密钥；同一密钥也用于 Google 文字识别 |
| Microsoft Azure | [Azure 门户](https://portal.azure.com/) | Speech 资源的密钥与区域；多服务密钥也用于 Azure 文字识别 |
| AssemblyAI | [控制台](https://www.assemblyai.com/dashboard/api-keys) | 短录音（最长两分钟），单次请求 |
| ElevenLabs | [ElevenLabs](https://elevenlabs.io/) | Scribe 语音转文字，最长五分钟 |
| 其他兼容 OpenAI 的服务 | 服务商自己的文档 | 地址、模型和密钥由你填写 |

界面语言不会改变服务商账号区域。国际站账号与中国站账号、密钥和服务开通状态不能假定通用。选择英文也不会自动切换你的常用模型或上传对象。

打开 **设置 → 语音识别 → 云端服务 → 配置**。下面按服务商说明点哪里、拿到什么、填到哪个框。选择本地模型无需注册云端账号或填写密钥。

截图由噜噜提供，拍摄于 **2026 年 10 月 7 日**；账号与凭据已遮挡。控制台改版后入口可能不同，可参考各节的官方入口。服务开通可能涉及费用，请先查看服务商的额度与计费说明。

## 火山引擎

<a id="volcengine"></a>

1. 打开[豆包语音控制台](https://console.volcengine.com/speech/new/setting/apikeys)。进入左侧 **开通管理**，找到 **流式语音识别 2.0**。未开通时点击右侧 **开通**；截图显示的是已经开通的状态。

![开通管理中的流式语音识别 2.0，截图显示已开通](../../../assets/cloud-credentials/volcengine-activate.png)

2. 进入左侧 **API Key**，点击 **创建 API Key**。需要复制已有密钥时，点击密钥旁的眼睛图标显示完整值。

![API Key 管理页面的创建按钮与显示密钥入口](../../../assets/cloud-credentials/volcengine-apikey.png)

3. 将密钥填到随言的 **API Key** 框。本应用使用豆包语音 API Key，不要填通用 IAM AccessKey，也不需要额外填写 App ID。

[官方 API Key 说明](https://docs.volcengine.com/docs/DoubaoVoice/APIKeyUsage?lang=zh)

## 腾讯云

<a id="tencent"></a>

1. 在控制台搜索 **访问管理**，进入 **访问密钥 → API 密钥管理**，点击 **新建密钥**，取得 **SecretId** 和 **SecretKey**。SecretKey 只在创建时显示，请妥善保存。下图是列表页，不是新建后展示完整密钥的弹窗。

![腾讯云访问管理中的 API 密钥管理页面](../../../assets/cloud-credentials/tencent-apikey.png)

2. 回到随言：**SecretId → Secret ID**，**SecretKey → Secret Key**。
3. 点击控制台右上角头像，进入 **账号信息**，取得 **APP ID**，填入随言的 **账号 AppID**。
4. 确认账号已开通[语音识别服务](https://console.cloud.tencent.com/asr)，且所用凭据有调用权限。

[腾讯云 API 密钥管理](https://console.cloud.tencent.com/cam/capi)

## 阿里云

<a id="aliyun"></a>

1. 打开[RAM 控制台](https://ram.console.aliyun.com/)，为有语音服务权限的 RAM 用户创建 **AccessKey**，取得 **AccessKey ID** 和 **AccessKey Secret**。优先使用授权的 RAM 用户；下图是入口示意，按钮可能因当前身份或密钥数量而不可用。

![阿里云 AccessKey 管理页面与创建入口](../../../assets/cloud-credentials/aliyun-accesskey.png)

2. 在随言中分别填入 **AccessKey ID** 和 **AccessKey Secret**。
3. 打开[智能语音交互控制台](https://nls-portal.console.aliyun.com/)，开通服务，进入 **全部项目／项目管理 → 创建项目**，从项目列表复制 **Appkey**，填入随言的 **NLS AppKey**。

**NLS AppKey 是项目标识，与 AccessKey ID / AccessKey Secret 不同，三个字段都需要填写。**

[官方项目管理说明](https://www.alibabacloud.com/help/zh/isi/user-guide/manage-projects) · [官方快速开始](https://www.alibabacloud.com/help/en/isi/getting-started/start-here)

## 百度智能云

<a id="baidu"></a>

此部分为文字参考，原教程未提供百度账号操作截图，也未完成真实账号验证。

打开[百度智能云](https://cloud.baidu.com/)，通过[登录页](https://login.bce.baidu.com/)登录后进入[语音控制台](https://console.bce.baidu.com/ai-engine/speech/overview/index)。按控制台要求完成账号验证、开通服务并创建语音应用，从该应用取得 **API Key** 和 **Secret Key**，填写随言对应的两个框。

## 讯飞

<a id="iflytek"></a>

此部分补充软件所需字段，未包含逐步操作截图。打开[讯飞开放平台控制台](https://console.xfyun.cn/)，选择已开通语音听写服务的应用，在该应用的服务凭据页取得 **App ID、API Key、API Secret**，分别填入随言同名的三个框。不要把 API Secret 当作 API Key。

[讯飞官方鉴权说明](https://www.xfyun.cn/doc/asr/voicedictation/API.html)

## Deepgram 配置

<a id="deepgram"></a>

此部分补充软件所需字段，未包含逐步操作截图。打开[Deepgram 控制台](https://console.deepgram.com/)，在所用项目的 **API Keys** 中创建具有语音识别调用权限的密钥，填入随言的 **API Key** 框。

[Deepgram 官方密钥创建说明](https://developers.deepgram.com/docs/create-additional-api-keys)

## OpenAI 配置

<a id="openai"></a>

1. 在 [OpenAI API 平台](https://platform.openai.com/) 注册并开通计费。语音识别按请求收费。
2. 打开 [API keys](https://platform.openai.com/api-keys)，创建密钥并复制。密钥只显示一次。
3. 在随言中选择 **OpenAI**，选一个模型（默认 `gpt-4o-mini-transcribe`；`whisper-1` 是较早的模型），把密钥填入 **API Key**。
4. 阅读上传说明（松开按键时，整段录音最长五分钟，会发送给 OpenAI），确认授权后测试连接。测试只读取模型列表，不发送录音。

“我的 AI 模型”里的 OpenAI 也使用这个密钥，只需填写一次。[官方语音转文字指南](https://platform.openai.com/docs/guides/speech-to-text)

## Groq 配置

<a id="groq"></a>

1. 在 [Groq 控制台](https://console.groq.com/) 注册，打开 [API keys](https://console.groq.com/keys)。
2. 创建密钥并复制。
3. 在随言中选择 **Groq**，选一个 Whisper 模型（默认 `whisper-large-v3-turbo`），把密钥填入 **API Key**。
4. 同上确认上传授权并测试。Groq 的套餐对请求数和文件大小有限制；达到上限时，服务的提示会说明。

“我的 AI 模型”里的 Groq 也使用这个密钥。[官方语音转文字指南](https://console.groq.com/docs/speech-to-text)

## 其他兼容 OpenAI 的服务

<a id="compat"></a>

任何复制了 OpenAI 转录接口的服务都可以用，填写它自己的地址、模型和密钥。随言提供三个预设，地址和模型都取自各自的文档：

- **Together AI**：`https://api.together.xyz/v1`，模型 `openai/whisper-large-v3`
- **Mistral（Voxtral）**：`https://api.mistral.ai/v1`，模型 `voxtral-mini-latest`
- **硅基流动**：`https://api.siliconflow.cn/v1`，模型 `FunAudioLLM/SenseVoiceSmall`

使用预设前，请对照服务商的最新文档核对。本机上的 Whisper 服务也可以：地址填 `http://127.0.0.1` 或 `http://localhost` 加端口，录音不离开这台 Mac。地址必须是 `https`；只有本机（`127.0.0.1` 或 `localhost`）可以用 `http`。地址里不能含用户名、密码或查询参数。密钥只发送到你填写的地址，授权页会写明这个地址。

## Google Cloud 语音转文字配置

<a id="google"></a>

1. 在 [Google Cloud 控制台](https://console.cloud.google.com/) 创建或选择项目，并开通计费。语音转文字是付费服务，免费额度有限。
2. 在项目里启用 **Cloud Speech-to-Text API**。
3. 打开 [API 和服务 → 凭据](https://console.cloud.google.com/apis/credentials)，创建 **API 密钥**，并限制为只能调用 Speech-to-Text API。
4. 在随言中选择 **Google**，把密钥填入 **API Key**，并说明录音的语言。同一个密钥也用于 Google 文字识别，只需填写一次。
5. 确认上传授权并测试。录音最长一分钟。

[官方 Speech-to-Text 文档](https://cloud.google.com/speech-to-text/docs)

## Microsoft Azure 语音配置

<a id="azure"></a>

1. 登录 [Azure 门户](https://portal.azure.com/)，创建一个 **Speech** 资源。
2. 打开资源的 **密钥和终结点** 页面，复制一个密钥，并记下 **区域**，例如 `eastus`。
3. 在随言中选择 **Azure**，把密钥填入 **API Key**，把区域填入区域框。门户里的资源地址也可以，但必须是 Microsoft Azure 域名下的 `https` 地址。
4. 说明录音的语言。录音最长一分钟。Azure 识别器按原样保留词语，不接收你的词库。

多服务（multi-service）的 Azure 密钥也用于 Azure 文字识别；只为语音创建的资源读不了图片。[官方语音服务文档](https://learn.microsoft.com/azure/ai-services/speech-service/)

## AssemblyAI 配置

<a id="assemblyai"></a>

1. 在 [AssemblyAI](https://www.assemblyai.com/) 注册，打开 [API 密钥控制台](https://www.assemblyai.com/dashboard/api-keys)。
2. 复制密钥填入随言的 **API Key**，并选择 **AssemblyAI**。
3. 说明语言。不说明时默认按英文处理。录音最长两分钟；短录音接口每段录音只发一次请求。
4. 确认上传授权并测试。测试读取转写列表，不发送录音。

[官方文档](https://www.assemblyai.com/docs)

## ElevenLabs Scribe 配置

<a id="elevenlabs"></a>

1. 在 [ElevenLabs](https://elevenlabs.io/) 注册，并在账户设置里创建 API 密钥。
2. 在随言中选择 **ElevenLabs**，把密钥填入 **API Key**，并确认上传授权。
3. Scribe 默认自动识别语言，也可以指定。录音最长五分钟。它不会添加笑声等声音描述。
4. 测试连接；测试读取模型列表，不发送录音。

[官方文档](https://elevenlabs.io/docs)

## 填完以后

1. 阅读配置窗口的录音上传说明，决定是否同意将语音发送给当前服务商。未同意时不会连接服务商。
2. 点击 **测试连接**，查看按钮旁的反馈。它检查连接与鉴权，不发送录音，也不能代替实际识别测试。
3. 点击 **保存**，将该服务设为常用模型，再回到输入页 **试说一句**。

取消录音会停止后续上传，但无法撤回已经发送的音频：说话时流式发送的部分，或松开按键后整段发送的录音。密钥仅填写在应用或服务商控制台里，请勿放进反馈、截图或公开文档。

*原始教程：噜噜，2026-10-07。本站整理并补充字段对照。*
