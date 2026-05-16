"use client";

import { PaperPlaneTilt } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/siteConfig";

export default function Contact() {
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
            <form className="space-y-5">
              <Input label="Name" name="name" type="text" placeholder="Your full name" />
              <Input label="Phone" name="phone" type="tel" placeholder="(248) 555-1234" />
              <Input label="Email" name="email" type="email" placeholder="you@email.com" />

              <Select
                label="Vehicle Type"
                name="vehicle"
                options={["Car", "SUV", "Truck", "Boat", "RV", "Other"]}
              />
              <Select
                label="Service Interested In"
                name="service"
                options={[
                  "Full Detail",
                  "Interior Detail",
                  "Exterior Detail",
                  "Boat Detailing",
                  "RV Cleaning",
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

              <button
                type="submit"
                className="lab-bubbles relative w-full rounded-lg bg-[var(--color-accent-dark)] px-6 py-4 font-semibold text-white transition-transform duration-200 ease-[var(--ease-out-quart)] hover:-translate-y-0.5"
              >
                <span className="flex items-center justify-center gap-2">
                  <PaperPlaneTilt size={18} weight="bold" />
                  Send Message
                </span>
              </button>
            </form>
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
