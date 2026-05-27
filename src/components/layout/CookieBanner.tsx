"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 md:bottom-6 md:left-6 md:right-auto md:max-w-sm"
    >
      <div
        className="flex flex-col gap-3 px-5 py-4 md:rounded-2xl shadow-xl"
        style={{
          backgroundColor: "var(--color-surface-dark)",
          border: "1px solid var(--color-border-dark)",
        }}
      >
        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
          We use cookies to analyze site traffic via Google Analytics. No personal data is sold or shared.{" "}
          <Link
            href="/privacy-policy"
            className="underline"
            style={{ color: "var(--color-accent-light)" }}
          >
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={accept}
          className="self-start rounded-lg px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--color-accent)" }}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
