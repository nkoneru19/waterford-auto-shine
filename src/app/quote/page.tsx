"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { PaperPlaneTilt, Phone, MapPin, Clock, CheckCircle } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";
import { Footer } from "@/components/layout/Footer";

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

export default function QuotePage() {
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
    <>
      <section className="relative bg-[var(--color-surface)] pt-28 pb-16 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div {...fadeUp(0)} className="mb-12 lg:mb-16">
            <h1
              className="font-[var(--font-heading)] font-bold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--color-text-primary)",
              }}
            >
              Get Your Free Quote
            </h1>
            <p
              className="mt-4 text-lg max-w-[55ch]"
              style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}
            >
              Tell us about your vehicle and the service you need. We&apos;ll get back to you with a personalized quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16">
            {/* Left — Form */}
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface)",
                boxShadow: "0 20px 50px oklch(0.1 0.02 250 / 0.12)",
              }}
            >
              {status === "sent" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle size={56} weight="fill" style={{ color: "var(--color-accent)" }} />
                  <p
                    className="mt-4 font-[var(--font-heading)] text-2xl font-bold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Quote Request Sent!
                  </p>
                  <p className="mt-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    We&apos;ll get back to you within a few hours with your personalized quote.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 rounded-xl px-6 py-3 text-sm font-semibold transition-colors"
                    style={{
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <>
                  <h2
                    className="font-[var(--font-heading)] text-xl font-bold mb-6"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Vehicle &amp; Service Details
                  </h2>

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

                    {/* Email */}
                    <div>
                      <label className="mb-1 block text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="you@email.com"
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
                        rows={4}
                        placeholder="Tell us about your vehicle's condition, any special requests, etc."
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
                        {status === "sending" ? "Sending..." : "Get My Free Quote"}
                      </span>
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            {/* Right — Contact Info & Details */}
            <motion.div {...fadeUp(0.2)} className="space-y-8">
              {/* Contact Card */}
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <h2
                  className="font-[var(--font-heading)] text-lg font-bold mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Contact Info
                </h2>

                <div className="space-y-5">
                  <a
                    href={siteConfig.phoneHref}
                    className="flex items-start gap-3 group"
                  >
                    <Phone
                      size={20}
                      weight="bold"
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                        Phone
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-accent)" }}>
                        {siteConfig.phone}
                      </p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3"
                  >
                    <MapPin
                      size={20}
                      weight="bold"
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                        Address
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        {siteConfig.address.street}<br />
                        {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <Clock
                      size={20}
                      weight="bold"
                      className="mt-0.5 shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                        Hours
                      </p>
                      <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                        Mon&ndash;Sat: {siteConfig.hours.weekday}<br />
                        Sunday: {siteConfig.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What to Expect */}
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  border: "1px solid var(--color-border)",
                  backgroundColor: "var(--color-surface)",
                }}
              >
                <h2
                  className="font-[var(--font-heading)] text-lg font-bold mb-4"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  What to Expect
                </h2>
                <ul className="space-y-3">
                  {[
                    "We'll respond within a few hours",
                    "Personalized quote based on your vehicle",
                    "No obligation, just honest pricing",
                    "Premium products on every detail",
                  ].map((item) => (
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Google Map */}
      <section className="w-full">
        <iframe
          title={`Map to ${siteConfig.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.full)}&output=embed`}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <Footer />
    </>
  );
}
