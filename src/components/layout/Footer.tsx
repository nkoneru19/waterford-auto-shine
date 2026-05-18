"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Get a Quote", href: "/quote" },
  { label: "Services", href: "/#services" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

const services = [
  "Hand Wash",
  "Interior Detailing",
  "Exterior Detailing",
  "Full Detail",
  "Ceramic Coating",
  "Paint Correction",
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-surface-dark)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top: Logo + Tagline | Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12">
          <div>
            <h3
              className="font-bold text-xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-inverse)",
              }}
            >
              {siteConfig.name}
            </h3>
            <p
              className="mt-1 text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              {siteConfig.tagline}. Professional hand wash and detailing in Waterford Township.
            </p>
          </div>
          <a
            href={siteConfig.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center transition-colors"
            style={{
              color: "var(--color-text-muted)",
              width: "44px",
              height: "44px",
              transitionDuration: "200ms",
              transitionTimingFunction: "var(--ease-out-quart)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-inverse)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
            aria-label="Facebook"
          >
            <FacebookIcon size={22} />
          </a>
        </div>

        {/* Middle: 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors"
                    style={{
                      color: "var(--color-text-muted)",
                      transitionDuration: "200ms",
                      transitionTimingFunction: "var(--ease-out-quart)",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-inverse)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: "var(--color-text-inverse)" }}
            >
              Contact
            </h4>
            <div className="space-y-3 text-sm" style={{ color: "var(--color-text-muted)" }}>
              <p>
                {siteConfig.address.street}<br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
              <p>
                <a
                  href={siteConfig.phoneHref}
                  className="transition-colors"
                  style={{
                    color: "var(--color-text-muted)",
                    transitionDuration: "200ms",
                    transitionTimingFunction: "var(--ease-out-quart)",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-inverse)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-muted)"; }}
                >
                  {siteConfig.phone}
                </a>
              </p>
              <div>
                <p>Mon&ndash;Thu: {siteConfig.hours.weekday}</p>
                <p>Fri&ndash;Sat: {siteConfig.hours.friday}</p>
                <p>Sunday: {siteConfig.hours.sunday}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        style={{ borderTop: "1px solid var(--color-border-dark)" }}
      >
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "var(--color-text-secondary)" }}>
            Website by{" "}
            <a
              href="https://thecontentlabs.io"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{
                color: "var(--color-text-secondary)",
                transitionDuration: "200ms",
                transitionTimingFunction: "var(--ease-out-quart)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-inverse)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-secondary)"; }}
            >
              The Content Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
