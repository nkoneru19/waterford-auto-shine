import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Free Auto Detailing Quote | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Get a free, no-obligation auto detailing quote from Waterford Auto Shine in Waterford Township, MI. Tell us about your vehicle and we'll send pricing.",
  alternates: {
    canonical: "https://www.waterfordautoshine.com/quote",
  },
  openGraph: {
    title: "Free Auto Detailing Quote | Waterford Auto Shine",
    description:
      "Get a free, no-obligation auto detailing quote from Waterford Auto Shine in Waterford Township, MI. Tell us about your vehicle and we'll send pricing.",
    url: "https://www.waterfordautoshine.com/quote",
  },
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
