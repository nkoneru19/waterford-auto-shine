"use client";

import { motion } from "framer-motion";
import { variants, VIEWPORT_ONCE } from "@/lib/motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  variant = "fadeUp",
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      variants={variants[variant]}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
