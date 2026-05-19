import type { Metadata } from "next";
import { Phone, Envelope } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title:
    "Service Area | Auto Detailing Near You | Waterford Auto Shine | Waterford Township, MI",
  description:
    "Waterford Auto Shine serves Waterford Township, Pontiac, Clarkston, White Lake, West Bloomfield, Bloomfield Hills, Auburn Hills, and surrounding Oakland County communities. Professional auto detailing near you.",
  alternates: {
    canonical: "https://waterfordautoshine.com/service-area",
  },
  openGraph: {
    title: "Service Area | Auto Detailing Near You | Waterford Auto Shine",
    description:
      "Waterford Auto Shine serves Waterford Township, Pontiac, Clarkston, White Lake, West Bloomfield, and surrounding Oakland County communities.",
    url: "https://waterfordautoshine.com/service-area",
  },
};

const cities = [
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
];

export default function ServiceAreaPage() {
  return (
    <main>
      <section
        className="w-full"
        style={{ backgroundColor: "var(--color-surface-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--color-accent)" }}
          >
            Service Area
          </p>
          <h1
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--color-text-primary)",
            }}
          >
            Areas We Serve
          </h1>
          <p
            className="text-lg mb-10 max-w-2xl"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We proudly serve Waterford Township and all surrounding communities
            in Oakland County. Whether you&apos;re down the street or across the
            county, we&apos;re here to make your vehicle shine.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="rounded-xl px-5 py-4 text-sm sm:text-base font-medium"
                style={{
                  backgroundColor: "var(--color-surface-secondary)",
                  color: "var(--color-text-primary)",
                  border: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                {city}
              </div>
            ))}
          </div>

          <div
            className="mt-14 pt-10 text-center"
            style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
          >
            <h2
              className="text-2xl font-bold mb-3"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--color-text-primary)",
              }}
            >
              Visit Us
            </h2>
            <p
              className="mb-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {siteConfig.address.full}
            </p>
            <p className="flex items-center justify-center gap-2 mb-3">
              <Phone size={18} weight="bold" style={{ color: "var(--color-accent)" }} />
              <a
                href={siteConfig.phoneHref}
                className="font-semibold transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {siteConfig.phone}
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Envelope size={18} weight="bold" style={{ color: "var(--color-accent)" }} />
              <a
                href="mailto:Waterfordautoshine@gmail.com"
                className="font-semibold transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                Waterfordautoshine@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
