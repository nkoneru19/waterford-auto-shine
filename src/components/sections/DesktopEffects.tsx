"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 h-[3px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, var(--color-accent-dark), var(--color-accent-light))",
      }}
    />
  );
}

export default function DesktopEffects() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return <ScrollProgressBar />;
}
