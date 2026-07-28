const siteUrl = "https://championsofhope.io";

// Public, indexable routes only. Deleted/unpublished routes (/band, /team,
// /about) are intentionally absent.
const routes = [
  { path: "", priority: 1 },
  { path: "/fieldproof", priority: 0.9 },
  { path: "/get-verified", priority: 0.8 },
  { path: "/refer", priority: 0.7 },
  { path: "/watch", priority: 0.6 },
];

export default function sitemap() {
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
