"use client";

import { useState, type FormEvent } from "react";
import { PaperPlaneTilt, CheckCircle } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

const FORM_EMAIL = "Waterfordautoshine@gmail.com";
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORM_EMAIL}`;

export default function Contact() {
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
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[var(--color-surface-secondary)]"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)]">
            Contact
          </p>
          <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-bold md:text-4xl lg:text-5xl text-[var(--color-text-primary)]">
            Get Your Quote
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column — Contact Info */}
          <AnimatedSection variant="fadeUp" delay={0.1}>
            <div className="space-y-8">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  Phone
                </p>
                <a
                  href={siteConfig.phoneHref}
                  className="mt-1 block text-lg font-medium text-[var(--color-accent)] transition-colors hover:opacity-80"
                >
                  {siteConfig.phone}
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  Email
                </p>
                <a
                  href={`mailto:${FORM_EMAIL}`}
                  className="mt-1 block text-lg font-medium text-[var(--color-accent)] transition-colors hover:opacity-80"
                >
                  {FORM_EMAIL}
                </a>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  Address
                </p>
                <p className="mt-1 text-lg text-[var(--color-text-primary)]">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--color-text-secondary)]">
                  Hours
                </p>
                <p className="mt-1 text-lg text-[var(--color-text-primary)]">
                  Mon&ndash;Sat: {siteConfig.hours.weekday}<br />
                  Sunday: {siteConfig.hours.sunday}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column — Form */}
          <AnimatedSection variant="fadeUp" delay={0.2}>
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle size={48} weight="fill" style={{ color: "var(--color-accent)" }} />
                <p className="mt-4 font-[var(--font-heading)] text-xl font-bold text-[var(--color-text-primary)]">
                  Message Sent!
                </p>
                <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
                  We&apos;ll get back to you within a few hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-lg px-6 py-3 text-sm font-semibold transition-colors border border-[var(--color-border)] text-[var(--color-text-primary)]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <input type="hidden" name="_subject" value="New Contact Message — Waterford Auto Shine" />
                <input type="hidden" name="_template" value="table" />
                <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} />

                <Input label="Name" name="name" type="text" placeholder="Your full name" />
                <Input label="Phone" name="phone" type="tel" placeholder="(248) 555-1234" />
                <Input label="Email" name="email" type="email" placeholder="you@email.com" />

                <Select
                  label="Vehicle Type"
                  name="vehicle"
                  options={["Car", "SUV", "Truck", "Other"]}
                />
                <Select
                  label="Service Interested In"
                  name="service"
                  options={[
                    "Full Detail",
                    "Interior Detail",
                    "Exterior Detail",
                    "Express Wash",
                  ]}
                />

                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your vehicle..."
                    className="w-full rounded-lg border border-[var(--color-text-muted)]/30 bg-white px-4 py-3 text-[var(--color-text-primary)] transition-all duration-200 outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
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
                  className="lab-bubbles relative w-full rounded-lg bg-[var(--color-accent-dark)] px-6 py-4 font-semibold text-white transition-transform duration-200 ease-[var(--ease-out-quart)] hover:-translate-y-0.5 disabled:opacity-60"
                >
                  <span className="flex items-center justify-center gap-2">
                    <PaperPlaneTilt size={18} weight="bold" />
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </span>
                </button>
              </form>
            )}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

/* Sub-components */

function Input({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full rounded-lg border border-[var(--color-text-muted)]/30 bg-white px-4 py-3 text-[var(--color-text-primary)] transition-all duration-200 outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
      />
    </div>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-[var(--color-text-primary)]">
        {label}
      </label>
      <select
        name={name}
        className="w-full rounded-lg border border-[var(--color-text-muted)]/30 bg-white px-4 py-3 text-[var(--color-text-primary)] transition-all duration-200 outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent-glow)]"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
