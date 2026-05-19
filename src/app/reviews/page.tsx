import type { Metadata } from "next";
import ReviewsPageContent from "@/components/sections/ReviewsPageContent";

export const metadata: Metadata = {
  title:
    "Customer Reviews | Waterford Auto Shine | Waterford Township, MI",
  description:
    "See what our customers are saying about Waterford Auto Shine. 4.8 stars from 45+ Google Reviews. Professional auto detailing in Waterford Township, MI.",
  alternates: {
    canonical: "https://waterfordautoshine.com/reviews",
  },
  openGraph: {
    title: "Customer Reviews | Waterford Auto Shine",
    description:
      "See what our customers are saying about Waterford Auto Shine. 4.8 stars from 45+ Google Reviews. Professional auto detailing in Waterford Township, MI.",
    url: "https://waterfordautoshine.com/reviews",
  },
};

export default function ReviewsPage() {
  return <ReviewsPageContent />;
}
