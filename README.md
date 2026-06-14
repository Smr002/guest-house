# Gjirokastër Guest House

A production-ready static website for a boutique guest house in Gjirokastra, Albania. The site is built with Astro, strict TypeScript, Tailwind CSS v3, native Astro i18n routing, typed JSON content, and local optimized assets through `astro:assets`.

## Tech Stack

- Astro with `output: 'static'`
- TypeScript strict mode
- Tailwind CSS v3 with `tailwind.config.ts`
- Google Fonts: Cormorant Garamond and DM Sans
- Astro i18n routes for `en`, `sq`, `es`, `fr`, `it`, and `el`
- Static deployment support for Cloudflare Pages and Vercel

## Local Development

```bash
npm install
npm run dev
```

Useful commands:

```bash
npm run check
npm run build
npm run preview
```

## Content

Edit core property details in `src/data/site.json`.

Edit rooms in `src/data/rooms.json`. Each room includes capacity, price, amenities, image path metadata, and localized room copy for all supported languages.

Edit local highlights in `src/data/experiences.json`. Each item includes a category, travel time, SVG path icon, and localized copy.

Edit gallery captions in `src/data/gallery.json`. Actual optimized images are registered in `src/utils/images.ts`.

## Images

Generated project images live in `src/assets/` and are consumed with Astro's `<Image />` component. Recommended future image sizes:

- Hero: 1920 x 1080 or wider
- Rooms: 1400 x 900
- Gallery: 1400 x 900 or 1600 x 1200

When adding a new image, place it in `src/assets/`, import it in `src/utils/images.ts`, and add it to the appropriate image map. Keep the JSON `images` paths in `src/data/rooms.json` as human-readable CMS-style metadata.

## Translations

English is the source of truth in `src/i18n/en.json`. The `Translations` type is derived from that file in `src/types/translations.ts`.

To update copy:

1. Add or change the key in `src/i18n/en.json`.
2. Apply the same key to `sq.json`, `es.json`, `fr.json`, `it.json`, and `el.json`.
3. Keep interpolation placeholders unchanged, such as `{{count}}`, `{{size}}`, `{{name}}`, and `{{index}}`.

## Add A Language

1. Add the locale code to `SUPPORTED_LOCALES` in `src/types/i18n.ts`.
2. Add a matching entry to `LOCALE_CONFIG`.
3. Add the locale code to `astro.config.ts`.
4. Create `src/i18n/{locale}.json` with the same keys as `en.json`.
5. Run `npm run build` and confirm the new locale directory appears in `dist/`.

## Deployment

Cloudflare Pages dashboard:

```text
Build command: npm run build
Build output: dist
Node version: 20
```

Cloudflare Wrangler:

```bash
npm run build
npx wrangler pages deploy dist
```

The repo includes `wrangler.toml` and `public/_redirects`.

Vercel dashboard:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
```

Vercel CLI:

```bash
npm run build
npx vercel deploy --prebuilt
```

The repo includes `vercel.json` for the root redirect and basic security headers.

## Design Tokens

Colors, typography, spacing, max widths, and shadows are defined in `tailwind.config.ts`.

Primary tokens:

- `mountain-pine`
- `valley-green`
- `old-brass`
- `stone-white`
- `light-stone`
- `worn-stone`

Change brand color values or font families there, then run `npm run build` to verify the generated CSS.
