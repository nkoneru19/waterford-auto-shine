import type { Metadata } from "next";
import ReviewsPageContent from "@/components/sections/ReviewsPageContent";
import { siteConfig } from "@/lib/siteConfig";

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

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: siteConfig.rating.toString(),
    reviewCount: siteConfig.reviewCount.toString(),
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Kaylin Harris" },
      reviewBody:
        "I'm incredibly impressed with this place! My husbands truck was done same day it was brought in. It was pretty nasty from the previous owner & now it looks amazing. The owner is the nicest guy and really hooked us up. Will refer to everyone!",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Michael R." },
      reviewBody:
        "My vehicle looks as though it just rolled out of the showroom. Competitive pricing and outstanding attention to detail.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "David K." },
      reviewBody:
        "Best detailing service in Waterford! They took my truck from road grime to absolutely gleaming. Will definitely be back.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Alex VanKuren" },
      reviewBody:
        "John and his crew went above and beyond. Quality work, making my car look like the day I bought it.",
    },
  ],
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsPageContent />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  );
}
