# Shipyard

A small product catalog storefront built with Next.js and TypeScript. The home page renders a responsive grid from typed product data, and each item has a statically generated detail page.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

Product data and the `getProduct` helper live in `app/data/products.ts`. Product detail pages use `app/products/[id]/page.tsx`, `generateStaticParams`, and Next.js `notFound()` for unknown ids.
