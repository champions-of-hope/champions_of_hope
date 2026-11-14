// Metadata-only wrapper for the frozen /watch gallery client page. Adds no markup.
export const metadata = {
  title: "Gallery",
  description:
    "Photos from Champions of Hope benefit shows in Vancouver: local artists, packed rooms, and the causes we support.",
  alternates: { canonical: "/watch" },
  openGraph: {
    title: "Gallery · Champions of Hope",
    description:
      "Photos from Champions of Hope benefit shows in Vancouver: local artists, packed rooms, and the causes we support.",
    url: "/watch",
    siteName: "Champions of Hope",
    type: "website",
    images: [
      {
        url: "/og-image.png?v=1",
        width: 1200,
        height: 630,
        alt: "Champions of Hope gold crown logo and brand preview",
      },
    ],
  },
};

export default function WatchLayout({ children }) {
  return children;
}
