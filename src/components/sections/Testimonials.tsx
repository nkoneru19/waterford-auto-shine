"use client";

import { Star } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const featured = {
  quote:
    "My vehicle looks as though it just rolled out of the showroom. Competitive pricing and outstanding attention to detail.",
  author: "Michael R.",
};

const supporting = [
  {
    quote:
      "Best detailing service in Waterford! They took my truck from road grime to absolutely gleaming. Will definitely be back.",
    author: "David K.",
  },
  {
    quote:
      "Great car wash and very friendly staff. Very eager to make customers happy. I won't go anywhere else.",
    author: "Sarah M.",
  },
  {
    quote:
      "Had my SUV detailed before a road trip. Interior was spotless, exterior was mirror-finish. The hand wash makes all the difference.",
    author: "Jennifer L.",
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

        {/* Supporting testimonials — asymmetric 2-col */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-5">
          {/* Left — first testimonial in a card */}
          <AnimatedSection delay={0.2}>
            <div
              className="rounded-2xl p-8"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <Stars size={16} />
              <p
                className="text-lg mt-5 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                &ldquo;{supporting[0].quote}&rdquo;
              </p>
              <p className="mt-5 text-sm" style={{ color: "var(--color-text-muted)" }}>
                &mdash; {supporting[0].author}
              </p>
            </div>
          </AnimatedSection>

          {/* Right — stacked pair */}
          <div className="flex flex-col gap-5">
            {supporting.slice(1).map((t, i) => (
              <AnimatedSection key={i} delay={0.3 + i * 0.1}>
                <div
                  className="rounded-2xl p-8"
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
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
