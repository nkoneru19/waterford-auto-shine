"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

function CompareSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none"
      style={{ boxShadow: "0 20px 40px oklch(0 0 0 / 0.3)" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
    >
      {/* After image (full background) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 80vw"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 80vw"
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px]"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          backgroundColor: "white",
          boxShadow: "0 0 8px oklch(0 0 0 / 0.5)",
        }}
      >
        {/* Handle */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 12px oklch(0 0 0 / 0.3)",
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            style={{ color: "var(--color-surface-dark)" }}
          >
            <path
              d="M6 10L3 7M3 7L6 4M3 7H9M14 10L17 7M17 7L14 4M17 7H11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              transform="translate(0, 3)"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
        style={{
          backgroundColor: "oklch(0 0 0 / 0.6)",
          color: "white",
          backdropFilter: "blur(8px)",
        }}
      >
        Before
      </span>
      <span
        className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider"
        style={{
          backgroundColor: "var(--color-accent)",
          color: "white",
        }}
      >
        After
      </span>
    </div>
  );
}

const comparisons = [
  {
    beforeSrc: "/images/before-1.jpg",
    afterSrc: "/images/after-1.jpg",
    beforeAlt: "Dirty car interior before professional interior detailing at Waterford Auto Shine",
    afterAlt: "Clean car interior after professional detailing service in Waterford, MI",
    label: "Interior Detail",
  },
  {
    beforeSrc: "/images/before-2.jpg",
    afterSrc: "/images/after-2.jpg",
    beforeAlt: "Faded car paint before paint correction detailing in Waterford Township, MI",
    afterAlt: "Restored car paint after professional paint correction at Waterford Auto Shine",
    label: "Paint Correction",
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="results"
      className="relative py-16 sm:py-24 aurora-glow grid-texture"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          {/* Left — Text + tabs */}
          <AnimatedSection>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-accent-light)" }}
            >
              Results
            </p>
            <h2
              className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-text-inverse)" }}
            >
              See The Difference
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Drag the slider to compare before and after. Every vehicle gets
              the same obsessive attention to detail.
            </p>

            {/* Tabs */}
            <div className="mt-8 flex flex-col gap-2">
              {comparisons.map((comp, i) => (
                <button
                  key={comp.label}
                  onClick={() => setActive(i)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
                  style={{
                    backgroundColor:
                      active === i
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                    color:
                      active === i
                        ? "var(--color-text-inverse)"
                        : "rgba(255,255,255,0.45)",
                    border:
                      active === i
                        ? "1px solid rgba(255,255,255,0.12)"
                        : "1px solid transparent",
                  }}
                >
                  {comp.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Right — Slider */}
          <AnimatedSection delay={0.15}>
            <CompareSlider
              key={active}
              beforeSrc={comparisons[active].beforeSrc}
              afterSrc={comparisons[active].afterSrc}
              beforeAlt={comparisons[active].beforeAlt}
              afterAlt={comparisons[active].afterAlt}
            />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
