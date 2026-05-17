"use client";

import { X, Check } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const automaticItems = [
  "Scratches and swirl marks from brushes",
  "Misses tight spots and crevices",
  "Harsh chemicals damage clear coat",
  "One-size-fits-all treatment",
  "In and out in 3 minutes",
];

const handWashItems = [
  "Gentle hand wash preserves your paint",
  "Every surface cleaned by hand",
  "Premium pH-balanced products",
  "Treatment matched to your vehicle",
  "Thorough detail, no shortcuts",
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      className="py-16 sm:py-24"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <AnimatedSection className="mb-12">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--color-text-muted)" }}
          >
            The Difference
          </p>
          <h2
            className="font-[var(--font-heading)] font-bold"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Why Hand Wash Wins
          </h2>
        </AnimatedSection>

        {/* Two-column comparison */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Automatic (bad) — muted card */}
          <AnimatedSection delay={0.05}>
            <div
              className="rounded-2xl p-7 sm:p-8 h-full"
              style={{
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border)",
              }}
            >
              <h3
                className="font-[var(--font-heading)] text-lg font-semibold mb-6"
                style={{ color: "var(--color-text-muted)" }}
              >
                Automatic Car Wash
              </h3>
              <ul className="space-y-4">
                {automaticItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full"
                      style={{ backgroundColor: "oklch(0.95 0.02 15)" }}
                    >
                      <X size={12} weight="bold" style={{ color: "oklch(0.55 0.15 15)" }} />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          {/* Waterford (good) — accent-tinted card */}
          <AnimatedSection delay={0.12}>
            <div
              className="rounded-2xl p-7 sm:p-8 h-full"
              style={{
                backgroundColor: "var(--color-surface-dark)",
                border: "1px solid oklch(0.55 0.2 250 / 0.15)",
              }}
            >
              <h3
                className="font-[var(--font-heading)] text-lg font-semibold mb-6"
                style={{ color: "var(--color-text-inverse)" }}
              >
                Waterford Auto Shine
              </h3>
              <ul className="space-y-4">
                {handWashItems.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full"
                      style={{ backgroundColor: "oklch(0.55 0.2 250 / 0.15)" }}
                    >
                      <Check
                        size={12}
                        weight="bold"
                        style={{ color: "var(--color-accent-light)" }}
                      />
                    </span>
                    <span
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.8)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
