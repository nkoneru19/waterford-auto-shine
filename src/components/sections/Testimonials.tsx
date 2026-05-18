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
      "Jon and his team did a fantastic job! They took my F350 and turned it into a completely different vehicle. They knocked it out of the park! Their workmanship speaks volumes and Jon's keen sense for little details as well as total customer satisfaction is first class.",
    author: "Jason H.",
  },
  {
    quote:
      "Shout out to Waterford Auto Shine on Pontiac Lake Rd at Cass Lk Rd. These guys did an amazing job on the pet hair in my car. It looks brand new. My big Bear had the back seat of my car caked with hair and dirt from the park. They got it all. Definitely recommend!",
    author: "Mary B.",
  },
  {
    quote:
      "The customer service and professionalism are amazing. I came in with a smoothie explosion in the car, and it got on the headliner. John and his crew went above and beyond and managed to get it all out with ease. The team does excellent and quality work, making my car look like the day I bought it.",
    author: "Alex VanKuren",
  },
  {
    quote:
      "We bought a used car directly from the owner and Waterford Auto Shine made it look like new again. They went above and beyond what I expected. We will definitely be back with our other vehicles.",
    author: "James Stanley",
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

        {/* Continuous scrolling carousel */}
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

          <div className="flex gap-5 animate-scroll-left hover:[animation-play-state:paused]">
            {[...supporting, ...supporting].map((t, i) => (
              <div
                key={i}
                className="shrink-0 w-[340px] sm:w-[380px] rounded-2xl p-8"
                style={{
                  backgroundColor: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Stars size={16} />
                <p
                  className="text-base mt-4 leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.75)" }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="mt-4 text-sm" style={{ color: "var(--color-text-muted)" }}>
                  &mdash; {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
