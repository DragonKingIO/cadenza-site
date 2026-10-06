// Shared constants for the marketing pages (home, download, about).
export const REPO = 'https://github.com/DragonKingIO/Cadenza-voice';
export const REPO_API = 'https://api.github.com/repos/DragonKingIO/Cadenza-voice';
export const SITE_REPO = 'https://github.com/DragonKingIO/cadenza-site';
export const ORIGIN = 'https://dragonkingio.github.io';

/** Prefixes a site-internal path with the deploy base (for example "/cadenza-site"). */
export function href(path: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

export type Lang = 'en' | 'zh';
/** The Chinese site lives under /zh-cn/, the English one at the root. */
export function localized(lang: Lang, path: string): string {
	return href(lang === 'zh' ? `/zh-cn${path}` : path);
}
