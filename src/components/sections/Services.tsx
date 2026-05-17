"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";

const services = [
  {
    title: "Full Detail",
    description:
      "Complete interior and exterior hand wash, clay bar treatment, polish, and wax. Your vehicle leaves showroom-ready.",
    price: "$150+",
    featured: true,
  },
  {
    title: "Interior Detail",
    description:
      "Deep cleaning of carpets, seats, dashboard, and all interior surfaces. Stain removal and conditioning included.",
    price: "$90+",
  },
  {
    title: "Exterior Detail",
    description:
      "Hand wash, clay bar, polish, and premium wax protection for a mirror finish.",
    price: "$80+",
  },
  {
    title: "Express Wash",
    description:
      "Quick but thorough hand wash with vacuum service. Perfect for regular maintenance.",
    price: "$45+",
  },
  {
    title: "Boat Detailing",
    description:
      "Full season boat detailing to restore your vessel's exterior and get it water-ready.",
    price: "$200+",
  },
  {
    title: "RV Cleaning",
    description:
      "Complete RV wash and detail for recreational vehicles of all sizes.",
    price: "$250+",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Services &amp; Pricing
          </p>
          <h2
            className="font-[var(--font-heading)] font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Transparent Pricing, No Surprises
          </h2>
          <p
            className="mt-3 text-base"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Every price includes hand wash, premium products, and our full
            attention. No upsells.
          </p>
        </AnimatedSection>

        {/* Top row: featured + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[7fr_5fr] gap-5">
          {/* Featured card */}
          <AnimatedSection delay={0}>
            <div
              className="group relative rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between transition-shadow duration-300"
              style={{
                backgroundColor: "var(--color-surface-dark)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 20px 40px oklch(0.1 0.02 250 / 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 24px 48px oklch(0.55 0.2 250 / 0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 20px 40px oklch(0.1 0.02 250 / 0.15)";
              }}
            >
              <div>
                <span
                  className="inline-block font-mono text-xs uppercase tracking-[0.15em] mb-6"
                  style={{ color: "var(--color-accent-light)" }}
                >
                  Most Popular
                </span>
                <h3
                  className="font-[var(--font-heading)] text-2xl md:text-3xl font-bold mb-3"
                  style={{ color: "#fff" }}
                >
                  {services[0].title}
                </h3>
                <p
                  className="text-base leading-relaxed max-w-[45ch]"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {services[0].description}
                </p>
              </div>
              <div className="flex items-end justify-between mt-8">
                <span
                  className="font-[var(--font-heading)] text-3xl font-bold"
                  style={{ color: "var(--color-accent-light)" }}
                >
                  {services[0].price}
                </span>
                <a
                  href="#hero-form"
                  className="text-sm font-semibold transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-accent-light)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                  }}
                >
                  Get a Quote
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Right column — stacked pair */}
          <div className="flex flex-col gap-5">
            {services.slice(1, 3).map((service, i) => (
              <AnimatedSection key={service.title} delay={(i + 1) * 0.08}>
                <div
                  className="rounded-2xl p-6 md:p-8 h-full transition-shadow duration-300"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px oklch(0.55 0.2 250 / 0.08)";
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.2 250 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px oklch(0.1 0.02 250 / 0.04)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3
                      className="font-[var(--font-heading)] text-lg font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {service.title}
                    </h3>
                    <span
                      className="font-[var(--font-heading)] text-lg font-bold shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      {service.price}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {service.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom row — 2-col asymmetric instead of 3-col equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
          {services.slice(3).map((service, i) => (
            <AnimatedSection key={service.title} delay={(i + 3) * 0.08}>
              <div
                className="rounded-2xl p-6 md:p-8 h-full transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 24px oklch(0.55 0.2 250 / 0.08)";
                  e.currentTarget.style.borderColor =
                    "oklch(0.55 0.2 250 / 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 4px 16px oklch(0.1 0.02 250 / 0.04)";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3
                    className="font-[var(--font-heading)] text-lg font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {service.title}
                  </h3>
                  <span
                    className="font-[var(--font-heading)] text-lg font-bold shrink-0"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {service.price}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
