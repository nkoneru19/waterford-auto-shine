import type { Metadata } from "next";
import ServicesOverview from "@/components/sections/ServicesOverview";

export const metadata: Metadata = {
  title:
    "Auto Detailing Services | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Professional exterior detailing, interior detailing, and full detail packages in Waterford Township, MI. Premium hand wash and auto detailing for cars, trucks, and SUVs.",
};

export default function ServicesPage() {
  return <ServicesOverview />;
}
