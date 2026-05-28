// Code checked and cleaned - Ash (6 June)

import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

export const metadata = {
  title: "Champions of Hope",
  description: "Serious music for not so serious people",
  metadataBase: new URL("https://championsofhope.io"),
  manifest: "/manifest.json?v=2",
  themeColor: "#1E1B1B",
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg?v=2", type: "image/svg+xml", sizes: "180x180" },
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
