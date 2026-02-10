# KOPRO Next.js

## Setup

1. Install dependencies:

```bash
npm install
```

2. Run the dev server:

```bash
npm run dev
```

## Tailwind

Les styles Webflow ont été importés dans `src/app/globals.css` sous forme de couches Tailwind (`@layer base` et `@layer components`). Les assets restent dans `public/images`.

## SEO configuration

Set your production URL so canonical, sitemap, and Open Graph URLs are correct:

```
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```
