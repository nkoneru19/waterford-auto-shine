import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";

const service = getServiceBySlug("full-detailing")!;
const otherServices = getOtherServices("full-detailing");

export const metadata: Metadata = {
  title:
    "Full Detail Waterford MI | Interior + Exterior | Waterford Auto Shine",
  description:
    "Complete auto detailing in Waterford Township, MI. Full interior and exterior detail with clay bar, paint correction, and smoke removal. From $325 to $375.",
  alternates: {
    canonical: "https://waterfordautoshine.com/services/full-detailing",
  },
  openGraph: {
    title: "Full Detail Waterford MI | Interior + Exterior | Waterford Auto Shine",
    description:
      "Complete auto detailing in Waterford Township, MI. Full interior and exterior detail with clay bar, paint correction, and smoke removal. From $325 to $375.",
    url: "https://waterfordautoshine.com/services/full-detailing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Complete Auto Detail",
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
    lowPrice: "325",
    highPrice: "375",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfordautoshine.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://waterfordautoshine.com/services" },
    { "@type": "ListItem", position: 3, name: "Complete Detail", item: "https://waterfordautoshine.com/services/full-detailing" },
  ],
};

export default function FullDetailingPage() {
  return (
    <>
      <ServicePageContent service={service} otherServices={otherServices} />
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
