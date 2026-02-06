const BASE =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://siddhsamarth.in";

const URLS: { loc: string; lastmod: string; changefreq: string; priority: string }[] = [
  {
    loc: BASE,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: "1",
  },
];

function buildXml(): string {
  const urlEntries = URLS.map(
    (u) =>
      `  <url><loc>${escapeXml(u.loc)}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>`;
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  return new Response(buildXml(), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
