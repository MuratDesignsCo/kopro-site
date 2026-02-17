import type { Metadata } from "next";
import "./globals.css";
import SiteScripts from "../components/SiteScripts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "KOPRO — Montage de dossiers MaPrimeRénov' et CEE | Bureau d'étude RGE",
    template: "%s | KOPRO"
  },
  description:
    "Bureau d'étude certifié RGE, KOPRO prend en charge vos dossiers MaPrimeRénov' et CEE de A à Z. Particuliers, copropriétés, SCI et artisans : estimez vos aides et lancez votre projet partout en France.",
  keywords: [
    "KOPRO",
    "MaPrimeRénov",
    "MaPrimeRénov'",
    "CEE",
    "certificats d'économie d'énergie",
    "rénovation énergétique",
    "bureau d'étude RGE",
    "aides rénovation",
    "prime énergie",
    "isolation",
    "pompe à chaleur",
    "dossier ANAH",
    "subventions travaux"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: "KOPRO",
    title:
      "KOPRO — Simplifiez vos démarches MaPrimeRénov' et CEE avec un expert RGE",
    description:
      "Plus de 1 000 dossiers validés. KOPRO monte et dépose vos dossiers MaPrimeRénov' et CEE en toute conformité. Accompagnement complet pour particuliers, copropriétés et artisans.",
    images: [
      {
        url: "/images/Rectangle-2.jpg",
        width: 1200,
        height: 630,
        alt: "KOPRO — Bureau d'étude rénovation énergétique certifié RGE"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title:
      "KOPRO — Simplifiez vos démarches MaPrimeRénov' et CEE avec un expert RGE",
    description:
      "Plus de 1 000 dossiers validés. KOPRO monte et dépose vos dossiers MaPrimeRénov' et CEE en toute conformité. Accompagnement complet pour particuliers, copropriétés et artisans.",
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
    <html lang="fr" data-wf-site="693414c0a24bd9a413f912b8" data-wf-page="693414c0a24bd9a413f912b9" suppressHydrationWarning>
      <body>
        {children}
        <SiteScripts />
      </body>
    </html>
  );
}
