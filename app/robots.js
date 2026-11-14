// Must match the host Vercel serves (www). The bare domain 308-redirects to it.
const siteUrl = "https://www.championsofhope.io";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
