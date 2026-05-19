"use client";

import { Star } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const featured = {
  quote:
    "I'm incredibly impressed with this place! My husbands truck was done same day it was brought in. It was pretty nasty from the previous owner & now it looks amazing. I was so impressed my poor neglected truck went in the next day and it looks BRAND NEW. Inside and outside detail I was almost speechless. The owner is the nicest guy and really hooked us up. Will refer to everyone!",
  author: "Kaylin Harris",
};

const supporting = [
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

function Stars({ size = 20 }: { size?: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={size}
          weight="fill"
          style={{ color: "var(--color-accent)" }}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {

  return (
    <section
      id="reviews"
      className="py-16 sm:py-24 overflow-hidden aurora-glow grid-texture"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <AnimatedSection>
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight mb-16"
            style={{ lineHeight: "1.15", color: "var(--color-text-inverse)" }}
          >
            What People Say
          </h2>
        </AnimatedSection>

        {/* Featured testimonial */}
        <AnimatedSection delay={0.1}>
          <div className="mb-16">
            <Stars size={20} />
            <p
              className="text-2xl md:text-3xl font-[var(--font-heading)] font-medium mt-5"
              style={{ lineHeight: "1.4", color: "var(--color-text-inverse)" }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>
            <p className="mt-5 text-base" style={{ color: "var(--color-text-muted)" }}>
              &mdash; {featured.author}
            </p>
          </div>
        </AnimatedSection>

        {/* Condensed Google-style scrolling carousel */}
        <div className="flex items-center gap-3 mb-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-sm font-semibold" style={{ color: "var(--color-text-inverse)" }}>
            4.8 Stars
          </span>
          <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            from 45+ Google Reviews
          </span>
        </div>
        <div className="relative overflow-hidden -mx-4 sm:-mx-6 lg:-mx-8">
          {/* Fade edges */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 z-10"
            style={{
              background:
                "linear-gradient(to right, var(--color-surface-dark), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 z-10"
            style={{
              background:
                "linear-gradient(to left, var(--color-surface-dark), transparent)",
            }}
          />

          <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused]" style={{ animationDuration: "45s" }}>
            {[0, 1].map((copy) =>
              supporting.map((t, i) => (
                <div
                  key={`${copy}-${i}`}
                  className="shrink-0 w-[280px] sm:w-[300px] rounded-xl p-5 mx-2"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Stars size={14} />
                    <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {t.date}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-3"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-inverse)" }}>
                    {t.author}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
