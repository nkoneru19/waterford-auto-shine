import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";
import { getBlogBySlug } from "@/lib/blogData";

const service = getServiceBySlug("exterior-detailing")!;
const otherServices = getOtherServices("exterior-detailing");

export const metadata: Metadata = {
  title:
    "Exterior Detailing Waterford MI | Hand Wash & Wax | Waterford Auto Shine",
  description:
    "Professional exterior auto detailing in Waterford Township, MI. Hand wash, hand wax, tire shine, rim cleaning, and door jamb detail. From $125 to $175.",
  alternates: {
    canonical: "https://waterfordautoshine.com/services/exterior-detailing",
  },
  openGraph: {
    title: "Exterior Detailing Waterford MI | Hand Wash & Wax | Waterford Auto Shine",
    description:
      "Professional exterior auto detailing in Waterford Township, MI. Hand wash, hand wax, tire shine, rim cleaning, and door jamb detail. From $125 to $175.",
    url: "https://waterfordautoshine.com/services/exterior-detailing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Exterior Auto Detailing",
  description: service.description,
  provider: {
    "@type": "AutoRepair",
    name: "Waterford Auto Shine",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3496 Pontiac Lake Rd",
      addressLocality: "Waterford Township",
      addressRegion: "MI",
      postalCode: "48328",
    },
  },
  areaServed: "Waterford Township, MI",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "125",
    highPrice: "175",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfordautoshine.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://waterfordautoshine.com/services" },
    { "@type": "ListItem", position: 3, name: "Exterior Detailing", item: "https://waterfordautoshine.com/services/exterior-detailing" },
  ],
};

const relatedPosts = [
  getBlogBySlug("hand-wash-vs-automatic-car-wash")!,
  getBlogBySlug("how-often-should-you-detail-your-car")!,
];

export default function ExteriorDetailingPage() {
  return (
    <>
      <ServicePageContent service={service} otherServices={otherServices} relatedPosts={relatedPosts} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
