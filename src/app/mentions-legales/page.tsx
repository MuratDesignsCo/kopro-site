import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";

const bodyHtml = fs.readFileSync(
  path.join(process.cwd(), "src/content/mentions-legales-body.html"),
  "utf-8"
);

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales du site KOPRO — Bureau d'étude certifié RGE pour dossiers MaPrimeRénov' et CEE."
};

export default function MentionsLegalesPage() {
  return <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />;
}
