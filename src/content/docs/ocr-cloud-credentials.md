---
title: Cloud OCR — registration and setup
description: Set up Google Cloud Vision, Microsoft Azure AI Vision, Mistral OCR, Tencent Cloud or Baidu for screenshot text recognition.
---

OCR reads text in **screenshots and images**. It does not transcribe speech. For audio, use [cloud speech setup](../cloud-credentials/).

Cadenza currently supports **Google Cloud Vision, Microsoft Azure AI Vision, Mistral OCR, Tencent Cloud OCR and Baidu OCR**, alongside on-device Apple Vision and downloadable PP-OCR models. Local OCR needs no cloud key. Alibaba OCR and other vision services are not current OCR options in this app.

These are text instructions based on provider documentation, without account walkthrough screenshots or live-account acceptance. Console labels and account eligibility may vary. Review provider pricing before enabling a service.

## Google Cloud Vision setup

<a id="google"></a>

1. Open [Google Cloud](https://cloud.google.com/) and sign in or create an account. In the [Cloud console](https://console.cloud.google.com/), create or select a project and enable billing as required by Vision.
2. Enable [Cloud Vision API](https://console.cloud.google.com/apis/library/vision.googleapis.com) in that project.
3. Open [APIs & Services → Credentials](https://console.cloud.google.com/apis/credentials) and create an **API key**. Restrict its API access to **Cloud Vision API**. Application restrictions must support requests from your Mac; a website-referrer restriction is not appropriate for this desktop app.
4. In Cadenza's OCR settings, configure **Google Cloud Vision** and paste the key into **API Key**. The app uses a key, not a service-account JSON file or a Gemini/AI Studio key.
5. Review image-upload consent, save and select it as your OCR engine.

[Official setup and billing guide](https://docs.cloud.google.com/vision/docs/setup) · [API key management](https://docs.cloud.google.com/docs/authentication/api-keys)

## Microsoft Azure AI Vision setup

<a id="azure"></a>

1. Sign in to the [Azure portal](https://portal.azure.com/) and create an **Azure AI Vision** (Computer Vision) resource. The [create page](https://portal.azure.com/#create/Microsoft.CognitiveServicesComputerVision) opens it directly.
2. Open the resource's **Keys and Endpoint** page. Copy one key and note the **region**, for example `eastus`.
3. In Cadenza's OCR settings, configure **Microsoft Azure**, paste the key into **API Key** and the region into the region field. The resource's address from the portal also works, as long as it is `https` on a Microsoft Azure host.
4. Review image-upload consent, save and select Azure.

Lines are returned with their positions, so the text can be selected on the screenshot. A Speech-only resource does not read pictures; use an AI Vision resource here. [Official Read documentation](https://learn.microsoft.com/azure/ai-services/computer-vision/overview-ocr)

## Mistral OCR setup

<a id="mistral"></a>

1. Create an account at [Mistral](https://console.mistral.ai/). Mistral OCR is a paid API; check its pricing in the console first.
2. Open [API keys](https://console.mistral.ai/api-keys) and create a key.
3. In Cadenza's OCR settings, configure **Mistral OCR** and paste the key into **API Key**. The same key is used by My AI models for Mistral, so you enter it once.
4. Review image-upload consent, save and select Mistral. The answer is Markdown, and pictures inside the page are removed.

[Official OCR documentation](https://docs.mistral.ai/capabilities/document/)

## Tencent Cloud OCR

<a id="tencent"></a>

1. Register or sign in at [Tencent Cloud China](https://cloud.tencent.com/). An [international site](https://www.tencentcloud.com/) also exists; this walkthrough uses the China console and does not establish international-account compatibility with Cadenza.
2. Open the [OCR console](https://console.cloud.tencent.com/ocr/overview), read the service terms and activate OCR. Activating speech recognition does not activate OCR.
3. In [API key management](https://console.cloud.tencent.com/cam/capi), create an authorized credential pair. Copy **SecretId** and **SecretKey** at creation.
4. Fill Cadenza's **Secret ID** and **Secret Key** fields. Choose a supported OCR region; the app defaults to `ap-guangzhou`. This OCR integration does not require the speech integration's Account AppID field.
5. Review image-upload consent, save and select the provider. Enable the higher-accuracy option only if the corresponding OCR API is available for your account.

[Official getting started guide (Chinese)](https://cloud.tencent.com/document/product/866/45338/) · [International OCR documentation](https://www.tencentcloud.com/document/product/1005)

## Baidu OCR

<a id="baidu"></a>

1. Register or sign in through the [Baidu Cloud account portal](https://login.bce.baidu.com/), completing any account verification requested by the provider.
2. Open the [OCR console](https://console.bce.baidu.com/ai/#/ai/ocr/overview/index), enable the general text OCR service and create an **OCR application**.
3. Copy its **API Key** and **Secret Key** into the matching Cadenza OCR fields. Do not substitute a general cloud AccessKey or assume a speech application's permissions cover OCR.
4. Review image-upload consent, save and select Baidu. If you select higher accuracy, check that the corresponding API is enabled and available.

[Official application and key guide](https://ai.baidu.com/ai-doc/REFERENCE/Bkru0l60m)

## Test and privacy

The OCR **Test connection** button sends a generated test image containing `OCR TEST 123`, not a screenshot of your desktop. It still contacts the selected provider, requires image-upload consent and can consume its quota. Speech's connection check has different behavior and does not send a recording.

After saving, test with a non-sensitive screenshot. OCR uploads the selected image to the selected cloud provider only after consent; it does not upload audio. For the same company, a key is entered once and shared between speech and text recognition (Tencent Cloud, Baidu, Google and Azure); consent is still given separately for speech and for OCR. Local fallback is configured separately and does not authorize another cloud service.

Keep keys out of screenshots, feedback and public documents. For an English-language international setup, Google Cloud Vision, Microsoft Azure AI Vision and Mistral OCR all have English consoles; local Apple Vision and PP-OCR avoid cloud registration entirely.
