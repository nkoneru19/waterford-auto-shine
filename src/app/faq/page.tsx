import type { Metadata } from "next";
import FAQPageContent from "@/components/sections/FAQPageContent";

export const metadata: Metadata = {
  title:
    "FAQ | Auto Detailing Questions | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Frequently asked questions about auto detailing at Waterford Auto Shine in Waterford Township, MI. Learn about our services, pricing, scheduling, and what to expect.",
  alternates: {
    canonical: "https://waterfordautoshine.com/faq",
  },
  openGraph: {
    title: "FAQ | Auto Detailing Questions | Waterford Auto Shine",
    description:
      "Frequently asked questions about auto detailing at Waterford Auto Shine in Waterford Township, MI.",
    url: "https://waterfordautoshine.com/faq",
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
