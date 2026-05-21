import type { Metadata, Viewport } from "next";
import { Archivo, Figtree } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { siteConfig } from "@/lib/siteConfig";

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

const BASE_URL = "https://waterfordautoshine.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Waterford Auto Shine | Premium Auto Detailing in Waterford, MI",
  description:
    "Professional hand wash and auto detailing services in Waterford Township, MI. Premium care for cars, trucks, and SUVs. Book your free quote today.",
  openGraph: {
    title: "Waterford Auto Shine | Premium Auto Detailing in Waterford, MI",
    description:
      "Professional hand wash and auto detailing services in Waterford Township, MI. Premium care for cars, trucks, and SUVs.",
    url: BASE_URL,
    siteName: "Waterford Auto Shine",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/gallery-1.jpg`,
        width: 1200,
        height: 630,
        alt: "Waterford Auto Shine - Professional Auto Detailing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterford Auto Shine | Premium Auto Detailing in Waterford, MI",
    description:
      "Professional hand wash and auto detailing services in Waterford Township, MI. Premium care for cars, trucks, and SUVs.",
    images: [`${BASE_URL}/images/gallery-1.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Exterior Detail",
      provider: {
        "@type": "AutoRepair",
        name: siteConfig.name,
      },
      description:
        "Professional hand wash and dry, door jambs, rims and tires, tire shine, and hand wax for a showroom-quality finish.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "75",
        highPrice: "125",
        priceCurrency: "USD",
        offerCount: 3,
      },
      areaServed: {
        "@type": "City",
        name: "Waterford Township, MI",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Interior Detail",
      provider: {
        "@type": "AutoRepair",
        name: siteConfig.name,
      },
      description:
        "Full interior cleaning including vacuum, steam clean seats, leather cleaner and conditioner, carpet shampoo and extraction, headliner, and windows.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "200",
        highPrice: "275",
        priceCurrency: "USD",
        offerCount: 3,
      },
      areaServed: {
        "@type": "City",
        name: "Waterford Township, MI",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Complete Detail",
      provider: {
        "@type": "AutoRepair",
        name: siteConfig.name,
      },
      description:
        "Our most thorough package combining full interior and exterior detail, plus clay bar treatment, sealant application, compound and polish, and smoke removal.",
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "325",
        highPrice: "375",
        priceCurrency: "USD",
        offerCount: 3,
      },
      areaServed: {
        "@type": "City",
        name: "Waterford Township, MI",
      },
    },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    description: siteConfig.description,
    url: BASE_URL,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.6615,
      longitude: -83.3827,
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
      ratingValue: siteConfig.rating.toString(),
      reviewCount: siteConfig.reviewCount.toString(),
      bestRating: "5",
    },
    priceRange: "$125-$375",
    image: `${BASE_URL}/images/gallery-1.jpg`,
    sameAs: [siteConfig.social.facebook],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 42.6615,
        longitude: -83.3827,
      },
      geoRadius: "30000",
    },
  };

  return (
    <html
      lang="en"
      className={`${archivo.variable} ${figtree.variable} h-full`}
    >
      <body className="font-[family-name:var(--font-figtree)] antialiased min-h-full flex flex-col">
        <Header />
        {children}
        <StickyMobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {serviceSchemas.map((schema, i) => (
          <script
            key={`service-schema-${i}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </body>
    </html>
  );
}
