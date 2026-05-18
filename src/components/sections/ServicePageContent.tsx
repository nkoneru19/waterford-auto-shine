"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";
import { Footer } from "@/components/layout/Footer";
import type { ServiceData } from "@/lib/serviceData";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOutQuart, delay },
  };
}

interface ServicePageContentProps {
  service: ServiceData;
  otherServices: ServiceData[];
}

export default function ServicePageContent({
  service,
  otherServices,
}: ServicePageContentProps) {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-28 pb-16 sm:pt-36 sm:pb-24"
        style={{ backgroundColor: "var(--color-surface-dark)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-accent-light)" }}
            >
              {service.badge ?? service.name}
            </p>
            <h1
              className="font-[var(--font-heading)] font-bold tracking-tight"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                lineHeight: 1.1,
                color: "var(--color-text-inverse)",
              }}
            >
              {service.headline}
            </h1>
            <p
              className="mt-5 max-w-2xl text-lg"
              style={{ lineHeight: 1.7, color: "rgba(255,255,255,0.6)" }}
            >
              {service.description}
            </p>
            <Link
              href="/quote"
              className="lab-bubbles mt-8 inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-200"
              style={{
                backgroundColor: "var(--color-accent)",
                boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-2px) scale(1.02)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px oklch(0.55 0.2 250 / 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px oklch(0.55 0.2 250 / 0.3)";
              }}
            >
              Get a Free Quote
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What's Included + Pricing + CTA */}
      <section
        className="py-16 sm:py-24"
        style={{ backgroundColor: "var(--color-surface)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — What's Included */}
            <motion.div {...fadeUp(0.1)}>
              <h2
                className="font-[var(--font-heading)] text-2xl font-bold mb-8"
                style={{ color: "var(--color-text-primary)" }}
              >
                What&apos;s Included
              </h2>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {service.extras && (
                <div className="mt-8">
                  <p
                    className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {service.extras.label}
                  </p>
                  <ul className="space-y-3">
                    {service.extras.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-base"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <span
                          className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Right — Pricing + CTA */}
            <motion.div {...fadeUp(0.2)} className="space-y-8">
              {service.pricing && (
                <div
                  className="rounded-2xl p-6 sm:p-8"
                  style={{
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface)",
                    boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                  }}
                >
                  <p
                    className="font-[var(--font-heading)] text-lg font-bold mb-6"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Pricing by Vehicle Size
                  </p>
                  <div className="space-y-4">
                    {service.pricing.map((tier) => (
                      <div
                        key={tier.vehicle}
                        className="flex justify-between items-center"
                      >
                        <span
                          className="text-base"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {tier.vehicle}
                        </span>
                        <span
                          className="font-[var(--font-heading)] text-lg font-bold"
                          style={{ color: "var(--color-text-primary)" }}
                        >
                          {tier.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  <p
                    className="mt-4 text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Final pricing depends on vehicle condition. Get a free quote
                    for an exact estimate.
                  </p>
                </div>
              )}

              {/* CTA Card */}
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  backgroundColor: "var(--color-surface-dark)",
                  border: "2px solid oklch(0.55 0.2 250 / 0.4)",
                  boxShadow: "0 24px 48px oklch(0.55 0.2 250 / 0.2)",
                }}
              >
                <p
                  className="font-[var(--font-heading)] text-xl font-bold mb-3"
                  style={{ color: "#fff" }}
                >
                  Ready to Get Started?
                </p>
                <p
                  className="text-sm mb-6"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  Get a personalized quote for your vehicle or give us a call.
                </p>
                <div className="flex flex-col gap-3">
                  <Link
                    href="/quote"
                    className="lab-bubbles inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-200"
                    style={{
                      backgroundColor: "var(--color-accent)",
                      boxShadow: "0 8px 24px oklch(0.55 0.2 250 / 0.3)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(-2px) scale(1.02)";
                      e.currentTarget.style.boxShadow =
                        "0 12px 32px oklch(0.55 0.2 250 / 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform =
                        "translateY(0) scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 8px 24px oklch(0.55 0.2 250 / 0.3)";
                    }}
                  >
                    Get a Free Quote
                  </Link>
                  <a
                    href={siteConfig.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-white transition-all duration-200"
                    style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor =
                        "oklch(0.55 0.2 250 / 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.15)";
                    }}
                  >
                    <Phone size={18} weight="bold" />
                    Call {siteConfig.phone}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section
        className="py-16 sm:py-24"
        style={{ backgroundColor: "var(--color-surface-secondary)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0)}>
            <h2
              className="font-[var(--font-heading)] text-2xl font-bold mb-8"
              style={{ color: "var(--color-text-primary)" }}
            >
              Explore Our Other Services
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {otherServices.map((other, i) => (
              <motion.div key={other.slug} {...fadeUp(0.1 + i * 0.08)}>
                <Link
                  href={`/services/${other.slug}`}
                  className="block rounded-2xl p-6 sm:p-8 h-full transition-all duration-300"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    border: "1px solid var(--color-border)",
                    boxShadow: "0 4px 16px oklch(0.1 0.02 250 / 0.04)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 24px oklch(0.55 0.2 250 / 0.08)";
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.2 250 / 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 4px 16px oklch(0.1 0.02 250 / 0.04)";
                    e.currentTarget.style.borderColor = "var(--color-border)";
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3
                      className="font-[var(--font-heading)] text-xl font-bold"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {other.name}
                    </h3>
                    <ArrowRight
                      size={20}
                      weight="bold"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>
                  {other.startingPrice && (
                    <p
                      className="font-[var(--font-heading)] font-bold mb-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      From {other.startingPrice}
                    </p>
                  )}
                  <p
                    className="text-sm line-clamp-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {other.description}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
