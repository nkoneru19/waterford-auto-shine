import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";

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

export default function ExteriorDetailingPage() {
  return (
    <>
      <ServicePageContent service={service} otherServices={otherServices} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
