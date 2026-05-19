import type { Metadata } from "next";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Terms of Service | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Terms of service for Waterford Auto Shine in Waterford Township, MI. Review our terms and conditions for using our website and detailing services.",
  alternates: {
    canonical: "https://waterfordautoshine.com/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Waterford Auto Shine",
    description:
      "Terms of service for Waterford Auto Shine in Waterford Township, MI. Review our terms and conditions for using our website and detailing services.",
    url: "https://waterfordautoshine.com/terms-of-service",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1
        className="text-3xl sm:text-4xl font-bold mb-8"
        style={{
          fontFamily: "var(--font-heading)",
          color: "var(--color-text-primary)",
        }}
      >
        Terms of Service
      </h1>

      <div
        className="space-y-6 text-base leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        <p>
          <strong>Last Updated:</strong> May 19, 2026
        </p>

        <p>
          Welcome to the {siteConfig.name} website. By accessing or using our website and services, you agree to the following terms and conditions.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Services
        </h2>
        <p>
          {siteConfig.name} provides professional auto detailing services in Waterford Township, MI. Service descriptions and pricing on our website are for informational purposes and may vary based on vehicle condition, size, and specific requirements. Final pricing is determined at the time of service.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Appointments &amp; Cancellations
        </h2>
        <p>
          Appointments can be scheduled by phone or through our website. We appreciate advance notice if you need to cancel or reschedule. We reserve the right to charge a fee for no-shows or late cancellations.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Liability
        </h2>
        <p>
          While we take great care with every vehicle, {siteConfig.name} is not responsible for pre-existing damage, mechanical issues, or personal items left in vehicles. We recommend removing valuables before your appointment.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Website Use
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree to use our website for lawful purposes only.</li>
          <li>All content on this website is the property of {siteConfig.name} and may not be reproduced without permission.</li>
          <li>We reserve the right to update or modify website content at any time without notice.</li>
        </ul>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Satisfaction
        </h2>
        <p>
          Your satisfaction is our priority. If you are not satisfied with our services, please contact us within 48 hours at{" "}
          <a
            href={siteConfig.phoneHref}
            className="underline"
            style={{ color: "var(--color-primary)" }}
          >
            {siteConfig.phone}
          </a>{" "}
          and we will work with you to make it right.
        </p>

        <h2
          className="text-xl font-semibold pt-4"
          style={{ color: "var(--color-text-primary)" }}
        >
          Changes to These Terms
        </h2>
        <p>
          We may update these Terms of Service from time to time. Continued use of our website after changes constitutes acceptance of the revised terms.
        </p>
      </div>
    </main>
  );
}
