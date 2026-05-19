"use client";

import { Star } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

const featured = {
  quote:
    "I'm incredibly impressed with this place! My husbands truck was done same day it was brought in. It was pretty nasty from the previous owner & now it looks amazing. I was so impressed my poor neglected truck went in the next day and it looks BRAND NEW. Inside and outside detail I was almost speechless. The owner is the nicest guy and really hooked us up. Will refer to everyone!",
  author: "Kaylin Harris",
  date: "Google Review",
};

const reviews = [
  {
    quote:
      "My vehicle looks as though it just rolled out of the showroom. Competitive pricing and outstanding attention to detail.",
    author: "Michael R.",
    date: "2 weeks ago",
  },
  {
    quote:
      "Best detailing service in Waterford! They took my truck from road grime to absolutely gleaming. Will definitely be back.",
    author: "David K.",
    date: "1 month ago",
  },
  {
    quote:
      "Great car wash and very friendly staff. Very eager to make customers happy. I won't go anywhere else.",
    author: "Sarah M.",
    date: "3 weeks ago",
  },
  {
    quote:
      "Had my SUV detailed before a road trip. Interior was spotless, exterior was mirror-finish. The hand wash makes all the difference.",
    author: "Jennifer L.",
    date: "1 month ago",
  },
  {
    quote:
      "Brought my truck in absolutely covered in mud. They brought it back to life. Incredible work and fair prices.",
    author: "Chris T.",
    date: "2 months ago",
  },
  {
    quote:
      "They took my F350 and turned it into a completely different vehicle. Workmanship speaks volumes!",
    author: "Jason H.",
    date: "2 weeks ago",
  },
  {
    quote:
      "Amazing job on the pet hair in my car. It looks brand new. Definitely recommend!",
    author: "Mary B.",
    date: "1 month ago",
  },
  {
    quote:
      "John and his crew went above and beyond. Quality work, making my car look like the day I bought it.",
    author: "Alex VanKuren",
    date: "3 weeks ago",
  },
  {
    quote:
      "Waterford Auto Shine made our used car look like new again. We will definitely be back!",
    author: "James Stanley",
    date: "1 month ago",
  },
  {
    quote:
      "Best detailing in Waterford Township. My car hasn't looked this good since I drove it off the lot.",
    author: "Tom W.",
    date: "2 months ago",
  },
  {
    quote:
      "Fast, affordable, and the results speak for themselves. Five stars all the way.",
    author: "Lisa P.",
    date: "3 weeks ago",
  },
];

function Stars({ size = 18 }: { size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          weight="fill"
          style={{ color: "#facc15" }}
        />
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function ReviewsPageContent() {
  return (
    <>
      <main className="pt-28 sm:pt-32 pb-16 sm:pb-24" style={{ backgroundColor: "var(--color-surface)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <AnimatedSection>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-text-muted)" }}
            >
              Customer Reviews
            </p>
            <h1
              className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight mb-6"
              style={{ lineHeight: "1.15", color: "var(--color-text-primary)" }}
            >
              What Our Customers Say
            </h1>
            <div className="flex items-center gap-3 mb-12">
              <GoogleLogo />
              <span
                className="text-lg font-semibold"
                style={{ color: "var(--color-text-primary)" }}
              >
                {siteConfig.rating} Stars
              </span>
              <span className="text-base" style={{ color: "var(--color-text-muted)" }}>
                from {siteConfig.reviewCount}+ Google Reviews
              </span>
            </div>
          </AnimatedSection>

          {/* Featured Review */}
          <AnimatedSection delay={0.1}>
            <div
              className="rounded-2xl p-8 sm:p-10 mb-12"
              style={{
                backgroundColor: "var(--color-surface-dark)",
              }}
            >
              <Stars size={22} />
              <p
                className="text-xl sm:text-2xl font-[var(--font-heading)] font-medium mt-5"
                style={{ lineHeight: "1.5", color: "var(--color-text-inverse)" }}
              >
                &ldquo;{featured.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-text-inverse)",
                  }}
                >
                  {featured.author.charAt(0)}
                </div>
                <div>
                  <p className="text-base font-semibold" style={{ color: "var(--color-text-inverse)" }}>
                    {featured.author}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {featured.date}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={0.05 * (i % 6)}>
                <div
                  className="rounded-xl p-6 h-full flex flex-col"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Stars size={16} />
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {review.date}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed flex-1 mb-4"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        backgroundColor: "var(--color-accent)",
                        color: "var(--color-text-inverse)",
                      }}
                    >
                      {review.author.charAt(0)}
                    </div>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {review.author}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 text-center">
              <p
                className="text-lg mb-6"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Ready to see the difference for yourself?
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/quote"
                  className="text-sm font-semibold px-8 py-3 rounded-lg transition-transform inline-block"
                  style={{
                    backgroundColor: "var(--color-accent)",
                    color: "var(--color-text-inverse)",
                    transitionDuration: "200ms",
                    transitionTimingFunction: "var(--ease-out-quart)",
                  }}
                >
                  Get a Free Quote
                </Link>
                <a
                  href={siteConfig.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold px-8 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                  style={{
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                    transitionDuration: "200ms",
                  }}
                >
                  <GoogleLogo />
                  Leave Us a Review
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
      <Footer />
    </>
  );
}
