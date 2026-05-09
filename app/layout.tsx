import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motus Plzeň – Sportovní kempy a kroužky pro děti | Motus z.s.",
  description:
    "Motus Plzeň – všestranné sportovní kempy a kroužky pro děti 6–10 let. Profesionální trenéři, strava, výlety. Léto plné pohybu v Plzni. Přihlaste se!",
  keywords: [
    "Motus",
    "Motus Plzeň",
    "sportovní kempy Plzeň",
    "sportovní kroužky děti",
    "příměstský tábor Plzeň",
  ],
  alternates: { canonical: "https://www.motus-plzen.cz/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Motus Plzeň – Sportovní kempy a kroužky pro děti",
    description: "Všestranné sportovní kempy a kroužky pro děti v Plzni.",
    url: "https://www.motus-plzen.cz/",
    siteName: "Motus Plzeň",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "https://www.motus-plzen.cz/images/hero-photo.jpg" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsOrganization",
  name: "Motus Plzeň",
  alternateName: "Motus",
  legalName: "Motus Plzeň z.s.",
  url: "https://www.motus-plzen.cz",
  logo: "https://www.motus-plzen.cz/images/logo.png",
  image: "https://www.motus-plzen.cz/images/hero-photo.jpg",
  description: "Všestranné sportovní kempy a kroužky pro děti v Plzni.",
  telephone: "+420604420280",
  email: "info@motus-plzen.cz",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Plzeň",
    addressRegion: "Plzeňský kraj",
    addressCountry: "CZ",
  },
  taxID: "24116653",
  sameAs: [
    "https://www.instagram.com/motus_move_more/",
    "https://www.facebook.com/people/Motus-Plze%C5%88/61588373848839/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
