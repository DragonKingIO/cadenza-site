// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';

const repo = 'https://github.com/DragonKingIO/Cadenza-voice';

// Published at https://dragonkingio.github.io/cadenza-site/ until the project has its own domain.
// With a custom domain, set `site` to it and remove `base`.
export default defineConfig({
	site: 'https://dragonkingio.github.io',
	base: '/cadenza-site',
	integrations: [
		starlight({
			// One product, two names: each language shows only its own (see BRAND.md in the app repository).
			title: { en: 'Cadenza', 'zh-CN': '随言' },
			description: 'Local-first voice input for macOS. Hold a shortcut, speak, and the text is typed at your cursor.',
			logo: { src: './src/assets/logo.svg', alt: '' },
			favicon: '/favicon.svg',
			defaultLocale: 'root',
			locales: {
				root: { label: 'English', lang: 'en' },
				'zh-cn': { label: '简体中文', lang: 'zh-CN' },
			},
			social: [{ icon: 'github', label: 'GitHub', href: repo }],
			editLink: { baseUrl: 'https://github.com/DragonKingIO/cadenza-site/edit/main/' },
			customCss: ['./src/styles/theme.css'],
			plugins: [starlightLinksValidator({ errorOnRelativeLinks: false })],
			head: [
				// First visit from outside the site on a Chinese browser: show the Chinese home page. Choosing English later is respected.
				{
					tag: 'script',
					content:
						"(function(){try{var b='/cadenza-site';var p=location.pathname.replace(/\\/+$/,'');if((p===b||p==='')&&(navigator.language||'').toLowerCase().indexOf('zh')===0&&!(document.referrer&&document.referrer.indexOf(location.origin)===0)){location.replace(b+'/zh-cn/')}}catch(e){}})();",
				},
			],
			sidebar: [
				{
					label: 'Start here',
					translations: { 'zh-CN': '开始' },
					items: [
						{ slug: 'getting-started', label: 'Getting started', translations: { 'zh-CN': '快速开始' } },
					],
				},
				{
					label: 'Guides',
					translations: { 'zh-CN': '使用指南' },
					items: [
						{ slug: 'engines', label: 'Recognition engines', translations: { 'zh-CN': '识别引擎' } },
						{ slug: 'compare-models', label: 'Compare models with your voice', translations: { 'zh-CN': '用我的声音比较模型' } },
						{ slug: 'shortcuts-and-permissions', label: 'Shortcuts and permissions', translations: { 'zh-CN': '快捷键与权限' } },
						{ slug: 'troubleshooting', label: 'Troubleshooting', translations: { 'zh-CN': '常见问题' } },
					],
				},
				{
					label: 'Privacy',
					translations: { 'zh-CN': '隐私' },
					items: [
						{ slug: 'privacy', label: 'Privacy promise', translations: { 'zh-CN': '隐私承诺' } },
						{ slug: 'privacy/notice', label: 'Privacy notice', translations: { 'zh-CN': '隐私说明' } },
						{ slug: 'privacy/terms', label: 'Terms of use', translations: { 'zh-CN': '使用条款' } },
					],
				},
				{
					label: 'For developers',
					translations: { 'zh-CN': '开发者' },
					items: [
						{ slug: 'developers/local-api', label: 'Local API', translations: { 'zh-CN': '本地接口' } },
						{ slug: 'developers/hardware-integration', label: 'Hardware integration', translations: { 'zh-CN': '硬件接入' } },
						{ slug: 'developers/accuracy', label: 'Accuracy benchmark', translations: { 'zh-CN': '准确度基准' } },
						{ slug: 'developers/local-models', label: 'Local models', translations: { 'zh-CN': '本地模型（开发说明）' } },
						{ slug: 'developers/platforms', label: 'Platforms', translations: { 'zh-CN': '平台说明' } },
						{ slug: 'developers/third-party-notices', label: 'Third-party notices', translations: { 'zh-CN': '第三方声明' } },
					],
				},
				{
					label: 'Contribute',
					translations: { 'zh-CN': '参与贡献' },
					items: [
						{ slug: 'contribute', label: 'Contribute', translations: { 'zh-CN': '参与贡献' } },
						{ slug: 'contribute/contributing', label: 'Contributing guide', translations: { 'zh-CN': '贡献指南' } },
						{ slug: 'contribute/developing', label: 'Developing', translations: { 'zh-CN': '开发指南' } },
						{ slug: 'contribute/releasing', label: 'Releasing', translations: { 'zh-CN': '发布流程' } },
						{ slug: 'contribute/security', label: 'Security policy', translations: { 'zh-CN': '安全政策' } },
						{ slug: 'contribute/code-of-conduct', label: 'Code of conduct', translations: { 'zh-CN': '行为准则' } },
					],
				},
				{ slug: 'changelog', label: 'Changelog', translations: { 'zh-CN': '更新记录' } },
			],
		}),
	],
});
