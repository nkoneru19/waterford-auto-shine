"use client";

import { Phone, MapPin, ChatCircle } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

export function StickyMobileCTA() {
  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden safe-area-pb"
      style={{
        backgroundColor: "color-mix(in oklch, var(--color-surface) 90%, transparent)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="grid grid-cols-3"
        style={{ borderColor: "var(--color-border)" }}
      >
        {/* Call */}
        <a
          href={siteConfig.phoneHref}
          className="flex flex-col items-center justify-center gap-1 transition-colors"
          style={{
            color: "var(--color-text-secondary)",
            minHeight: "56px",
            transitionDuration: "200ms",
            transitionTimingFunction: "var(--ease-out-quart)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-primary)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-secondary)"; }}
        >
          <Phone size={18} />
          <span className="text-xs font-medium">Call</span>
        </a>

        {/* Get Quote */}
        <button
          onClick={scrollToContact}
          className="flex flex-col items-center justify-center gap-1"
          style={{
            backgroundColor: "var(--color-accent)",
            color: "var(--color-text-inverse)",
            minHeight: "56px",
          }}
        >
          <ChatCircle size={18} weight="bold" />
          <span className="text-xs font-semibold">Get Quote</span>
        </button>

        {/* Directions */}
        <a
          href={siteConfig.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 transition-colors"
          style={{
            color: "var(--color-text-secondary)",
            minHeight: "56px",
            transitionDuration: "200ms",
            transitionTimingFunction: "var(--ease-out-quart)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--color-text-primary)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--color-text-secondary)"; }}
        >
          <MapPin size={18} />
          <span className="text-xs font-medium">Directions</span>
        </a>
      </div>
    </div>
  );
}
