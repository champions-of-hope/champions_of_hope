// Metadata-only wrapper for the frozen /refer client page. Adds no markup.
const title = "Refer a Plumber or Apprentice | FieldProof";
const description =
  "Know a Red Seal plumber or apprentice in Metro Vancouver or the Fraser Valley who does good work? Send us their name. We call them first, and it is free to them.";
const shareImage = {
  url: "/og-image.png?v=1",
  width: 1200,
  height: 630,
  alt: "FieldProof by Champions of Hope",
};

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/refer" },
  openGraph: {
    title,
    description,
    url: "/refer",
    siteName: "FieldProof",
    type: "website",
    locale: "en_CA",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage.url],
  },
};

export default function ReferLayout({ children }) {
  return children;
}
