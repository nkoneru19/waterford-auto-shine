import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Privacy policy for Waterford Auto Shine in Waterford Township, MI. Learn how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://waterfordautoshine.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Waterford Auto Shine",
    description:
      "Privacy policy for Waterford Auto Shine in Waterford Township, MI. Learn how we collect, use, and protect your personal information.",
    url: "https://waterfordautoshine.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-8"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text-primary)",
        }}
      >
        Privacy Policy
      </h1>

      <div
        className="space-y-6 text-base leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          <strong>Last Updated:</strong> May 19, 2026
        </p>

        <p>
          {siteConfig.name} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) values your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or use our services.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Information We Collect
        </h2>
        <p>We may collect the following types of information:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Contact Information:</strong> Name, email address, phone number, and vehicle details you provide when requesting a quote or contacting us.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent, and referring sources.
          </li>
          <li>
            <strong>Cookies:</strong> We may use cookies and similar technologies to improve your browsing experience and analyze website traffic.
          </li>
        </ul>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To respond to your inquiries and provide quotes</li>
          <li>To schedule and deliver our detailing services</li>
          <li>To improve our website and customer experience</li>
          <li>To send occasional updates or promotions (only with your consent)</li>
        </ul>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Information Sharing
        </h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our website or conducting our business, as long as those parties agree to keep your information confidential.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Data Security
        </h2>
        <p>
          We implement reasonable security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Your Rights
        </h2>
        <p>
          You may request to access, update, or delete your personal information at any time by contacting us at{" "}
          <a
            href={siteConfig.phoneHref}
            className="underline"
            style={{ color: "var(--color-primary)" }}
          >
            {siteConfig.phone}
          </a>
          .
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Changes to This Policy
        </h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.
        </p>
      </div>
    </main>
  );
}
