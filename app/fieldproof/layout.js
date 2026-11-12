// Metadata-only wrapper. The frozen /fieldproof page is a client component and
// cannot export metadata itself, so the per-page title and description live here.
// This layout adds no markup.
export const metadata = {
  title: "FieldProof: verified trades hiring",
  description:
    "FieldProof is a licensed BC employment agency. We verify ticketed journeypersons and place them with open-shop contractors across Metro Vancouver, the Fraser Valley and Vancouver Island.",
};

export default function FieldProofLayout({ children }) {
  return children;
}
