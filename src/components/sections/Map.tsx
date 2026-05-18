"use client";

import { Phone, MapPin, Clock, NavigationArrow } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

export default function Map() {
  const query = encodeURIComponent(siteConfig.address.full);

  return (
    <section
      id="map"
      className="w-full"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Section label + heading */}
        <p
          className="text-sm font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          Visit Us
        </p>
        <h2
          className="text-3xl sm:text-4xl font-bold mb-10"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-text-inverse)",
          }}
        >
          Our Location
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact info & hours */}
          <div className="space-y-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <MapPin
                  size={20}
                  weight="bold"
                  style={{ color: "var(--color-accent)" }}
                />
              </div>
              <div>
                <p
                  className="font-semibold text-lg"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  {siteConfig.address.street}
                </p>
                <p style={{ color: "var(--color-text-muted)" }}>
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <Phone
                  size={20}
                  weight="bold"
                  style={{ color: "var(--color-accent)" }}
                />
              </div>
              <div>
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-lg transition-colors duration-200"
                  style={{ color: "var(--color-accent)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--color-text-inverse)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                >
                  {siteConfig.phone}
                </a>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  Tap to call
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <Clock
                  size={20}
                  weight="bold"
                  style={{ color: "var(--color-accent)" }}
                />
              </div>
              <div className="space-y-1">
                <p
                  className="font-semibold text-lg mb-2"
                  style={{ color: "var(--color-text-inverse)" }}
                >
                  Hours
                </p>
                <div
                  className="space-y-1 text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <div className="flex justify-between gap-8">
                    <span>Monday &ndash; Thursday</span>
                    <span style={{ color: "var(--color-text-inverse)" }}>
                      {siteConfig.hours.weekday}
                    </span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Friday &ndash; Saturday</span>
                    <span style={{ color: "var(--color-text-inverse)" }}>
                      {siteConfig.hours.friday}
                    </span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span style={{ color: "var(--color-text-inverse)" }}>
                      {siteConfig.hours.sunday}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Get Directions button */}
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-all duration-200"
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
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 8px 24px oklch(0.55 0.2 250 / 0.3)";
              }}
            >
              <NavigationArrow size={18} weight="bold" />
              Get Directions
            </a>
          </div>

          {/* Right — Embedded map */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
            <iframe
              title={`Map to ${siteConfig.name}`}
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              width="100%"
              height="420"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
