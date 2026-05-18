"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const tiers = [
  {
    name: "Exterior Detail",
    price: "$75 – $125",
    description: "Hand wash & dry, door jambs, rims & tires, tire shine, hand wax",
    popular: false,
  },
  {
    name: "Complete Detail",
    price: "$325 – $375",
    description: "Full interior + exterior with clay bar, polish, sealant, and smoke removal.",
    popular: true,
  },
  {
    name: "Interior Detail",
    price: "$200 – $275",
    description:
      "Vacuum, steam clean, carpet shampoo, leather conditioning, headliner, windows",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-16 sm:py-24 bg-[var(--color-surface)] overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <AnimatedSection className="mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Pricing
          </p>
          <h2
            className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text-primary)" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg" style={{ color: "var(--color-text-secondary)" }}>
            No hidden fees. No surprises. Just a clean car.
          </p>
        </AnimatedSection>

        {/* Asymmetric: featured first on mobile, stacked non-popular left on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5 md:gap-6 items-stretch">
          {/* Left — stacked small tiers (order-2 on mobile so featured shows first) */}
          <div className="flex flex-col gap-5 order-2 md:order-1">
            {tiers
              .filter((t) => !t.popular)
              .map((tier, i) => (
                <AnimatedSection key={tier.name} delay={i * 0.1}>
                  <div
                    className="flex flex-col py-8 px-8 h-full rounded-2xl transition-shadow duration-300"
                    style={{
                      border: "1px solid var(--color-border)",
                      backgroundColor: "var(--color-surface)",
                      boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 8px 24px oklch(0.55 0.2 250 / 0.08)";
                      e.currentTarget.style.borderColor = "oklch(0.55 0.2 250 / 0.3)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 4px 16px oklch(0.1 0.02 250 / 0.04)";
                      e.currentTarget.style.borderColor = "var(--color-border)";
                    }}
                  >
                    <h3
                      className="font-[var(--font-heading)] text-lg font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {tier.name}
                    </h3>
                    <p
                      className="font-[var(--font-heading)] text-4xl font-bold mt-3 mb-4"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {tier.price}
                    </p>
                    <p className="mb-8" style={{ color: "var(--color-text-secondary)" }}>
                      {tier.description}
                    </p>
                    <a
                      href="#contact"
                      className="mt-auto font-semibold hover:underline"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Book Now
                    </a>
                  </div>
                </AnimatedSection>
              ))}
          </div>

          {/* Right — featured tier (order-1 on mobile so it shows first) */}
          <AnimatedSection delay={0.15} className="order-1 md:order-2">
            <div
              className="flex flex-col py-10 px-8 md:px-10 h-full rounded-2xl transition-shadow duration-300"
              style={{
                backgroundColor: "var(--color-surface-dark)",
                border: "2px solid oklch(0.55 0.2 250 / 0.4)",
                boxShadow: "0 24px 48px oklch(0.55 0.2 250 / 0.2)",
              }}
            >
              <span
                className="font-mono text-xs uppercase tracking-[0.15em] font-semibold mb-4"
                style={{ color: "var(--color-accent-light)" }}
              >
                Most Popular
              </span>
              <h3
                className="font-[var(--font-heading)] text-2xl font-bold"
                style={{ color: "#fff" }}
              >
                Complete Detail
              </h3>
              <p
                className="font-[var(--font-heading)] text-5xl md:text-6xl font-bold mt-4 mb-6"
                style={{ color: "var(--color-accent-light)" }}
              >
                $325 – $375
              </p>
              <p
                className="text-lg mb-10 max-w-[40ch]"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                Full interior + exterior with clay bar, polish, sealant, and smoke removal.
              </p>
              <a
                href="#contact"
                className="lab-bubbles mt-auto inline-block rounded-xl py-4 px-8 font-semibold text-center text-white transition-all duration-200"
                style={{
                  backgroundColor: "var(--color-accent)",
                  boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.boxShadow = "0 12px 32px oklch(0.55 0.2 250 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = "0 8px 24px oklch(0.55 0.2 250 / 0.3)";
                }}
              >
                Book Your Detail
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
