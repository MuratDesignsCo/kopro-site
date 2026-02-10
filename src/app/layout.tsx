import type { Metadata } from "next";
import "./globals.css";
import SiteScripts from "../components/SiteScripts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "KOPRO | Dossiers MaPrimeRénov' et CEE",
    template: "%s | KOPRO"
  },
  description:
    "Bureau d'étude certifié RGE pour dossiers MaPrimeRénov' et CEE. KOPRO accompagne particuliers, copropriétés, SCI et artisans partout en France.",
  keywords: [
    "KOPRO",
    "MaPrimeRénov",
    "CEE",
    "rénovation énergétique",
    "bureau d'étude",
    "RGE",
    "aides travaux",
    "subventions"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "KOPRO",
    title: "KOPRO | Dossiers MaPrimeRénov' et CEE",
    description:
      "KOPRO simplifie le montage de vos dossiers MaPrimeRénov' et CEE avec un accompagnement RGE, partout en France.",
    images: [
      {
        url: "/images/Rectangle-2.jpg"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "KOPRO | Dossiers MaPrimeRénov' et CEE",
    description:
      "KOPRO simplifie le montage de vos dossiers MaPrimeRénov' et CEE avec un accompagnement RGE, partout en France.",
    images: ["/images/Rectangle-2.jpg"]
  },
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/webclip.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" data-wf-site="693414c0a24bd9a413f912b8" data-wf-page="693414c0a24bd9a413f912b9">
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
