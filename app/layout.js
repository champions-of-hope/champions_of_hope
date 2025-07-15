
// Code checked and cleaned - Ash (6 June)

import "./globals.css";

export const metadata = {
  title: "Champions of Hope",
  description: "Serious music for not so serious people",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
