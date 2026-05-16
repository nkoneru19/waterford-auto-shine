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
    <section id="comparison" className="py-16 sm:py-24 bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro — left-aligned */}
        <AnimatedSection className="mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-3">
            The Difference
          </p>
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]">
            Why Hand Wash Beats Automatic
          </h2>
        </AnimatedSection>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* LEFT — Automatic (bad) */}
          <AnimatedSection variant="slideFromLeft">
            <h3 className="font-[var(--font-heading)] text-lg font-semibold mb-6 text-[var(--color-text-muted)]">
              Automatic Car Wash
            </h3>
            <ul className="space-y-0">
              {automaticItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-[var(--color-text-muted)]/15"
                >
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-50 text-red-500">
                    <X size={14} weight="bold" />
                  </span>
                  <span className="text-[var(--color-text-secondary)]">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          {/* RIGHT — Waterford (good) */}
          <AnimatedSection variant="slideFromRight">
            <h3 className="font-[var(--font-heading)] text-lg font-semibold mb-6 text-[var(--color-text-primary)]">
              Waterford Auto Shine
            </h3>
            <ul className="space-y-0">
              {handWashItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 py-3 border-b border-[var(--color-text-muted)]/15"
                >
                  <span className="mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--color-accent-glow)] text-[var(--color-accent)]">
                    <Check size={14} weight="bold" />
                  </span>
                  <span className="font-medium text-[var(--color-text-primary)]">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
