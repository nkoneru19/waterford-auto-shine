"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const stats = [
  { number: "45+", label: "reviews" },
  { number: "4.8", label: "average" },
  { number: "10+", label: "years" },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 overflow-hidden aurora-glow grid-texture"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section intro */}
        <AnimatedSection className="mb-10">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Our Work
          </p>
          <h2
            className="font-[var(--font-heading)] text-3xl md:text-5xl font-bold"
            style={{ color: "var(--color-text-inverse)" }}
          >
            See The Difference
          </h2>
        </AnimatedSection>

        {/* Asymmetric masonry grid */}
        <AnimatedSection delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5">
            {/* Large image — landscape aspect */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-[16/10] transition-all duration-500"
              style={{
                boxShadow: "0 20px 40px oklch(0 0 0 / 0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px oklch(0.55 0.2 250 / 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px oklch(0 0 0 / 0.3)";
              }}
            >
              <Image
                src="/images/gallery-1.jpg"
                alt="Professional hand wash and exterior detailing at Waterford Auto Shine in Waterford Township, MI"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>

            {/* Tall image — portrait aspect */}
            <div
              className="relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-auto md:h-full transition-all duration-500"
              style={{
                boxShadow: "0 20px 40px oklch(0 0 0 / 0.3)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1.01)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 24px 48px oklch(0.55 0.2 250 / 0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px oklch(0 0 0 / 0.3)";
              }}
            >
              <Image
                src="/images/gallery-2.jpg"
                alt="Water beading on freshly waxed car after professional auto detailing in Waterford, MI"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Stats row */}
        <AnimatedSection className="mt-14" delay={0.2}>
          <div className="flex flex-wrap gap-14">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  className="font-[var(--font-heading)] font-bold text-3xl"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  {stat.number}
                </span>
                <span
                  className="font-mono uppercase text-xs tracking-[0.15em] mt-1"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
