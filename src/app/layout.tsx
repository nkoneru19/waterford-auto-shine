import type { Metadata, Viewport } from "next";
import { Archivo, Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { siteConfig } from "@/lib/siteConfig";

const GA_ID = "G-609F8R3ENC";

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
  const serviceProvider = {
    "@type": "AutoRepair",
    name: siteConfig.name,
    url: BASE_URL,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Interior Auto Detailing",
      name: "Interior Detail",
      provider: serviceProvider,
      description:
        "Full interior cleaning including vacuum, plastics and vinyls, steam clean seats, leather cleaner and conditioner, carpet shampoo and extraction, headliner, and windows.",
      offers: [
        {
          "@type": "Offer",
          name: "Interior Detail — Sedan",
          price: "200",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Interior Detail — Midsize + Trucks",
          price: "225",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Interior Detail — Large SUV + Minivan",
          price: "275",
          priceCurrency: "USD",
        },
      ],
      areaServed: {
        "@type": "City",
        name: "Waterford Township, MI",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Exterior Auto Detailing",
      name: "Exterior Detail",
      provider: serviceProvider,
      description:
        "Professional hand wash and dry, door jambs, rims and tires, tire shine, and hand wax for a showroom-quality finish.",
      offers: [
        {
          "@type": "Offer",
          name: "Exterior Detail — Sedan",
          price: "75",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Exterior Detail — Midsize + Trucks",
          price: "100",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Exterior Detail — Large SUV + Minivan",
          price: "125",
          priceCurrency: "USD",
        },
      ],
      areaServed: {
        "@type": "City",
        name: "Waterford Township, MI",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Complete Auto Detailing",
      name: "Complete Detail",
      provider: serviceProvider,
      description:
        "Our most thorough package combining full interior and exterior detail, plus clay bar treatment, sealant application, compound and polish, and smoke removal.",
      offers: [
        {
          "@type": "Offer",
          name: "Complete Detail — Sedan",
          price: "325",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Complete Detail — Midsize",
          price: "350",
          priceCurrency: "USD",
        },
        {
          "@type": "Offer",
          name: "Complete Detail — Large",
          price: "375",
          priceCurrency: "USD",
        },
      ],
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
    priceRange: "$75-$375+",
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-inverse)",
          }}
        >
          Skip to main content
        </a>
        <Header />
        {children}
        <StickyMobileCTA />
        <CookieBanner />

        {/* Google Analytics */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>

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
