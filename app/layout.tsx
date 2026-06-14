import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-montserrat",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://marevivo.it";
const title = "Mare Vivo | Fresh Seafood. Mediterranean Soul.";
const description =
  "A premium coastal seafood restaurant in the heart of Italy. Fresh catch, minimalist elegance, and Mediterranean warmth.";
const ogImage =
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&h=630&auto=format&fit=crop";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    url: siteUrl,
    title,
    description,
    siteName: "Mare Vivo",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mare Vivo – coastal seafood restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Mare Vivo",
  description: "Fresh seafood restaurant on the Adriatic coast",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Via della Marina 18",
    addressLocality: "Bari",
    postalCode: "70122",
    addressCountry: "IT",
  },
  servesCuisine: ["Seafood", "Italian", "Mediterranean"],
  priceRange: "€€",
  openingHours: ["Tu-Su 12:00-15:00", "Tu-Su 19:00-23:00"],
  telephone: "+39-000-000-0000",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="bg-sand text-heading">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
