// Metadata wrapper. The frozen /fieldproof page is a client component and cannot
// export metadata itself, so the search title, description, canonical, share card
// and structured data live here. The only markup added is an invisible JSON-LD
// <script>, placed after the page so it cannot affect layout.

const url = "https://www.championsofhope.io/fieldproof";
// `absolute` skips the "· Champions of Hope" template: the search title leads with
// what a contractor types into Google.
const title = "Plumbing Recruitment Agency in Metro Vancouver | FieldProof";
const description =
  "Licensed BC employment agency placing verified Red Seal plumbers and apprentices in Metro Vancouver and the Fraser Valley. You owe nothing until they start.";
const shareImage = {
  url: "/og-image.png?v=1",
  width: 1200,
  height: 630,
  alt: "FieldProof by Champions of Hope",
};

export const metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/fieldproof" },
  openGraph: {
    title,
    description,
    url: "/fieldproof",
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

// Everything here is already visible on the page (licence number, regions,
// trades). No street address, no phone, no prices.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  "@id": `${url}#agency`,
  name: "FieldProof",
  url,
  logo: "https://www.championsofhope.io/icon-512.png",
  image: "https://www.championsofhope.io/og-image.png?v=1",
  description:
    "FieldProof is a licensed BC employment agency. We verify Red Seal journeypersons and registered apprentices, including their SkilledTradesBC hours, and place them with contractors across Metro Vancouver, the Fraser Valley and Vancouver Island. The contractor meets them and makes the final call.",
  slogan: "Journeypersons and apprentices, checked before you meet them.",
  address: { "@type": "PostalAddress", addressRegion: "BC", addressCountry: "CA" },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Metro Vancouver" },
    { "@type": "AdministrativeArea", name: "Fraser Valley" },
    { "@type": "AdministrativeArea", name: "Vancouver Island" },
  ],
  identifier: {
    "@type": "PropertyValue",
    propertyID: "BC Employment Agency Licence",
    value: "BA-2026-285034",
  },
  knowsAbout: [
    "Red Seal plumbers",
    "Plumbing apprentices",
    "Gas fitting",
    "Mechanical and HVAC trades",
    "SkilledTradesBC apprenticeship hours",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Champions of Hope",
    url: "https://www.championsofhope.io/",
  },
};

export default function FieldProofLayout({ children }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </>
  );
}
