# PlayMAKER organization site

Static Astro website for the PlayMAKER organization at `https://playmaker-apps.github.io/`. This repository is the organization website, separate from WebMAKER, the club website product.

## Run locally

Requires Node.js 22.23.4 or later.

```bash
npm ci
npm run dev
npm run build
npm test
npm run preview
```

`npm run build` runs Astro's TypeScript/content checks and writes a static site to `dist/`. `npm test` checks local links and referenced assets in the generated site.

## Edit content

- `src/data/site.ts`: organization URL, product descriptions, status, web app, repository, documentation, release links, version history, roadmap and showcase URL. Keep unavailable installer links `null` and update statuses only when a release is real. Add one `versions` entry per published version; set `downloadUrl`, `msiUrl` and `checksumUrl` only to verified permanent GitHub Release assets.
- `src/pages/`: page copy and guides.
- `src/components/*Tutorial.astro`: keep two clearly named paths on every product page: **For users** (installation status and everyday use) and **For contributors & developers** (repository, clone/fork workflow, project data contracts and contribution checks). Do not send a nontechnical visitor through Git commands as the only installation path.
- `src/styles/global.css`: layout and visual system.
- Product accents are scoped by `accent-webmaker`, `accent-tagmaker`, `accent-postmaker` and `accent-videomaker`. Their base colors come from the artwork (dark blue `#204a9a`, green `#0a721e`, purple `#6d28d9`, orange `#f84c01`); lighter companion colors are used for readable text and controls on the black background. PlayMAKER chrome stays blue `#2690e5`.
- `public/images/`: artwork sourced from the organization profile. Product images are resized WebP derivatives. Replace or supplement with approved screenshots when available, with credit and meaningful alt text.

For a new roadmap step, add an entry to the `roadmap` array in `src/data/site.ts`. Do not add release dates until they are committed to publicly.

## Deploy with GitHub Pages

1. Keep the repository named `PlayMAKER-apps.github.io` under the `PlayMAKER-apps` organization. The Astro `site` setting is the organization root URL, without a project-site base path.
2. In repository **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.
3. Ensure Actions can run in the repository and GitHub Pages is enabled for the organization.
4. Merge to `main`. The workflow installs locked dependencies, checks and builds, uploads `dist/`, and deploys only from `main`. Pull requests check and build without deployment.
5. Verify `/`, `/products/`, `/docs/`, `/sitemap.xml` and `/robots.txt` on the published site, plus mobile navigation and external links.

No deployment is performed by local build commands.

## Content and media limits

WebMAKER 0.2.0 is a stable public release in the [WebMAKER repository](https://github.com/PlayMAKER-apps/webmaker) with unsigned Windows EXE and MSI installers and a guided Create Club workflow. The illustrated guide uses English SVG diagrams and fictional Aurora Sport Club data. [PostMAKER 0.3.0](https://github.com/PlayMAKER-apps/postmaker/releases/tag/v0.3.0) is available as an offline-first PWA and an unsigned Windows desktop app; the site uses its official logo and a real PWA screenshot with an empty local project list. Nerone Basket Anzio remains the linked WebMAKER pilot and its club media are not reproduced. TagMAKER 0.1 alpha source and tutorial are public, but its Windows installer is pending. VideoMAKER has no application release. Individual repository licenses govern code reuse; this website does not grant rights to club media or product artwork. All PlayMAKER public documentation and interface text must be written in English.

## Demo media checklist

- On each product detail page, place a short, muted demo after the overview when real footage of that product exists. WebMAKER could show Studio creating and publishing a fictional club; TagMAKER could show a synthetic match tagging session; PostMAKER could show a fictional Brand Kit and graphic export; VideoMAKER should wait for a working build.
- Keep the TagMAKER tutorial's real screenshots. Add real WebMAKER Studio screenshots beside the illustrated guide only after capturing a synthetic club project. Use a still poster for any video and a short text description or captions for the action shown.
- Obtain permission for identifiable people, clubs and footage; use synthetic names and statistics in public examples. Record the source and permission with each asset. Export compact WebP screenshots and an MP4/WebM demo with no autoplay audio.
- Check the asset at 320, 390, 768 and 1440 px, including keyboard controls and reduced-motion behavior, before adding it to the page.

Before public launch, verify the PlayMAKER name, handle and brand rights, review organization policy and add any project-specific contribution and conduct links that are actually available.
