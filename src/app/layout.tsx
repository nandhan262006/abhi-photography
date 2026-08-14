import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Great_Vibes,
  Inter,
} from "next/font/google";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhiphotography.in"),
    title: "ABHI PHOTOGRAPHY | Khammam's Professional Photography Studio",
  description:
    "ABHI PHOTOGRAPHY — Professional photography studio in Khammam, Telangana, capturing weddings, portraits, pre-weddings, events, and timeless moments with creativity and emotion.",
  keywords: [
    "photography studio in Khammam",
    "wedding photographer Khammam",
    "pre wedding shoot Khammam",
    "maternity photography Khammam",
    "baby photography Khammam",
    "kids photography Khammam",
    "portrait photographer Telangana",
    "Abhi Photography",
  ],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
  title: "ABHI PHOTOGRAPHY | Khammam's Professional Photography Studio",
    description:
      "ABHI PHOTOGRAPHY — Professional photography studio in Khammam, Telangana, capturing weddings, portraits, pre-weddings, events, and timeless moments with creativity and emotion.",
    type: "website",
    locale: "en_IN",
    siteName: "Abhi Photography",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Khammam",
    "geo.position": "17.2514512;80.1407057",
    "ICBM": "17.2514512, 80.1407057",
  },
};

const LOCAL_BUSINESS_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Abhi Photography",
  description:
    "Khammam's most trusted photography studio. Wedding, pre-wedding, maternity, kids, baby and portrait photography.",
  url: "https://abhiphotography.in",
  image: "/logo.png",
  telephone: "+918125783426",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "1st Floor, Old Club Rd, opposite Vinoda Theatre, Lenin Nagar, Braman Bazar, Balaji Nagar",
    addressLocality: "Khammam",
    addressRegion: "Telangana",
    postalCode: "507001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.2514512,
    longitude: 80.1407057,
  },
  openingHours: "Mo-Su 10:00-20:00",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "215",
  },
  sameAs: ["https://instagram.com"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${greatVibes.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_JSON_LD) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
