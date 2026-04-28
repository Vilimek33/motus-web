import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motus Plzeň – Sportovní kempy a kroužky pro děti",
  description: "Všestranné sportovní kempy a kroužky pro děti v Plzni. Léto plné pohybu, přátelství a nezapomenutelných zážitků.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
