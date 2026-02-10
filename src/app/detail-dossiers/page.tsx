import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import WfPageId from "../../components/WfPageId";

const bodyHtml = fs.readFileSync(
  path.join(process.cwd(), "src/content/detail-body.html"),
  "utf-8"
);

export const metadata: Metadata = {
  title: "Détail dossier"
};

export default function DetailDossiersPage() {
  const content = bodyHtml.trim();

  return (
    <>
      <WfPageId id="69345dca35f6e590fffd95ab" />
      {content ? (
        <div dangerouslySetInnerHTML={{ __html: content }} />
      ) : (
        <div className="page-wrapper" />
      )}
    </>
  );
}
