// Must match the host Vercel serves (www). Listing the bare domain gives Google
// a sitemap full of redirects ("Page with redirect" in Search Console).
const siteUrl = "https://www.championsofhope.io";

// Public, indexable routes only. Deleted/unpublished routes (/band, /team,
// /about) are intentionally absent. Bump `updated` when a page's copy changes.
const routes = [
  { path: "", priority: 1 },
  { path: "/fieldproof", priority: 0.9, updated: "2026-11-14" },
  { path: "/get-verified", priority: 0.8, updated: "2026-11-14" },
  { path: "/refer", priority: 0.7, updated: "2026-11-14" },
  { path: "/watch", priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority, updated }) => ({
    url: `${siteUrl}${path}`,
    ...(updated ? { lastModified: updated } : {}),
    changeFrequency: "monthly",
    priority,
  }));
}
