# ShipYard

A fast, resilient, and optimized product-catalog storefront built from scratch with **Next.js + TypeScript**.

- **Public Repository:** [https://github.com/Kaustubh-Negi-01/shipyard](https://github.com/Kaustubh-Negi-01/shipyard)
- **Live Storefront (Catalog):** [https://kaustubh-negi-01.github.io/shipyard/](https://kaustubh-negi-01.github.io/shipyard/)
- **Live Detail Page (Sample):** [https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack/](https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack/)

---

## Performance & Lighthouse Score

The deployed application scores **96/100** on Mobile Performance in Google Lighthouse:

[![Lighthouse Performance Score: 96/100](https://raw.githubusercontent.com/Kaustubh-Negi-01/shipyard/codex/ship-and-deploy/public/lighthouse-score.png)](https://raw.githubusercontent.com/Kaustubh-Negi-01/shipyard/codex/ship-and-deploy/public/lighthouse-score.png)

- **Inspectable Audit Screenshot:** [View Full Screenshot on GitHub](https://raw.githubusercontent.com/Kaustubh-Negi-01/shipyard/codex/ship-and-deploy/public/lighthouse-score.png)
- **Hosted Screenshot on GitHub Pages:** [https://kaustubh-negi-01.github.io/shipyard/lighthouse-score.png](https://kaustubh-negi-01.github.io/shipyard/lighthouse-score.png)

### Key Metrics Breakdown

| Metric | Result | Target | Status |
| --- | --- | --- | --- |
| **Performance Score** | **96 / 100** | 90+ | Passed |
| **First Contentful Paint (FCP)** | **0.8 s** | < 1.8 s | Good (Green) |
| **Largest Contentful Paint (LCP)** | **2.9 s** | < 4.0 s (Mobile) | Good (Green) |
| **Total Blocking Time (TBT)** | **40 ms** | < 200 ms | Good (Green) |
| **Cumulative Layout Shift (CLS)** | **0.000** | < 0.1 | Good (Green) |
| **Speed Index** | **0.8 s** | < 3.4 s | Good (Green) |

---

## Live Deployment Verification

All pages, routes, and assets have been verified live on GitHub Pages:

| Page / Asset | Live URL | HTTP Status | Verification Notes |
| --- | --- | --- | --- |
| **Catalog (Home Page)** | [https://kaustubh-negi-01.github.io/shipyard/](https://kaustubh-negi-01.github.io/shipyard/) | `200 OK` | Renders full 8-product grid, hero image preloaded, zero layout shift. |
| **Detail: Ridge Daypack** | [https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack/](https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack/) | `200 OK` | Dynamic reviews lazy-loaded via `next/dynamic`, specs rendered. |
| **Detail: Field Flask** | [https://kaustubh-negi-01.github.io/shipyard/products/field-flask/](https://kaustubh-negi-01.github.io/shipyard/products/field-flask/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Switchback Shell** | [https://kaustubh-negi-01.github.io/shipyard/products/switchback-shell/](https://kaustubh-negi-01.github.io/shipyard/products/switchback-shell/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Camp Light No. 2** | [https://kaustubh-negi-01.github.io/shipyard/products/camp-light-no-2/](https://kaustubh-negi-01.github.io/shipyard/products/camp-light-no-2/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Alpine Mug** | [https://kaustubh-negi-01.github.io/shipyard/products/alpine-mug/](https://kaustubh-negi-01.github.io/shipyard/products/alpine-mug/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Trail Blanket** | [https://kaustubh-negi-01.github.io/shipyard/products/trail-blanket/](https://kaustubh-negi-01.github.io/shipyard/products/trail-blanket/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Summit Socks** | [https://kaustubh-negi-01.github.io/shipyard/products/summit-socks/](https://kaustubh-negi-01.github.io/shipyard/products/summit-socks/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Detail: Field Glasses** | [https://kaustubh-negi-01.github.io/shipyard/products/coastline-binoculars/](https://kaustubh-negi-01.github.io/shipyard/products/coastline-binoculars/) | `200 OK` | Pre-rendered route via `generateStaticParams`, custom metadata. |
| **Hero Image Asset** | [https://kaustubh-negi-01.github.io/shipyard/hero.webp](https://kaustubh-negi-01.github.io/shipyard/hero.webp) | `200 OK` | 54 KB WebP image served with high priority. |
| **Product Photography** | [https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack.webp](https://kaustubh-negi-01.github.io/shipyard/products/ridge-daypack.webp) | `200 OK` | Compressed WebP format with reserved aspect ratio. |
| **Self-Hosted Font** | `_next/static/media/*.woff2` | `200 OK` | Inter font self-hosted at build time via `next/font/google`. |

---

## Features & Optimizations

- **Image Optimization:** Real product photography converted to WebP and rendered with `next/image` with explicit dimensions and responsive sizes, eliminating layout shift (CLS = 0).
- **Font Optimization:** Zero external network links for fonts; Google Fonts (`Inter`) is self-hosted at build time via `next/font/google`.
- **Dynamic Lazy Loading:** Heavy below-the-fold component (`Reviews`) is code-split into its own bundle on demand with `next/dynamic` and a dedicated accessible loading fallback.
- **Per-Page Metadata:** Static metadata for `/` and dynamic per-product metadata via `generateMetadata` for `/products/[id]`.
- **Resilient States:**
  - `app/loading.tsx`: Clean loading placeholder when streaming.
  - `app/error.tsx`: Client-side error boundary with error recovery retry button (`reset()`).
  - `app/not-found.tsx`: Custom 404 page for unknown product IDs.
- **Static Export & CI/CD:** Static HTML export deployed to GitHub Pages via automated GitHub Actions (`.github/workflows/deploy.yml`).

---

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Build for Production

```bash
npm run build
```

Static export artifacts are generated in the `out/` directory.
