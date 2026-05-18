import { siteConfig } from "@/lib/siteConfig";

export default function Map() {
  const query = encodeURIComponent(siteConfig.address.full);

  return (
    <section id="map" className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2
          className="text-2xl sm:text-3xl font-bold text-center mb-2"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-text-primary)",
          }}
        >
          Visit Us
        </h2>
        <p
          className="text-center mb-8"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {siteConfig.address.full}
        </p>
      </div>
      <iframe
        title={`Map to ${siteConfig.name}`}
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}
