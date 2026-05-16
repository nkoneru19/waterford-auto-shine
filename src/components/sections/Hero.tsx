"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOutQuart, delay },
  };
}

export default function Hero() {
  return (
    <section className="relative flex items-center bg-[var(--color-surface)] overflow-hidden pt-20 pb-8 md:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-xs uppercase tracking-[0.15em] mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            4.8 Stars &middot; {siteConfig.reviewCount} Reviews &middot; Waterford, MI
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-[var(--font-heading)] font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--color-text-primary)" }}
          >
            Your Car Deserves
            <br />
            <span>
              A{" "}
              <span style={{ color: "var(--color-accent)" }}>Better</span> Shine.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 text-lg leading-relaxed max-w-[50ch]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Hand wash and professional detailing in Waterford Township. Cars,
            SUVs, boats, and RVs — treated with the care they deserve.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-12 flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="lab-bubbles inline-block rounded-xl py-4 px-8 font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 8px 24px oklch(0.6 0.2 30 / 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px oklch(0.6 0.2 30 / 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px oklch(0.6 0.2 30 / 0.25)";
              }}
            >
              Book Your Detail
            </a>

            <a
              href={siteConfig.phoneHref}
              className="font-semibold transition-opacity hover:opacity-80"
              style={{ color: "var(--color-accent)" }}
            >
              {siteConfig.phone}
            </a>
          </motion.div>
        </div>

        {/* Right — Hero image */}
        <motion.div
          {...fadeUp(0.15)}
          className="hidden lg:block rounded-2xl overflow-hidden"
          style={{ boxShadow: "0 20px 50px oklch(0.1 0.02 30 / 0.2)" }}
        >
          <img
            src="/images/hero-1.jpg"
            alt="Professional hand detailing a car hood"
            width={1168}
            height={872}
            className="w-full h-auto object-cover rounded-2xl"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
