import type { Metadata } from "next";
import ServicePageContent from "@/components/sections/ServicePageContent";
import { getServiceBySlug, getOtherServices } from "@/lib/serviceData";

const service = getServiceBySlug("interior-detailing")!;
const otherServices = getOtherServices("interior-detailing");

export const metadata: Metadata = {
  title:
    "Interior Detailing Waterford MI | Deep Clean & Shampoo | Waterford Auto Shine",
  description:
    "Professional interior car detailing in Waterford Township, MI. Steam cleaning, carpet shampoo, leather conditioning, and headliner cleaning. Starting at $200.",
};

export default function InteriorDetailingPage() {
  return <ServicePageContent service={service} otherServices={otherServices} />;
}
