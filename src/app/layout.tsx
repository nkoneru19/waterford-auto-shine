import type { Metadata } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Waterford Auto Shine | Premium Auto Detailing in Waterford, MI",
  description:
    "Professional hand wash and auto detailing services in Waterford Township, MI. Premium care for cars, trucks, and SUVs. Book your free quote today.",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoBodyShop",
  name: "Waterford Auto Shine",
  description:
    "Professional hand wash and auto detailing services in Waterford Township, MI.",
  url: "https://waterfordautoshine.com",
  telephone: "+1-248-618-8999",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3496 Pontiac Lake Rd",
    addressLocality: "Waterford Township",
    addressRegion: "MI",
    postalCode: "48328",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 42.6614,
    longitude: -83.3826,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "45",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${figtree.variable} h-full`}
    >
      <body className="font-[family-name:var(--font-figtree)] antialiased min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        {children}
        <StickyMobileCTA />
      </body>
    </html>
  );
}
