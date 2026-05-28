// Code checked and cleaned - Ash (6 June)

import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata = {
  title: "Champions of Hope",
  description: "Serious music for not so serious people",
  metadataBase: new URL("https://championsofhope.io"),
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
    description: "Serious music for not so serious people",
    url: "https://championsofhope.io",
    siteName: "Champions of Hope",
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
