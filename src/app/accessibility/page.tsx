import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Accessibility | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Accessibility statement for Waterford Auto Shine. Learn about our commitment to making our website accessible to everyone.",
  alternates: {
    canonical: "https://waterfordautoshine.com/accessibility",
  },
  openGraph: {
    title: "Accessibility | Waterford Auto Shine",
    description:
      "Accessibility statement for Waterford Auto Shine. Learn about our commitment to making our website accessible to everyone.",
    url: "https://waterfordautoshine.com/accessibility",
  },
};

export default function AccessibilityPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-8"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text-primary)",
        }}
      >
        Accessibility
      </h1>

      <div
        className="space-y-6 text-base leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          <strong>Last Updated:</strong> May 26, 2026
        </p>

        <p>
          {siteConfig.name} is committed to ensuring that our website is accessible to everyone, including people with disabilities. We strive to provide an inclusive digital experience for all visitors.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Our Commitment
        </h2>
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines help make web content more accessible to people with a wide range of disabilities, including visual, auditory, motor, and cognitive impairments.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          What We Do
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Use clear, readable fonts and sufficient color contrast</li>
          <li>Provide descriptive alt text for images</li>
          <li>Ensure keyboard navigation throughout the site</li>
          <li>Use semantic HTML for screen reader compatibility</li>
          <li>Design responsive layouts that work across devices and screen sizes</li>
        </ul>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Physical Accessibility
        </h2>
        <p>
          Our location at {siteConfig.address.street}, {siteConfig.address.city}, {siteConfig.address.state} is accessible to customers with mobility needs. If you have specific accessibility requirements, please call us ahead of your visit and we will do our best to accommodate you.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Feedback
        </h2>
        <p>
          We welcome your feedback on the accessibility of our website. If you encounter any barriers or have suggestions for improvement, please contact us at{" "}
          <a
            href={siteConfig.phoneHref}
            className="underline"
            style={{ color: "var(--color-primary)" }}
          >
            {siteConfig.phone}
          </a>
          . We take all feedback seriously and will work to address any issues.
        </p>
      </div>
    </main>
  );
}
