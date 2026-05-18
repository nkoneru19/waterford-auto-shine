"use client";

const items = [
  "Hand Wash Only",
  "Locally Owned",
  "4.8 Star Rating",
  "45+ Google Reviews",
  "Cars, Trucks & SUVs",
  "Detailing from $45",
  "Satisfaction Guaranteed",
  "10+ Years Experience",
];

function MarqueeContent() {
  return (
    <>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-4 shrink-0">
          <span>{item}</span>
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: "var(--color-accent)" }}
            aria-hidden="true"
          />
        </span>
      ))}
    </>
  );
}

const marqueeStyle: React.CSSProperties = {
  animation: "marquee-left 40s linear infinite",
};

export default function TrustMarquee() {
  return (
    <section
      className="py-8 overflow-hidden border-y"
      style={{ borderColor: "var(--color-border)" }}
    >
      <div
        className="group flex gap-4 font-mono uppercase text-xs tracking-[0.15em]"
        style={{ color: "var(--color-text-muted)" }}
      >
        <div
          className="flex gap-4 shrink-0 group-hover:[animation-play-state:paused]"
          style={marqueeStyle}
        >
          <MarqueeContent />
        </div>
        <div
          className="flex gap-4 shrink-0 group-hover:[animation-play-state:paused]"
          style={marqueeStyle}
          aria-hidden="true"
        >
          <MarqueeContent />
        </div>
      </div>
    </section>
  );
}
