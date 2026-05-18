"use client";

import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const interiorItems = [
  "Vacuum",
  "Plastics & Vinyl Cleaning",
  "Steam Clean Seats",
  "Leather Cleaner & Conditioner",
  "Carpet Shampoo & Extraction",
  "Headliner Cleaning",
  "Windows",
];

const exteriorItems = [
  "Hand Wash & Dry",
  "Door Jambs",
  "Rims & Tires",
  "Tire Shine",
  "Hand Wax",
];

const exteriorPricing = [
  { vehicle: "Sedans", price: "$75+" },
  { vehicle: "Midsize & Trucks", price: "$100+" },
  { vehicle: "Large SUVs & Minivans", price: "$125+" },
];

const completeExtras = [
  "Clay Bar Treatment",
  "Sealant Application",
  "Compound/Polish",
  "Smoke Removal",
];

const interiorPricing = [
  { vehicle: "Sedans", price: "$200+" },
  { vehicle: "Midsize & Trucks", price: "$225+" },
  { vehicle: "Large SUVs & Minivans", price: "$275+" },
];

const completePricing = [
  { vehicle: "Sedans", price: "$325+" },
  { vehicle: "Midsize & Trucks", price: "$350+" },
  { vehicle: "Large SUVs & Minivans", price: "$375+" },
];

function QuoteButton({ variant = "light" }: { variant?: "light" | "dark" }) {
  if (variant === "dark") {
    return (
      <Link
        href="/quote"
        className="lab-bubbles mt-8 inline-block w-full rounded-xl py-4 px-8 font-semibold text-center text-white transition-all duration-200"
        style={{
          backgroundColor: "var(--color-accent)",
          boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.3)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
          e.currentTarget.style.boxShadow =
            "0 12px 32px oklch(0.55 0.2 250 / 0.4)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow =
            "0 8px 24px oklch(0.55 0.2 250 / 0.3)";
        }}
      >
        Get My Quote Today
      </Link>
    );
  }

  return (
    <Link
      href="/quote"
      className="mt-8 inline-block w-full rounded-xl py-4 px-8 font-semibold text-center transition-all duration-200"
      style={{
        color: "var(--color-accent)",
        border: "2px solid var(--color-accent)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "var(--color-accent)";
        e.currentTarget.style.color = "#fff";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = "var(--color-accent)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      Get My Quote Today
    </Link>
  );
}

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
            Every detail includes premium products and our full attention.
            Pricing varies by vehicle size.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Exterior Detail Card */}
          <AnimatedSection delay={0}>
            <div
              className="rounded-2xl p-8 md:p-10 h-full flex flex-col transition-shadow duration-300"
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
              <h3
                className="font-[var(--font-heading)] text-2xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                Exterior Detail
              </h3>
              <p
                className="font-[var(--font-heading)] text-3xl font-bold mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                From $75 – $125
              </p>

              <ul className="space-y-2 mb-8">
                {exteriorItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing by vehicle size */}
              <div
                className="mt-auto space-y-3 pt-6"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Pricing by Vehicle Size
                </p>
                {exteriorPricing.map((tier) => (
                  <div
                    key={tier.vehicle}
                    className="flex justify-between items-center"
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {tier.vehicle}
                    </span>
                    <span
                      className="font-[var(--font-heading)] font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {tier.price}
                    </span>
                  </div>
                ))}
                <QuoteButton variant="dark" />
              </div>
            </div>
          </AnimatedSection>

          {/* Interior Detail Card */}
          <AnimatedSection delay={0.08}>
            <div
              className="rounded-2xl p-8 md:p-10 h-full flex flex-col transition-shadow duration-300"
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
              <h3
                className="font-[var(--font-heading)] text-2xl font-bold mb-2"
                style={{ color: "var(--color-text-primary)" }}
              >
                Interior Detail
              </h3>
              <p
                className="font-[var(--font-heading)] text-3xl font-bold mb-6"
                style={{ color: "var(--color-accent)" }}
              >
                From $200 – $275
              </p>

              <ul className="space-y-2 mb-8">
                {interiorItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing by vehicle size */}
              <div
                className="mt-auto space-y-3 pt-6"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Pricing by Vehicle Size
                </p>
                {interiorPricing.map((tier) => (
                  <div
                    key={tier.vehicle}
                    className="flex justify-between items-center"
                  >
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {tier.vehicle}
                    </span>
                    <span
                      className="font-[var(--font-heading)] font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>

              <QuoteButton variant="dark" />
            </div>
          </AnimatedSection>

          {/* Complete Detail Card (Featured) */}
          <AnimatedSection delay={0.16}>
            <div
              className="rounded-2xl p-8 md:p-10 h-full flex flex-col transition-shadow duration-300"
              style={{
                backgroundColor: "var(--color-surface-dark)",
                border: "2px solid oklch(0.55 0.2 250 / 0.4)",
                boxShadow: "0 24px 48px oklch(0.55 0.2 250 / 0.2)",
              }}
            >
              <span
                className="inline-block font-mono text-xs uppercase tracking-[0.15em] mb-4"
                style={{ color: "var(--color-accent-light)" }}
              >
                Best Value
              </span>
              <h3
                className="font-[var(--font-heading)] text-2xl font-bold mb-2"
                style={{ color: "#fff" }}
              >
                Complete Detail
              </h3>
              <p
                className="text-sm mb-1"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Interior + Exterior
              </p>
              <p
                className="font-[var(--font-heading)] text-3xl font-bold mb-6"
                style={{ color: "var(--color-accent-light)" }}
              >
                From $325 – $375
              </p>

              <p
                className="flex items-center gap-2 text-sm mb-5"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: "var(--color-accent-light)",
                  }}
                />
                Everything in Interior and Exterior
              </p>

              {/* Additional services */}
              <p
                className="font-mono text-xs uppercase tracking-[0.15em] mb-2"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Plus
              </p>
              <ul className="space-y-2 mb-8">
                {completeExtras.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "rgba(255,255,255,0.7)" }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: "var(--color-accent-light)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Pricing by vehicle size */}
              <div
                className="mt-auto space-y-3 pt-6"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <p
                  className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Pricing by Vehicle Size
                </p>
                {completePricing.map((tier) => (
                  <div
                    key={tier.vehicle}
                    className="flex justify-between items-center"
                  >
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {tier.vehicle}
                    </span>
                    <span
                      className="font-[var(--font-heading)] font-bold"
                      style={{ color: "#fff" }}
                    >
                      {tier.price}
                    </span>
                  </div>
                ))}
              </div>

              <QuoteButton variant="dark" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
