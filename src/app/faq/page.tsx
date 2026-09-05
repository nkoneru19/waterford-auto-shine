import type { Metadata } from "next";
import FAQPageContent from "@/components/sections/FAQPageContent";

export const metadata: Metadata = {
  title:
    "FAQ | Auto Detailing Questions | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Answers to common questions about auto detailing at Waterford Auto Shine in Waterford Township, MI: services, pricing, timing, and what to expect.",
  alternates: {
    canonical: "https://www.waterfordautoshine.com/faq",
  },
  openGraph: {
    title: "FAQ | Auto Detailing Questions | Waterford Auto Shine",
    description:
      "Frequently asked questions about auto detailing at Waterford Auto Shine in Waterford Township, MI.",
    url: "https://www.waterfordautoshine.com/faq",
  },
};

export default function FAQPage() {
  return <FAQPageContent />;
}
