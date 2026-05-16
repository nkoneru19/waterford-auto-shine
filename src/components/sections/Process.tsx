"use client";

import React from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    number: "01",
    title: "Book",
    description: "Call us or fill out the form to schedule your appointment.",
  },
  {
    number: "02",
    title: "Drop Off",
    description: "Bring your vehicle to our shop on Pontiac Lake Rd.",
  },
  {
    number: "03",
    title: "We Detail",
    description:
      "Our team gets to work with premium products and care.",
  },
  {
    number: "04",
    title: "Pick Up",
    description: "Collect your vehicle looking brand new. That's it.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-[var(--color-surface-secondary)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Intro — Left Aligned */}
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            How It Works
          </p>
          <h2 className="font-[var(--font-heading)] text-4xl font-bold mt-3 text-[var(--color-text-primary)]">
            Four Simple Steps
          </h2>
        </AnimatedSection>

        {/* Desktop: horizontal 4-column with connecting lines */}
        <div className="mt-16 hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] md:items-start md:gap-0">
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              <AnimatedSection
                delay={i * 0.15}
                className="flex flex-col"
              >
                <span className="font-[var(--font-heading)] text-4xl font-bold text-[var(--color-accent)]">
                  {step.number}
                </span>
                <h3 className="font-[var(--font-heading)] text-xl font-bold mt-4 text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="text-sm mt-2 max-w-[30ch] text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </AnimatedSection>

              {/* Connecting line between steps */}
              {i < steps.length - 1 && (
                <div
                  key={`line-${i}`}
                  className="flex items-center self-center h-px w-12 bg-[var(--color-text-muted)] opacity-40 mt-3"
                  aria-hidden="true"
                />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Mobile: vertical stack with connecting line */}
        <div className="mt-12 md:hidden relative pl-12">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[1.05rem] top-2 bottom-2 w-px bg-[var(--color-text-muted)] opacity-40"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <AnimatedSection
                key={step.number}
                delay={i * 0.12}
                className="relative"
              >
                {/* Number positioned on the vertical line */}
                <span className="absolute -left-12 font-[var(--font-heading)] text-2xl font-bold text-[var(--color-accent)]">
                  {step.number}
                </span>
                <h3 className="font-[var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
                  {step.title}
                </h3>
                <p className="text-sm mt-2 max-w-[30ch] text-[var(--color-text-secondary)]">
                  {step.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
