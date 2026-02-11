import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

const bodyHtml = fs.readFileSync(
  path.join(process.cwd(), "src/content/politique-de-confidentialite-body.html"),
  "utf-8"
);

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site KOPRO — Protection de vos données personnelles conformément au RGPD."
};

export default function PolitiqueDeConfidentialitePage() {
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
