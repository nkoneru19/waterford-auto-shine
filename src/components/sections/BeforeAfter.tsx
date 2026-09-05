"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type Comparison = {
  id: string;
  label: string;
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
};

const comparisons: Comparison[] = [
  {
    id: "front",
    label: "Front",
    beforeSrc: "/images/before-after/front-before.webp",
    afterSrc: "/images/before-after/front-after.webp",
    beforeAlt:
      "Black Kia Sorento covered in road dust before a Complete Detail at Waterford Auto Shine",
    afterAlt:
      "Black Kia Sorento with clean, glossy paint after a Complete Detail at Waterford Auto Shine in Waterford, MI",
  },
  {
    id: "side",
    label: "Side",
    beforeSrc: "/images/before-after/side-before.webp",
    afterSrc: "/images/before-after/side-after.webp",
    beforeAlt:
      "Side of a Kia Sorento with dirty doors and rocker panels before detailing in Waterford Township, MI",
    afterAlt:
      "Side of a Kia Sorento with spotless doors and shined tires after detailing in Waterford Township, MI",
  },
  {
    id: "rear",
    label: "Rear",
    beforeSrc: "/images/before-after/rear-before.webp",
    afterSrc: "/images/before-after/rear-after.webp",
    beforeAlt:
      "Rear of a Kia Sorento with a dusty tailgate and hazy rear window before an exterior detail",
    afterAlt:
      "Rear of a Kia Sorento with a clean tailgate and clear rear window after an exterior detail",
  },
  {
    id: "interior",
    label: "Interior",
    beforeSrc: "/images/before-after/interior-before.webp",
    afterSrc: "/images/before-after/interior-after.webp",
    beforeAlt:
      "Driver footwell carpet full of dirt and debris before an interior detail at Waterford Auto Shine",
    afterAlt:
      "Driver footwell carpet shampooed and extracted clean after an interior detail at Waterford Auto Shine",
  },
];

function CompareSlider({ item }: { item: Comparison }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      isDragging.current = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const stopDragging = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPosition((p) => Math.max(0, p - step));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setPosition((p) => Math.min(100, p + step));
    } else if (e.key === "Home") {
      e.preventDefault();
      setPosition(0);
    } else if (e.key === "End") {
      e.preventDefault();
      setPosition(100);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      role="slider"
      tabIndex={0}
      aria-label="Before and after comparison. Drag left to see the before, right to see the after."
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      aria-valuetext={`${Math.round(position)}% before`}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize select-none touch-none outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-surface-dark)]"
      style={{ boxShadow: "0 20px 40px oklch(0 0 0 / 0.3)" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={stopDragging}
      onPointerCancel={stopDragging}
      onKeyDown={handleKeyDown}
    >
      {/* After (full background) */}
      <Image
        src={item.afterSrc}
        alt={item.afterAlt}
        fill
        priority={false}
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 850px"
        draggable={false}
      />

      {/* Before (clipped to the left of the handle) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={item.beforeSrc}
          alt={item.beforeAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 66vw, 850px"
          draggable={false}
        />
      </div>

      {/* Divider + handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] pointer-events-none"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          backgroundColor: "white",
          boxShadow: "0 0 8px oklch(0 0 0 / 0.5)",
        }}
      >
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "white",
            boxShadow: "0 2px 12px oklch(0 0 0 / 0.35)",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            style={{ color: "var(--color-surface-dark)" }}
          >
            <path
              d="M8 6L3 11L8 16M14 6L19 11L14 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <span
        className="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider pointer-events-none"
        style={{ backgroundColor: "oklch(0 0 0 / 0.65)", color: "white" }}
      >
        Before
      </span>
      <span
        className="absolute top-4 right-4 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)", color: "white" }}
      >
        After
      </span>
    </div>
  );
}

export default function BeforeAfter() {
  const [active, setActive] = useState(0);
  const current = comparisons[active];

  return (
    <section
      id="results"
      className="relative py-16 sm:py-24 aurora-glow grid-texture"
      style={{ backgroundColor: "var(--color-surface-dark)" }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          {/* Left: text + angle picker */}
          <AnimatedSection>
            <p
              className="font-mono text-xs uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--color-accent-light)" }}
            >
              Real Results
            </p>
            <h2
              className="font-[var(--font-heading)] text-3xl md:text-4xl font-bold"
              style={{ color: "var(--color-text-inverse)" }}
            >
              See The Difference
            </h2>
            <p
              className="mt-4 text-base leading-relaxed"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              This Kia Sorento came in for a Complete Detail. Drag the handle
              to compare how it arrived with how it left.
            </p>

            <div
              className="mt-8 flex flex-row flex-wrap md:flex-col gap-2"
              role="tablist"
              aria-label="Choose an angle"
            >
              {comparisons.map((comp, i) => {
                const isActive = active === i;
                return (
                  <button
                    key={comp.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(i)}
                    className="text-left px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-200 flex-1 md:flex-none"
                    style={{
                      backgroundColor: isActive
                        ? "rgba(255,255,255,0.08)"
                        : "transparent",
                      color: isActive
                        ? "var(--color-text-inverse)"
                        : "rgba(255,255,255,0.5)",
                      border: isActive
                        ? "1px solid rgba(255,255,255,0.14)"
                        : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {comp.label}
                  </button>
                );
              })}
            </div>
          </AnimatedSection>

          {/* Right: slider */}
          <AnimatedSection delay={0.15}>
            <CompareSlider key={current.id} item={current} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
