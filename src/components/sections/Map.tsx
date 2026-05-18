"use client";

import { siteConfig } from "@/lib/siteConfig";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export default function Map() {
  return (
    <section
      id="location"
      className="py-16 sm:py-24"
      style={{ backgroundColor: "var(--color-surface-secondary)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection variant="fadeUp">
          <p
            className="font-mono text-xs uppercase tracking-[0.15em]"
            style={{ color: "var(--color-text-muted)" }}
          >
            Location
          </p>
          <h2
            className="mt-3 font-bold md:text-4xl lg:text-5xl text-3xl"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text-primary)",
            }}
          >
            Visit {siteConfig.name}
          </h2>
          <p
            className="mt-4 max-w-xl text-lg"
            style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}
          >
            {siteConfig.address.full}
          </p>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={0.1}>
          <div
            className="mt-10 overflow-hidden rounded-2xl"
            style={{
              border: "1px solid var(--color-border)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <iframe
              title={`${siteConfig.name} location on Google Maps`}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.8!2d-83.3826!3d42.6614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s3496+Pontiac+Lake+Rd%2C+Waterford+Township%2C+MI+48328!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>

        {/* NAP block for SEO */}
        <AnimatedSection variant="fadeUp" delay={0.2}>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: "var(--color-text-muted)" }}
              >
                Address
              </p>
              <p
                className="mt-2 text-base"
                style={{ color: "var(--color-text-primary)" }}
              >
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.state}{" "}
                {siteConfig.address.zip}
              </p>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: "var(--color-text-muted)" }}
              >
                Phone
              </p>
              <a
                href={siteConfig.phoneHref}
                className="mt-2 block text-base font-medium"
                style={{ color: "var(--color-accent)" }}
              >
                {siteConfig.phone}
              </a>
            </div>
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: "var(--color-surface)" }}
            >
              <p
                className="text-sm font-bold uppercase tracking-wide"
                style={{ color: "var(--color-text-muted)" }}
              >
                Hours
              </p>
              <p
                className="mt-2 text-base"
                style={{ color: "var(--color-text-primary)" }}
              >
                Mon&ndash;Sat: {siteConfig.hours.weekday}
                <br />
                Sunday: {siteConfig.hours.sunday}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
