# SEO Guardian – Monitored Files & Rules

This project is maintained as **SEO Guardian** compliant. Ask for **"SEO status"** or **"check SEO"** to run a full audit.

---

## Files under audit

| File | Purpose |
|------|--------|
| `src/app/sitemap.ts` | Only sitemap generator; must return `MetadataRoute.Sitemap` only. |
| `src/app/robots.ts` | Only robots generator; must return `MetadataRoute.Robots` only. |
| `src/app/layout.tsx` | Metadata, OG, Twitter, canonical, Google verification. No `<script/>` in layout. |
| `src/app/page.tsx` | Home page; holds JSON-LD Person schema (not in layout). |
| `public/` | Must NOT contain `sitemap.xml` (conflict with app/sitemap.ts). |
| `vercel.json` | Must NOT rewrite or override `/sitemap.xml` or `/robots.txt`. |

---

## Conflicting files (must not exist)

- `public/sitemap.xml`
- `src/pages/sitemap.xml.js`
- `src/app/sitemap/route.ts`
- `src/app/**/sitemap.xml.ts`
- Any route or metadata that generates sitemap besides `src/app/sitemap.ts`

---

## Valid output

- **/sitemap.xml** → Clean XML: `<urlset>` → `<url>` → `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`. No `<script/>`, no HTML.
- **/robots.txt** → Plain text: `User-agent: *`, `Allow: /`, `Sitemap: https://siddhsamarth.in/sitemap.xml`.

---

## When adding new routes

- Add new URLs to `src/app/sitemap.ts` with `url`, `lastModified`, `changeFrequency`, `priority`.
- Set `alternates.canonical` (or per-page canonical) for new pages in their layout or metadata.
