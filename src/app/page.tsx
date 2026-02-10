import fs from "node:fs";
import path from "node:path";
import WfPageId from "../components/WfPageId";

const bodyHtml = fs.readFileSync(
  path.join(process.cwd(), "src/content/index-body.html"),
  "utf-8"
);

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "KOPRO",
  url: siteUrl,
  description:
    "Bureau d'étude certifié RGE pour dossiers MaPrimeRénov' et CEE. KOPRO accompagne particuliers, copropriétés, SCI et artisans partout en France.",
  areaServed: "FR",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7 rue du Haut de Chaumont",
    postalCode: "88500",
    addressLocality: "Mirecourt",
    addressCountry: "FR"
  },
  email: "contact@kopro.fr",
  telephone: "+33 6 85 91 81 72"
};

export default function Page() {
  return (
    <>
      <WfPageId id="693414c0a24bd9a413f912b9" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  );
}
