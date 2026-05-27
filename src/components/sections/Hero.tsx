"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

const FORM_EMAIL = "Waterfordautoshine@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORM_EMAIL}`;

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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSUBMIT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative flex items-center bg-[var(--color-surface)] overflow-hidden pt-28 md:pt-20 pb-10 md:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="hidden lg:block font-mono text-xs uppercase tracking-[0.15em] mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Professional Detailing &middot; Waterford Township, MI
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-[var(--font-heading)] font-bold tracking-tight leading-[1.05] text-center lg:text-left"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--color-text-primary)" }}
          >
            Waterford&apos;s{" "}
            <span style={{ color: "var(--color-accent)" }}>#1</span>
            {/* Mobile: "Hand Wash &" on line 1, "Detail Shop" on line 2 */}
            <span className="lg:hidden"> Hand Wash &amp;<br />Detail Shop</span>
            {/* Desktop: original layout */}
            <span className="hidden lg:inline"> Hand<br />Wash &amp; Detail Shop</span>
          </motion.h1>

          {/* Body */}
          <motion.p
            {...fadeUp(0.1)}
            className="mt-6 text-lg leading-relaxed max-w-[50ch] text-center lg:text-left mx-auto lg:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Professional hand wash and detailing with premium products and a
            finish you can see yourself in. Sedans, trucks, and SUVs.
          </motion.p>

          {/* Phone CTA — visible on mobile where form is below */}
          <motion.div
            {...fadeUp(0.2)}
            className="mt-14 mb-4 lg:hidden flex flex-wrap items-center justify-center gap-5"
          >
            <Link
              href="/quote"
              className="lab-bubbles inline-block rounded-xl py-5 px-10 text-lg font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.25)",
              }}
            >
              Receive a Free Quote
            </Link>
          </motion.div>
        </div>

        {/* Right — Quote Form */}
        <motion.div
          {...fadeUp(0.15)}
          id="hero-form"
          className="hidden lg:block rounded-2xl p-6 sm:p-8"
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
            Receive a Free Quote
          </p>

          {status === "sent" ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <CheckCircle size={56} weight="fill" style={{ color: "var(--color-accent)" }} />
              <p className="mt-4 font-[var(--font-heading)] text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                Quote Request Sent!
              </p>
              <p className="mt-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                We&apos;ll get back to you within a few hours with your personalized quote.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-xl px-6 py-3 text-sm font-semibold transition-colors"
                style={{ border: "1px solid var(--color-border)", color: "var(--color-text-primary)" }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Quote Request — Waterford Auto Shine" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

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
                  <option value="Exterior Detail">Exterior Detail</option>
                  <option value="Interior Detail">Interior Detail</option>
                  <option value="Complete Detail">Complete Detail (Interior + Exterior)</option>
                  <option value="Other">Other / Not sure</option>
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

              {status === "error" && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again or call us directly.
                </p>
              )}

              <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                By submitting this form, you consent to receive text messages from Waterford Auto Shine regarding your inquiry. Reply STOP to opt out. Message &amp; data rates may apply.
              </p>

              <button
                type="submit"
                disabled={status === "sending"}
                className="lab-bubbles w-full rounded-xl py-4 font-semibold text-white transition-all duration-200 disabled:opacity-60"
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
                  {status === "sending" ? "Sending..." : "Get My Quote Today"}
                </span>
              </button>
            </form>
          )}

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
