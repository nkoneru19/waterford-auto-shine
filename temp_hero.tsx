"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { siteConfig } from "@/lib/siteConfig";

const easeOutQuart = [0.25, 1, 0.5, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easeOutQuart, delay },
  };
}

const inputStyle: React.CSSProperties = {
  borderColor: "var(--color-border)",
  backgroundColor: "var(--color-surface-secondary)",
  color: "var(--color-text-primary)",
};

function InputFocusHandlers() {
  return {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "var(--color-accent)";
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      e.currentTarget.style.borderColor = "var(--color-border)";
    },
  };
}

export default function Hero() {
  const focusHandlers = InputFocusHandlers();

  return (
    <section className="relative flex items-center bg-[var(--color-surface)] overflow-hidden pt-20 pb-8 md:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Left — Text content */}
        <div>
          {/* Eyebrow */}
          <motion.p
            {...fadeUp(0)}
            className="hidden lg:block font-mono text-xs uppercase tracking-[0.15em] mb-8"
            style={{ color: "var(--color-text-muted)" }}
          >
            Professional Detailing &middot; Waterford Township, MI
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0)}
            className="font-[var(--font-heading)] font-bold tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", color: "var(--color-text-primary)" }}
          >
            Waterford&apos;s{" "}
