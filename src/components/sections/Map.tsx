"use client";

import { Phone, MapPin, Clock } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

export default function Map() {
  const query = encodeURIComponent(siteConfig.address.full);

  return (
    <section
      id="map"
      className="w-full"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
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
            color: "var(--color-text-primary)",
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
                style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
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
                  style={{ color: "var(--color-text-primary)" }}
                >
                  {siteConfig.address.street}
                </p>
                <p style={{ color: "var(--color-text-secondary)" }}>
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
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
                    e.currentTarget.style.color = "var(--color-text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "var(--color-accent)";
                  }}
                >
                  {siteConfig.phone}
                </a>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Tap to call
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "rgba(0,0,0,0.05)" }}
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
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Hours
                </p>
                <div
                  className="space-y-1 text-sm"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <div className="flex justify-between gap-8">
                    <span>Monday &ndash; Saturday</span>
                    <span style={{ color: "var(--color-text-primary)" }}>
                      {siteConfig.hours.weekday}
                    </span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span>Sunday</span>
                    <span style={{ color: "var(--color-text-primary)" }}>
                      {siteConfig.hours.sunday}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right — Embedded map */}
          <div className="rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
            <iframe
              title={`Map to ${siteConfig.name}`}
              src={`https://www.google.com/maps?q=${query}&output=embed`}
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Service Area */}
        <div className="mt-14 pt-10" style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
          <h3
            className="text-2xl font-bold mb-2"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text-primary)",
            }}
          >
            Service Area
          </h3>
          <p
            className="mb-6"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We proudly serve Waterford Township and all surrounding communities, including:
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "Waterford Township",
              "Pontiac",
              "Clarkston",
              "White Lake",
              "West Bloomfield",
              "Bloomfield Hills",
              "Auburn Hills",
              "Lake Orion",
              "Commerce Township",
              "Sylvan Lake",
              "Keego Harbor",
              "Drayton Plains",
              "Union Lake",
              "Highland",
              "Oxford",
              "Rochester Hills",
              "Troy",
              "Farmington Hills",
            ].map((city) => (
              <span
                key={city}
                className="px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium"
                style={{
                  border: "1px solid rgba(0,0,0,0.12)",
                  color: "var(--color-text-primary)",
                  backgroundColor: "var(--color-surface-primary)",
                }}
              >
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
