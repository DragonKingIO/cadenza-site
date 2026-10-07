---
title: 云端 API 密钥：去哪里点
description: 火山引擎、腾讯云、阿里云等云端语音识别服务的开通、凭据获取和填写教程。
---

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

## 填完以后

1. 阅读配置窗口的录音上传说明，决定是否同意将语音发送给当前服务商。未同意时不会连接服务商。
2. 点击 **测试连接**，查看按钮旁的反馈。它检查连接与鉴权，不发送录音，也不能代替实际识别测试。
3. 点击 **保存**，将该服务设为常用模型，再回到输入页 **试说一句**。

取消录音会停止后续上传，但无法撤回流式识别已经发送的音频。密钥仅填写在应用或服务商控制台里，请勿放进反馈、截图或公开文档。

*原始教程：噜噜，2026-10-07。本站整理并补充字段对照。*
