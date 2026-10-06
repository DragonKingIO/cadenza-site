import { REPO_API } from '../site';

export interface Release {
	tag: string;
	version: string;
	published: string;
	pageUrl: string;
	notes: string[];
	zip?: { name: string; url: string; size: number };
	checksumsUrl?: string;
}

/**
 * The latest published GitHub release, read once at build time. A visitor's browser makes no request to GitHub: the page is
 * static, and the daily rebuild keeps it current. Returns null when there is no release yet or GitHub cannot be reached,
 * so the build never fails because of it. Drafts and pre-releases are ignored, matching the in-app update check.
 */
export async function latestRelease(): Promise<Release | null> {
	try {
		const response = await fetch(`${REPO_API}/releases/latest`, { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'cadenza-site-build' } });
		if (!response.ok) return null;
		const data = (await response.json()) as Record<string, any>;
		if (data.draft || data.prerelease || typeof data.tag_name !== 'string') return null;
		const pageUrl = String(data.html_url ?? '');
		if (!/^https:\/\/github\.com\//.test(pageUrl)) return null;
		const assets: any[] = Array.isArray(data.assets) ? data.assets : [];
		const zip = assets.find((a) => /macos.*\.zip$/i.test(a?.name ?? ''));
		const checksums = assets.find((a) => a?.name === 'SHA256SUMS.txt');
		const notes = String(data.body ?? '')
			.split('\n')
			.map((line) => line.replace(/^\s*[-*]\s+/, '').trim())
			.filter((line) => line && !line.startsWith('#') && !line.startsWith('```') && line.length < 400)
			.slice(0, 14);
		return {
			tag: data.tag_name,
			version: data.tag_name.replace(/^v/i, ''),
			published: String(data.published_at ?? '').slice(0, 10),
			pageUrl,
			notes,
			zip: zip && /^https:\/\/github\.com\//.test(zip.browser_download_url) ? { name: zip.name, url: zip.browser_download_url, size: Number(zip.size) || 0 } : undefined,
			checksumsUrl: checksums?.browser_download_url,
		};
	} catch {
		return null;
	}
}
