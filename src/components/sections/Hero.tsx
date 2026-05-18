"use client";

import { motion } from "framer-motion";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOutQuart, delay },
  };
}

const inputStyle: React.CSSProperties = {
  borderColor: "var(--color-border)",
  backgroundColor: "var(--color-surface-secondary)",
  color: "var(--color-text-primary)",
};

function InputFocusHandlers() {
  return {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "var(--color-accent)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "var(--color-border)";
    },
  };
}

export default function Hero() {
  const focusHandlers = InputFocusHandlers();

  return (
    <section className="relative flex items-center bg-[var(--color-surface)] overflow-hidden pt-20 pb-8 md:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="font-mono text-xs uppercase tracking-[0.15em] mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Professional Detailing &middot; Waterford Township, MI
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-[var(--font-heading)] font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--color-text-primary)" }}
          >
            Waterford&apos;s{" "}
            <span style={{ color: "var(--color-accent)" }}>#1</span> Hand
            <br />
            Wash &amp; Detail Shop
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 text-lg leading-relaxed max-w-[50ch]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Professional hand wash and detailing with premium products and a
            finish you can see yourself in. Cars, trucks, and SUVs.
          </motion.p>

          {/* Phone CTA — visible on mobile where form is below */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-8 lg:hidden flex flex-wrap items-center gap-5"
          >
            <a
              href="#hero-form"
              className="lab-bubbles inline-block rounded-xl py-4 px-8 font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.25)",
              }}
            >
              Get a Free Quote
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

        {/* Right — Quote Form */}
        <motion.div
          {...fadeUp(0.15)}
          id="hero-form"
          className="rounded-2xl p-6 sm:p-8"
          style={{
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-surface)",
            boxShadow: "0 20px 50px oklch(0.1 0.02 250 / 0.12)",
          }}
        >
          <p
            className="font-[var(--font-heading)] text-xl font-bold mb-6"
            style={{ color: "var(--color-text-primary)" }}
          >
            Request a Free Quote
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Full Name <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                style={inputStyle}
                {...focusHandlers}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Phone <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="(248) 555-1234"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                style={inputStyle}
                {...focusHandlers}
              />
            </div>

            {/* Service */}
            <div>
              <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Service <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <select
                name="service"
                required
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                style={inputStyle}
                {...focusHandlers}
              >
                <option value="">Select a service...</option>
                <option value="Full Detail">Full Detail</option>
                <option value="Interior Only">Interior Only</option>
                <option value="Exterior Only">Exterior Only</option>
                <option value="Other">Other / I need assistance</option>
              </select>
            </div>

            {/* Vehicle Details */}
            <div>
              <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Vehicle Details <span style={{ color: "var(--color-accent)" }}>*</span>
              </label>
              <p className="text-xs mb-2" style={{ color: "var(--color-text-muted)" }}>
                Please provide details of your vehicle for an accurate quote.
              </p>
              <div className="grid grid-cols-3 gap-2">
                <input
                  type="text"
                  name="year"
                  required
                  placeholder="Year"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                  style={inputStyle}
                  {...focusHandlers}
                />
                <input
                  type="text"
                  name="make"
                  required
                  placeholder="Make"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                  style={inputStyle}
                  {...focusHandlers}
                />
                <input
                  type="text"
                  name="model"
                  required
                  placeholder="Model"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors"
                  style={inputStyle}
                  {...focusHandlers}
                />
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                Additional Comments
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Messages or special requests"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition-colors resize-none"
                style={inputStyle}
                {...focusHandlers}
              />
            </div>

            <button
              type="submit"
              className="lab-bubbles w-full rounded-xl py-4 font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.25)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 12px 32px oklch(0.55 0.2 250 / 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 8px 24px oklch(0.55 0.2 250 / 0.25)";
              }}
            >
              <span className="flex items-center justify-center gap-2">
                <PaperPlaneTilt size={18} weight="bold" />
                Get My Quote Today
              </span>
            </button>
          </form>

          <p
            className="text-xs text-center mt-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Or call us directly:{" "}
            <a
              href={siteConfig.phoneHref}
              className="font-semibold"
              style={{ color: "var(--color-accent)" }}
            >
              {siteConfig.phone}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
