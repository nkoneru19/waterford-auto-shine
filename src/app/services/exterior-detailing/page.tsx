import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";

const service = getServiceBySlug("exterior-detailing")!;
const otherServices = getOtherServices("exterior-detailing");

export const metadata: Metadata = {
  title:
    "Exterior Detailing Waterford MI | Hand Wash & Wax | Waterford Auto Shine",
  description:
    "Professional exterior auto detailing in Waterford Township, MI. Hand wash, hand wax, tire shine, rim cleaning, and door jamb detail. Premium products on every vehicle.",
};

export default function ExteriorDetailingPage() {
  return <ServicePageContent service={service} otherServices={otherServices} />;
}
