"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Car, Jeep, Buildings, Wrench } from "@phosphor-icons/react";

const audiences = [
  {
    icon: Car,
    title: "Daily Drivers",
    description:
      "Keep your commuter looking and feeling fresh with regular washes and interior cleanups.",
  },
  {
    icon: Wrench,
    title: "Car Enthusiasts",
    description:
      "Paint correction, ceramic coating, and the obsessive care your ride deserves.",
  },
  {
    icon: Jeep,
    title: "SUVs & Trucks",
    description:
      "Bigger vehicles need more attention. We handle full-size trucks and lifted SUVs.",
  },
  {
    icon: Buildings,
    title: "Commercial Fleets",
    description:
      "Volume pricing for dealerships, rental companies, and business fleets.",
  },
];

export default function WhoWeServe() {
  return (
    <section
      className="relative py-16 sm:py-24"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Who We Serve
          </p>
          <h2
            className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold"
            style={{ color: "var(--color-text-primary)" }}
          >
            We Detail Everything on Wheels
          </h2>
          <p
            className="mt-4 text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Cars, trucks, SUVs — if it has wheels, we make it shine.
          </p>
        </AnimatedSection>

        {/* Asymmetric 2-col layout: featured left, stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-5 md:gap-6">
          {/* Left — top two as larger cards */}
          <div className="flex flex-col gap-5">
            {audiences.slice(0, 2).map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-7 sm:p-8 transition-shadow duration-300"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
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
                  <item.icon
                    size={32}
                    weight="duotone"
                    style={{ color: "var(--color-accent)" }}
                  />
                  <h3
                    className="mt-4 text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="mt-2 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Right — remaining four as compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-5">
            {audiences.slice(2).map((item, i) => (
              <AnimatedSection key={item.title} delay={(i + 2) * 0.08}>
                <div
                  className="rounded-2xl p-5 transition-shadow duration-300"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
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
                  <div className="flex items-start gap-4">
                    <item.icon
                      size={24}
                      weight="duotone"
                      className="shrink-0 mt-0.5"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <h3
                        className="text-base font-bold"
                        style={{
                          fontFamily: "var(--font-heading)",
                          color: "var(--color-text-primary)",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-1 text-sm"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
