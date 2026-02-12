import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lucky-parcel.vercel.app'),
  title: "Lucky Parcel | Jouw geluksmomentje wacht 🍀",
  description: "Ontdek verrassende producten voor bodemprijzen! Lucky Parcel verkoopt geretourneerde producten op markten door heel Nederland. Elke aankoop is een verrassing.",
  keywords: ["lucky parcel", "markt", "retourproducten", "koopjes", "verrassing", "mystery box"],
  openGraph: {
    title: "Lucky Parcel | Jouw geluksmomentje wacht 🍀",
    description: "Ontdek verrassende producten voor bodemprijzen op de markt!",
    type: "website",
    locale: "nl_NL",
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lucky Parcel',
  description: 'Geretourneerde producten verkocht op markten voor bodemprijzen',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NL',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={nunito.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body text-clover-950 antialiased">{children}</body>
    </html>
  );
}
