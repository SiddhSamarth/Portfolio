# SEO Guardian – Monitored Files & Rules

This project is maintained as **SEO Guardian** compliant. Ask for **"SEO status"** or **"check SEO"** to run a full audit.

---

## Files under audit

| File | Purpose |
|------|--------|
| `src/app/sitemap.xml/route.ts` | Only sitemap generator; returns raw XML via Route Handler (no layout = no `<script/>`). |
| `src/app/robots.ts` | Only robots generator; must return `MetadataRoute.Robots` only. |
| `src/app/layout.tsx` | Metadata, OG, Twitter, canonical, Google verification. No `<script/>` in layout. |
| `src/app/page.tsx` | Home page; holds JSON-LD Person schema (not in layout). |
| `public/` | Must NOT contain `sitemap.xml` (would override the route handler). |
| `vercel.json` | Must NOT rewrite or override `/sitemap.xml` or `/robots.txt`. |

---

## Conflicting files (must not exist)

- `public/sitemap.xml`
- `src/pages/sitemap.xml.js`
- `src/app/sitemap/route.ts` (different path; we use `sitemap.xml/route.ts`)
- Any other file that generates sitemap besides `src/app/sitemap.xml/route.ts`
- `src/app/sitemap.ts` (removed; would conflict and can inject `<script/>` via layout)

---

## Valid output

- **/sitemap.xml** → Clean XML: `<urlset>` → `<url>` → `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>`. No `<script/>`, no HTML.
- **/robots.txt** → Plain text: `User-agent: *`, `Allow: /`, `Sitemap: https://siddhsamarth.in/sitemap.xml`.

---

## When adding new routes

- Add new URLs to the `URLS` array in `src/app/sitemap.xml/route.ts` (loc, lastmod, changefreq, priority).
- Set `alternates.canonical` (or per-page canonical) for new pages in their layout or metadata.
