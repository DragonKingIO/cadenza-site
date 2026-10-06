# Cadenza · 随言 website

The website and user documentation for [Cadenza](https://github.com/DragonKingIO/Cadenza-voice), local-first voice input for
macOS. Built with [Astro](https://astro.build) and [Starlight](https://starlight.astro.build), in English (default) and Simplified
Chinese, and published with GitHub Pages at `https://dragonkingio.github.io/cadenza-site/`.

## Develop

Needs Node 22.12 or later.

```sh
npm install
npm run dev        # http://localhost:4321/cadenza-site/
npm run build      # also fails on a broken internal link
```

## How the content is organized

| Where | What |
|---|---|
| `src/content/docs/*.md(x)` | English pages written for this site: home, getting started, download, engines, privacy, contribute… |
| `src/content/docs/zh-cn/` | The Simplified Chinese versions of those pages |
| `src/content/docs/developers/`, `privacy/notice.md`, `privacy/terms.md`, `contribute/*` | **Generated** from the application repository. Do not edit these copies. |

A page that has no `zh-cn` version is shown in Chinese with the English text and a notice.

### Keeping the technical pages in sync

The local API, accuracy benchmark, model notes, platforms, privacy notice, terms and the contributing documents live in the
application repository, which is their single source of truth. Regenerate the copies with:

```sh
npm run sync -- /path/to/Cadenza-voice [git-ref]
```

The documents are read from a git ref of that repository (default `HEAD`), never from its working tree, so unfinished local edits
cannot leak into the site. The script adds the page title, rewrites relative links (to another synced page, or to the file on GitHub) and records the
source commit in `SYNCED_FROM.txt`. Commit the result. To change the text, edit it in the application repository.

## Adding the intro video

Slots are ready on the home page (a commented `VideoEmbed` block at the bottom of `src/content/docs/index.mdx` and of the
`zh-cn` version). Hosting advice, in short: put a short MP4 (about 90 seconds or less, under 20 MB) in `public/video/` and play
it with `src`; link the full-length YouTube or Bilibili version with `href`, as a poster, not an embedded player. Never commit large
videos to Git. The reasoning is in `cadenza/docs/MEDIA.md` of the application repository.

## Naming

The English site says **Cadenza** and the Chinese site says **随言**, never both in one language (see `BRAND.md` in the
application repository). Repository and file names are the exception.

## Contributing

Fixes and improvements are welcome; see the [contributing guide](https://github.com/DragonKingIO/Cadenza-voice/blob/main/CONTRIBUTING.md)
of the application. Please do not add analytics, trackers or third-party scripts to this site: the project promises not to
collect data.

## License

[MIT](LICENSE).
