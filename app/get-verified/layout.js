// Metadata-only wrapper for the frozen /get-verified client page. Adds no markup.
// `absolute` skips the "· Champions of Hope" template: the search title leads with
// what a tradesperson types into Google.
const title = "Plumber and Apprentice Jobs in Metro Vancouver | FieldProof";
const description =
  "Red Seal plumber or apprentice? Get verified once and get put in front of contractors hiring across Metro Vancouver and the Fraser Valley. You never pay.";
const shareImage = {
  url: "/og-image.png?v=1",
  width: 1200,
  height: 630,
  alt: "FieldProof by Champions of Hope",
};

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/get-verified" },
  openGraph: {
    title,
    description,
    url: "/get-verified",
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

export default function GetVerifiedLayout({ children }) {
  return children;
}
