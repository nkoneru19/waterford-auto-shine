import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";
import { getBlogBySlug } from "@/lib/blogData";

const service = getServiceBySlug("full-detailing")!;
const otherServices = getOtherServices("full-detailing");

export const metadata: Metadata = {
  title:
    "Full Detail Waterford MI | Interior + Exterior | Waterford Auto Shine",
  description:
    "Complete auto detailing in Waterford Township, MI. Full interior and exterior detail with clay bar, paint correction, and smoke removal. From $325 to $375.",
  alternates: {
    canonical: "https://www.waterfordautoshine.com/services/full-detailing",
  },
  openGraph: {
    title: "Full Detail Waterford MI | Interior + Exterior | Waterford Auto Shine",
    description:
      "Complete auto detailing in Waterford Township, MI. Full interior and exterior detail with clay bar, paint correction, and smoke removal. From $325 to $375.",
    url: "https://www.waterfordautoshine.com/services/full-detailing",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.waterfordautoshine.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.waterfordautoshine.com/services" },
    { "@type": "ListItem", position: 3, name: "Complete Detail", item: "https://www.waterfordautoshine.com/services/full-detailing" },
  ],
};

const relatedPosts = [
  getBlogBySlug("michigan-winter-car-care-checklist")!,
  getBlogBySlug("7-signs-your-car-needs-a-detail")!,
  getBlogBySlug("how-often-should-you-detail-your-car")!,
];

export default function FullDetailingPage() {
  return (
    <>
      <ServicePageContent service={service} otherServices={otherServices} relatedPosts={relatedPosts} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
