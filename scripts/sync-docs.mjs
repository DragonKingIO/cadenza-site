#!/usr/bin/env node
// Copies the technical documents from the application repository into this site, so each one has a single source of truth.
//
//   npm run sync -- /path/to/Cadenza-voice [git-ref]
//
// The documents are read from a git ref of the application repository (default HEAD), never from its working tree, so
// unfinished local edits there cannot leak into the site.
//
// For every document it adds the front matter Starlight needs, drops the first heading (the page title replaces it),
// and rewrites relative links: a link to another synced document points to its page on this site, any other link points to
// the file on GitHub. Generated pages say so at the top; edit the source file, not the copy.
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const appRepo = resolve(process.argv[2] || process.env.APP_REPO || '');
const ref = process.argv[3] || 'HEAD';
if (!process.argv[2] && !process.env.APP_REPO) {
	console.error('usage: npm run sync -- /path/to/Cadenza-voice [git-ref]   (or set APP_REPO)');
	process.exit(2);
}
const git = (...args) => execFileSync('git', ['-C', appRepo, ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
const readSource = (path) => { try { return git('show', `${ref}:${path}`); } catch { return null; } };
const isDirectory = (path) => { try { return git('cat-file', '-t', `${ref}:${path}`).trim() === 'tree'; } catch { return false; } };
if (readSource('cadenza/docs/LOCAL-API.md') === null) {
	console.error(`${appRepo} at ${ref} does not look like the Cadenza repository (cadenza/docs/LOCAL-API.md not found)`);
	process.exit(2);
}

const BASE = '/cadenza-site';
const GITHUB = 'https://github.com/DragonKingIO/Cadenza-voice';
const out = join(siteRoot, 'src/content/docs');

// source (repo-relative) -> page. `zh: true` marks a Chinese original that lives under /zh-cn/.
const pages = [
	{ src: 'cadenza/docs/LOCAL-API.md', slug: 'developers/local-api', label: 'Local API' },
	{ src: 'cadenza/docs/HARDWARE-INTEGRATION.md', slug: 'developers/hardware-integration', label: 'Hardware integration' },
	{ src: 'cadenza/docs/ACCURACY.md', slug: 'developers/accuracy', label: 'Accuracy benchmark' },
	{ src: 'cadenza/docs/LOCAL-MODELS.md', slug: 'developers/local-models', label: 'Local models (developer notes)' },
	{ src: 'cadenza/docs/PLATFORMS.md', slug: 'developers/platforms', label: 'Platforms' },
	{ src: 'cadenza/THIRD_PARTY_NOTICES.md', slug: 'developers/third-party-notices', label: 'Third-party notices' },
	{ src: 'cadenza/THIRD_PARTY_NOTICES.zh-CN.md', slug: 'developers/third-party-notices', label: '第三方声明', zh: true },
	{ src: 'cadenza/PRIVACY.md', slug: 'privacy/notice', label: 'Privacy notice' },
	{ src: 'cadenza/PRIVACY.zh-CN.md', slug: 'privacy/notice', label: '隐私说明', zh: true },
	{ src: 'cadenza/TERMS.md', slug: 'privacy/terms', label: 'Terms of use' },
	{ src: 'cadenza/TERMS.zh-CN.md', slug: 'privacy/terms', label: '使用条款', zh: true },
	{ src: 'CONTRIBUTING.md', slug: 'contribute/contributing', label: 'Contributing guide' },
	{ src: 'cadenza/docs/DEVELOPING.md', slug: 'contribute/developing', label: 'Developing Cadenza' },
	{ src: 'cadenza/docs/RELEASING.md', slug: 'contribute/releasing', label: 'Releasing' },
	{ src: 'SECURITY.md', slug: 'contribute/security', label: 'Security policy' },
	{ src: 'CODE_OF_CONDUCT.md', slug: 'contribute/code-of-conduct', label: 'Code of conduct' },
];

// Where a synced source file lands on the site, for link rewriting. English pages exist for every slug; Chinese originals
// exist only for the privacy documents, and every other /zh-cn/ page falls back to the English text.
const bySource = new Map(pages.map((p) => [p.src, p]));
const siteHref = (slug, zhPage, hash = '') => `${BASE}/${zhPage ? 'zh-cn/' : ''}${slug}/${hash}`;

function rewriteLinks(text, page) {
	return text.replace(/(\]\()([^)\s]+)(\))/g, (whole, open, target, close) => {
		if (/^(https?:|mailto:|#)/.test(target)) return whole;
		const [pathPart, hash] = target.split('#');
		const repoPath = normalize(join(dirname(page.src), pathPart)).replace(/\\/g, '/');
		const hashSuffix = hash ? `#${hash}` : '';
		// The Chinese privacy documents link to each other's Chinese versions; everything else keeps the page's language.
		const zhSource = repoPath.replace(/\.md$/, '.zh-CN.md');
		const hit = (page.zh && bySource.get(zhSource)) || bySource.get(repoPath);
		if (hit) return `${open}${siteHref(hit.slug, !!page.zh, hashSuffix)}${close}`;
		return `${open}${GITHUB}/${isDirectory(repoPath) ? 'tree' : 'blob'}/main/${repoPath}${hashSuffix}${close}`;
	});
}

const notes = {
	en: (src) => `:::note[Source of truth]\nThis page is generated from [\`${src}\`](${GITHUB}/blob/main/${src}) in the application repository. To change it, edit that file.\n:::\n`,
	zh: (src) => `:::note[内容来源]\n本页由应用仓库中的 [\`${src}\`](${GITHUB}/blob/main/${src}) 生成，如需修改请编辑该文件。\n:::\n`,
};

const written = [];
for (const page of pages) {
	const source = readSource(page.src);
	if (source === null) {
		console.error(`missing source at ${ref}: ${page.src}`);
		process.exit(3);
	}
	const lines = source.split('\n');
	const h1 = lines.findIndex((l) => /^# /.test(l));
	if (h1 < 0) {
		console.error(`no title heading in ${page.src}`);
		process.exit(3);
	}
	const title = lines[h1].replace(/^# /, '').trim().replace(/"/g, '\\"');
	const body = rewriteLinks([...lines.slice(0, h1), ...lines.slice(h1 + 1)].join('\n').replace(/^\n+/, ''), page);
	const target = join(out, page.zh ? 'zh-cn' : '', `${page.slug}.md`);
	mkdirSync(dirname(target), { recursive: true });
	const front = [
		'---',
		`title: "${title}"`,
		`sidebar:\n  label: "${page.label}"`,
		`editUrl: ${GITHUB}/edit/main/${page.src}`,
		'---',
		`<!-- GENERATED by scripts/sync-docs.mjs from ${page.src}. Do not edit this copy. -->`,
	];
	writeFileSync(target, `${front.join('\n')}\n\n${(page.zh ? notes.zh : notes.en)(page.src)}\n${body}`);
	written.push(relative(siteRoot, target));
}

let commit = 'unknown';
try {
	commit = git('rev-parse', '--short=12', ref).trim();
} catch {}
writeFileSync(join(siteRoot, 'SYNCED_FROM.txt'), `Technical documents were last synced from the application repository at commit ${commit}.\n`);
console.log(`synced ${written.length} pages from commit ${commit}`);
for (const w of written) console.log(`  ${w}`);
