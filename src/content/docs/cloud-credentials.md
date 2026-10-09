---
title: Cloud speech — registration and setup
description: Enable cloud speech services, find your credentials and fill in the matching fields.
---

This guide is for **speech-to-text (ASR)**. For screenshots and images, use the separate [cloud OCR setup guide](../ocr-cloud-credentials/). A key for the same company can serve speech and text recognition (see the OCR guide); service activation, permissions and upload consent are separate.

## Account and region guide

**Start with Deepgram if you want an English-language cloud setup.** Local recognition needs no cloud account. Cadenza supports Deepgram, OpenAI, Groq, Google Cloud, Microsoft Azure, AssemblyAI, ElevenLabs, five China-based services (iFLYTEK, Volcengine, Tencent Cloud, Alibaba Cloud, Baidu), and any service that copies the OpenAI transcription API.

| Provider | Registration or sign-in | Integration scope |
| --- | --- | --- |
| Deepgram | [International signup](https://console.deepgram.com/signup) | English console; follow the steps below |
| Tencent Cloud | [International site](https://www.tencentcloud.com/) · [China site](https://cloud.tencent.com/) | Walkthrough uses the China console; international accounts have not been validated in Cadenza |
| Alibaba Cloud | [International site](https://www.alibabacloud.com/) · [China site](https://www.aliyun.com/) | Walkthrough uses mainland NLS; international account and region compatibility require validation |
| Volcengine | [China console](https://console.volcengine.com/) | Doubao Speech; BytePlus credentials are not interchangeable |
| Baidu | [Account portal](https://login.bce.baidu.com/) | China speech service; console may be Chinese |
| iFLYTEK | [Open platform](https://www.xfyun.cn/) | China speech dictation service; console may be Chinese |
| OpenAI | [API platform](https://platform.openai.com/) | Pay per request; the key is also used by My AI models |
| Groq | [Console](https://console.groq.com/) | Whisper models; the key is also used by My AI models |
| Google Cloud | [Cloud console](https://console.cloud.google.com/) | Speech-to-Text with an API key; the same key serves Google text recognition |
| Microsoft Azure | [Azure portal](https://portal.azure.com/) | Speech resource with its key and region; a multi-service key also serves Azure text recognition |
| AssemblyAI | [Dashboard](https://www.assemblyai.com/dashboard/api-keys) | Short recordings (up to two minutes), one call |
| ElevenLabs | [ElevenLabs](https://elevenlabs.io/) | Scribe speech to text; up to five minutes |
| Other OpenAI-compatible service | Your provider's documentation | Address, model and key are yours to fill in |

Changing the UI language does not change your primary engine, account region or upload destination. International and China accounts must not be assumed to share credentials or service activation. The translated screenshots below are references for the China consoles, not international-console walkthroughs.

Open **Settings → Speech → Cloud services → Configure**. Local models do not require a cloud account or API key.

The screenshots were provided by Lulu on **7 October 2026**, with account details and credentials obscured. They show Chinese consoles; labels may change. Check the provider's pricing before activating a service.

## Deepgram setup

<a id="deepgram"></a>

1. [Create a Deepgram account](https://console.deepgram.com/signup), then open the [console](https://console.deepgram.com/).
2. Select your project, open **Settings → API Keys → Create a New API Key**, and grant permission to call speech recognition.
3. Copy the secret when it is displayed and paste it into Cadenza’s **API Key** field. Keep it private; the console does not show the secret again.
4. Choose the recognition language in Cadenza, review upload consent, then test the connection. These steps have no account screenshots yet.

[Official Deepgram key creation guide](https://developers.deepgram.com/docs/create-additional-api-keys)

## Volcengine setup

<a id="volcengine"></a>

1. Open the [Doubao Speech console](https://console.volcengine.com/speech/new/setting/apikeys). Select **开通管理** (service activation), find **流式语音识别 2.0** (streaming speech recognition 2.0), and activate it if necessary. The screenshot shows an already activated service.

![Service activation page showing streaming speech recognition 2.0 already enabled](../../assets/cloud-credentials/volcengine-activate.png)

2. Select **API Key**, then **创建 API Key** (create API key). To copy an existing key, use the eye icon to reveal its full value.

![API Key page with the create button and reveal control](../../assets/cloud-credentials/volcengine-apikey.png)

3. Paste it into Cadenza's **API Key** field. This integration uses a Doubao Speech API key, not a general IAM AccessKey. No App ID is needed.

[Official API key documentation](https://docs.volcengine.com/docs/DoubaoVoice/APIKeyUsage?lang=zh)

## Tencent Cloud

<a id="tencent"></a>

1. Search for **访问管理** (access management) in the console. Open **访问密钥 → API 密钥管理** (access keys → API key management), create a key and retain its **SecretId** and **SecretKey**. The secret is shown only at creation. The screenshot shows the list, not the dialog revealing a new secret.

![Tencent Cloud API key management page](../../assets/cloud-credentials/tencent-apikey.png)

2. Fill **SecretId → Secret ID** and **SecretKey → Secret Key** in Cadenza.
3. Open the account menu at the top right, select account information and copy **APP ID** into Cadenza's **Account AppID** field.
4. Ensure [speech recognition](https://console.cloud.tencent.com/asr) is activated and your credentials have permission to call it.

[API key management](https://console.cloud.tencent.com/cam/capi)

## Alibaba Cloud

<a id="aliyun"></a>

1. Open the [RAM console](https://ram.console.aliyun.com/) and create an **AccessKey** pair for an authorized RAM user. Copy **AccessKey ID** and **AccessKey Secret** into Cadenza's matching fields. Prefer a RAM user with speech service permissions. The screenshot shows the entry point; the create button may be unavailable for your identity or key limit.

![Alibaba Cloud AccessKey management page](../../assets/cloud-credentials/aliyun-accesskey.png)

2. Activate Intelligent Speech Interaction in the [speech console](https://nls-portal.console.aliyun.com/), open **全部项目／项目管理** (all projects / project management), and create a project.
3. Copy that project's **Appkey** into Cadenza's **NLS AppKey** field.

**The project Appkey is different from AccessKey ID and AccessKey Secret. All three fields are required.**

[Official project guide](https://www.alibabacloud.com/help/en/isi/user-guide/manage-projects) · [Official quick start](https://www.alibabacloud.com/help/en/isi/getting-started/start-here)

## Baidu AI Cloud

<a id="baidu"></a>

Text reference only: the supplied tutorial has no Baidu screenshots or live-account validation.

Open [Baidu AI Cloud](https://cloud.baidu.com/), [sign in](https://login.bce.baidu.com/) and enter the [speech console](https://console.bce.baidu.com/ai-engine/speech/overview/index). Complete the account requirements, activate speech recognition and create a speech application. Fill its **API Key** and **Secret Key** into Cadenza's corresponding fields.

## iFLYTEK setup

<a id="iflytek"></a>

Field reference, without step-by-step screenshots: open the [iFLYTEK console](https://console.xfyun.cn/), select an application with speech dictation enabled, and find its service credentials. Fill **App ID**, **API Key** and **API Secret** into the three matching fields. API Secret and API Key are different values.

[Official iFLYTEK authentication guide](https://www.xfyun.cn/doc/asr/voicedictation/API.html)

## OpenAI setup

<a id="openai"></a>

1. Sign in at the [OpenAI API platform](https://platform.openai.com/) and add billing. Speech recognition is charged per request.
2. Open [API keys](https://platform.openai.com/api-keys), create a key and copy it. It is shown once.
3. In Cadenza choose **OpenAI**, pick a model (`gpt-4o-mini-transcribe` is the default; `whisper-1` is the older model), and paste the key into **API Key**.
4. Read the upload explanation (the whole recording is sent to OpenAI when you release the key, up to five minutes), allow it, and test the connection. The test reads the model list and sends no audio.

The same OpenAI key is used by My AI models, so you enter it once. [Official speech-to-text guide](https://platform.openai.com/docs/guides/speech-to-text)

## Groq setup

<a id="groq"></a>

1. Create an account at the [Groq console](https://console.groq.com/) and open [API keys](https://console.groq.com/keys).
2. Create a key and copy it.
3. In Cadenza choose **Groq**, pick a Whisper model (`whisper-large-v3-turbo` is the default) and paste the key into **API Key**.
4. Allow the upload as above and test. Groq limits requests and file sizes on its plans; the service's message says so when a limit is reached.

The key is also used by My AI models. [Official speech-to-text guide](https://console.groq.com/docs/speech-to-text)

## Other OpenAI-compatible services

<a id="compat"></a>

Any service that copies the OpenAI transcription API can be used, with its own address, model and key. Cadenza offers three presets, each with the address and model from its documentation:

- **Together AI**: `https://api.together.xyz/v1`, model `openai/whisper-large-v3`
- **Mistral (Voxtral)**: `https://api.mistral.ai/v1`, model `voxtral-mini-latest`
- **SiliconFlow**: `https://api.siliconflow.cn/v1`, model `FunAudioLLM/SenseVoiceSmall`

Check a preset against the provider's current documentation before you rely on it. A Whisper server on this Mac also works: use `http://127.0.0.1` or `http://localhost` with its port, and nothing leaves the Mac. An address must be `https`; `http` is accepted only for this Mac (`127.0.0.1` or `localhost`). An address must not contain a user name, password or query string. The key is sent only to the address you enter, and the permission sheet names that address.

## Google Cloud Speech-to-Text setup

<a id="google"></a>

1. Create or select a project in the [Google Cloud console](https://console.cloud.google.com/) and enable billing. Speech-to-Text is a paid service with a limited free tier.
2. Enable the **Cloud Speech-to-Text API** for the project.
3. Open [APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials), create an **API key**, and restrict it to the Speech-to-Text API.
4. In Cadenza choose **Google**, paste the key into **API Key**, and name the language of your recordings. The same key serves Google text recognition, so you enter it once.
5. Allow the upload and test. Recordings are limited to one minute.

[Official Speech-to-Text documentation](https://cloud.google.com/speech-to-text/docs)

## Microsoft Azure Speech setup

<a id="azure"></a>

1. Sign in to the [Azure portal](https://portal.azure.com/) and create a **Speech** resource.
2. Open the resource's **Keys and Endpoint** page. Copy one key and note the **region**, for example `eastus`.
3. In Cadenza choose **Azure**, paste the key into **API Key** and the region into the region field. The resource address from the portal also works, as long as it is `https` on a Microsoft Azure host.
4. Name the language of your recordings. Recordings are limited to one minute. Azure's recognizer keeps words as spoken and does not take your vocabulary.

A multi-service Azure key also serves Azure text recognition; a key for a Speech-only resource does not read pictures. [Official Speech documentation](https://learn.microsoft.com/azure/ai-services/speech-service/)

## AssemblyAI setup

<a id="assemblyai"></a>

1. Create an account at [AssemblyAI](https://www.assemblyai.com/) and open the [API keys dashboard](https://www.assemblyai.com/dashboard/api-keys).
2. Copy the key into **API Key** in Cadenza, and choose **AssemblyAI**.
3. Name the language. If you do not, English is assumed. Recordings are limited to two minutes; the short-clip service takes one request per recording.
4. Allow the upload and test. The test reads your transcripts list and sends no audio.

[Official documentation](https://www.assemblyai.com/docs)

## ElevenLabs Scribe setup

<a id="elevenlabs"></a>

1. Create an account at [ElevenLabs](https://elevenlabs.io/) and create an API key in your account settings.
2. In Cadenza choose **ElevenLabs**, paste the key into **API Key**, and allow the upload.
3. Scribe detects the language unless you name it. Recordings are limited to five minutes. It does not add sound descriptions such as laughter.
4. Test the connection; the test reads the model list and sends no audio.

[Official documentation](https://elevenlabs.io/docs)

## After filling in the fields

1. Read the audio-upload explanation and decide whether to allow this provider. Without consent, the app does not connect to it.
2. Click **Test connection** and read the feedback beside it. The check tests connection and authentication, sends no recording, and does not replace a recognition test.
3. Click **Save**, select the provider as your primary model, and try a sentence on the input page.

Cancelling stops subsequent uploads but cannot recall audio already sent, whether streamed while you speak or sent as a whole recording when you release the key. Do not put keys in feedback, screenshots or public documentation.

*Original tutorial: Lulu, 2026-10-07. Adapted with field references for this app.*
