import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";
import { getBlogBySlug } from "@/lib/blogData";

const service = getServiceBySlug("interior-detailing")!;
const otherServices = getOtherServices("interior-detailing");

export const metadata: Metadata = {
  title:
    "Interior Detailing Waterford MI | Deep Clean & Shampoo | Waterford Auto Shine",
  description:
    "Professional interior car detailing in Waterford Township, MI. Steam cleaning, carpet shampoo, leather conditioning, and headliner cleaning. From $200 to $275.",
  alternates: {
    canonical: "https://waterfordautoshine.com/services/interior-detailing",
  },
  openGraph: {
    title: "Interior Detailing Waterford MI | Deep Clean & Shampoo | Waterford Auto Shine",
    description:
      "Professional interior car detailing in Waterford Township, MI. Steam cleaning, carpet shampoo, leather conditioning, and headliner cleaning. From $200 to $275.",
    url: "https://waterfordautoshine.com/services/interior-detailing",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Interior Auto Detailing",
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
    lowPrice: "200",
    highPrice: "275",
    priceCurrency: "USD",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://waterfordautoshine.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://waterfordautoshine.com/services" },
    { "@type": "ListItem", position: 3, name: "Interior Detailing", item: "https://waterfordautoshine.com/services/interior-detailing" },
  ],
};

const relatedPosts = [
  getBlogBySlug("interior-detailing-what-to-expect")!,
  getBlogBySlug("how-often-should-you-detail-your-car")!,
];

export default function InteriorDetailingPage() {
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
