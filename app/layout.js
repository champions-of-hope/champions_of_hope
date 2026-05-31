// Code checked and cleaned - Ash (6 June)

import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

const siteUrl = "https://championsofhope.io";
const socialImage = `${siteUrl}/og-image.png?v=1`;

export const metadata = {
  title: "Champions of Hope",
  description: "Live events, local artists, community impact, and FieldProof candidate readiness.",
  metadataBase: new URL(siteUrl),
  manifest: "/manifest.json?v=3",
  themeColor: "#1E1B1B",
  icons: {
    icon: [
      { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/icon-192.png?v=3", type: "image/png", sizes: "192x192" },
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", type: "image/png", sizes: "180x180" },
    ],
  },
  openGraph: {
    title: "Champions of Hope",
    description: "Live events, local artists, community impact, and FieldProof candidate readiness.",
    url: siteUrl,
    siteName: "Champions of Hope",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Champions of Hope gold crown logo and brand preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Champions of Hope",
    description: "Live events, local artists, community impact, and FieldProof candidate readiness.",
    images: [socialImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
