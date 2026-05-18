import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";

const service = getServiceBySlug("full-detailing")!;
const otherServices = getOtherServices("full-detailing");

export const metadata: Metadata = {
  title:
    "Full Detail Waterford MI | Interior + Exterior | Waterford Auto Shine",
  description:
    "Complete auto detailing in Waterford Township, MI. Full interior and exterior detail with clay bar, paint correction, ceramic sealant, and smoke removal. Starting at $325.",
};

export default function FullDetailingPage() {
  return <ServicePageContent service={service} otherServices={otherServices} />;
}
