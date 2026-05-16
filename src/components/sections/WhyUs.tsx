"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const reasons = [
  {
    number: "01",
    title: "Hand Wash Only",
    description:
      "No automated brushes or harsh equipment. Every vehicle washed by hand to prevent swirl marks.",
  },
  {
    number: "02",
    title: "Locally Owned",
    description:
      "Proudly local. We treat every customer like a neighbor because you are one.",
  },
  {
    number: "03",
    title: "Premium Products",
    description:
      "Professional-grade detailing products that protect your paint for months, not days.",
  },
  {
    number: "04",
    title: "Satisfaction Guaranteed",
    description:
      "Not thrilled with the results? We make it right — no questions asked.",
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-[var(--color-surface)] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* Left side — numbered list (3 cols) */}
          <div className="lg:col-span-3">
            <AnimatedSection>
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
                Why Us
              </p>
              <h2 className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold text-[var(--color-text-primary)] mb-12">
                Hand Wash Only. Always.
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <AnimatedSection key={reason.number} delay={i * 0.1}>
                  <div className="flex items-start gap-4">
                    <span className="font-[var(--font-heading)] text-3xl font-bold text-[var(--color-accent)] leading-none pt-0.5 select-none">
                      {reason.number}
                    </span>
                    <div>
                      <h3 className="font-[var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)] mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-[var(--color-text-secondary)] max-w-[50ch]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Right side — testimonial (2 cols) */}
          <AnimatedSection
            variant="slideFromRight"
            delay={0.2}
            className="lg:col-span-2 lg:mt-20"
          >
            <div className="rounded-2xl bg-[var(--color-surface-secondary)] p-8 md:p-10">
              {/* Decorative opening quote */}
              <span
                className="block font-heading text-6xl leading-none text-[var(--color-accent)] select-none mb-4"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="text-lg font-medium italic text-[var(--color-text-primary)] leading-relaxed mb-6">
                My vehicle looks as though it just rolled out of the showroom.
                I won&apos;t take my car anywhere else.
              </blockquote>

              {/* Attribution */}
              <div>
                <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                  Verified Customer
                </p>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Waterford, MI
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
