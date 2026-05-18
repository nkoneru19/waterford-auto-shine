"use client";

import Link from "next/link";
import { PaperPlaneTilt, Phone } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export default function FinalCTA() {
  return (
    <section
      className="py-16 sm:py-24 aurora-glow grid-texture"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-12 items-center">
          {/* Left — headline and body */}
          <AnimatedSection variant="fadeUp">
            <h2
              className="font-[var(--font-heading)] font-bold"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--color-text-inverse)",
              }}
            >
              Your Car Is Waiting.
            </h2>
            <p
              className="mt-5 max-w-xl text-lg"
              style={{ lineHeight: "1.7", color: "rgba(255,255,255,0.6)" }}
            >
              Get a free quote or give us a call. We&apos;ll have your
              vehicle looking brand new.
            </p>
          </AnimatedSection>

          {/* Right — CTAs stacked */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="flex flex-col gap-4">
              <a
                href={siteConfig.phoneHref}
                className="lab-bubbles inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-200"
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
                <Phone size={18} weight="bold" />
                Call {siteConfig.phone}
              </a>

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)";
                  e.currentTarget.style.borderColor = "oklch(0.55 0.2 250 / 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                }}
              >
                <PaperPlaneTilt size={18} weight="bold" />
                Get a Free Quote
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
