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

- `src/data/site.ts`: organization URL, product descriptions, status, repository/documentation/release links, roadmap and showcase URL. Keep unavailable links `null` and update statuses only when a release is real.
- `src/pages/`: page copy and guides.
- `src/styles/global.css`: layout and visual system.
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

The WebMAKER link is pilot code, not a standalone release. TagMAKER and VideoMAKER have no public release links configured. Nerone Basket Anzio is identified in the PlayMAKER organization profile as a pilot; a public site URL and approved screenshot are not configured. Add those only after verification and permission to use the media. Individual repository licenses govern code reuse; this website does not grant rights to club media or product artwork.

Before public launch, verify the PlayMAKER name, handle and brand rights, review organization policy and add any project-specific contribution and conduct links that are actually available.
