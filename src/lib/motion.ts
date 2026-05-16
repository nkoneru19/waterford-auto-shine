import type { Variants } from "framer-motion";

export const easeOutQuart: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const VIEWPORT_ONCE = { once: true, amount: 0.2 };

export const variants: Record<string, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOutQuart } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: easeOutQuart } },
  },
  slideFromLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutQuart } },
  },
  slideFromRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOutQuart } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  },
};
