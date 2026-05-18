"use client";

import { Star } from "@phosphor-icons/react";

const reviews = [
  {
    author: "Michael R.",
    text: "My vehicle looks as though it just rolled out of the showroom. Competitive pricing and outstanding attention to detail.",
    date: "2 weeks ago",
  },
  {
    author: "David K.",
    text: "Best detailing service in Waterford! They took my truck from road grime to absolutely gleaming. Will definitely be back.",
    date: "1 month ago",
  },
  {
    author: "Sarah M.",
    text: "Great car wash and very friendly staff. Very eager to make customers happy. I won't go anywhere else.",
    date: "3 weeks ago",
  },
  {
    author: "Jennifer L.",
    text: "Had my SUV detailed before a road trip. Interior was spotless, exterior was mirror-finish. The hand wash makes all the difference.",
    date: "1 month ago",
  },
  {
    author: "Chris T.",
    text: "Brought my truck in absolutely covered in mud. They brought it back to life. Incredible work and fair prices.",
    date: "2 months ago",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} weight="fill" style={{ color: "#facc15" }} />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section
      className="py-8 sm:py-12 overflow-hidden"
      style={{ backgroundColor: "var(--color-surface)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span
            className="text-sm font-semibold"
            style={{ color: "var(--color-text-primary)" }}
          >
            4.8 Stars
          </span>
          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            from 45+ Google Reviews
          </span>
        </div>
      </div>

      {/* Seamless infinite scroll — two copies side by side */}
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10"
          style={{
            background: "linear-gradient(to right, var(--color-surface), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10"
          style={{
            background: "linear-gradient(to left, var(--color-surface), transparent)",
          }}
        />

        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]" style={{ animationDuration: "50s" }}>
          {[0, 1].map((copy) =>
            reviews.map((review, i) => (
              <div
                key={`${copy}-${i}`}
                className="shrink-0 w-[300px] sm:w-[320px] rounded-xl p-5 mx-2"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <Stars />
                  <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    {review.date}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed mb-3"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {review.author}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
