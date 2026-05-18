"use client";

import { CaretDown } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const faqs = [
  {
    question: "How long does a detail take?",
    answer:
      "A detail typically takes 2-4 hours depending on the size and condition of your vehicle. We never rush — your car gets the time it deserves.",
  },
  {
    question: "Do you offer mobile detailing?",
    answer:
      "Currently, all services are performed at our shop at 3496 Pontiac Lake Rd. This allows us to use our full range of professional equipment for the best results.",
  },
  {
    question: "What's the difference between Interior Detail and Complete Detail?",
    answer:
      "Our Interior Detail covers everything inside — vacuum, steam cleaning, carpet shampoo, leather conditioning, and more. The Complete Detail adds a full exterior package: hand wash, door jambs, rims and tires, and hand wax.",
  },
  {
    question: "What types of vehicles do you detail?",
    answer:
      "We detail sedans, trucks, SUVs, and minivans. Pricing starts at $75 for an exterior detail, $200 for interior, and $325 for a complete detail, varying by vehicle size.",
  },
  {
    question: "How often should I get my vehicle detailed?",
    answer:
      "We recommend a full detail every 3-6 months. Regular detailing protects your interior and exterior, and maintains your vehicle's value.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Appointments are recommended, especially during busy seasons. Call us at (248) 618-8999 or use the contact form to schedule.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-[var(--color-surface)]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — left aligned */}
        <AnimatedSection>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight text-[var(--color-text-primary)] mb-12">
            Common Questions
          </h2>
        </AnimatedSection>

        {/* FAQ accordion */}
        <AnimatedSection delay={0.1}>
          <div>
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group border-b border-[var(--color-text-muted)]/20"
              >
                <summary className="flex items-center justify-between py-5 cursor-pointer list-none font-[var(--font-heading)] text-lg font-semibold text-[var(--color-text-primary)] transition-colors duration-200 hover:text-[var(--color-accent)]">
                  <span>{faq.question}</span>
                  <CaretDown
                    size={20}
                    weight="bold"
                    className="shrink-0 ml-4 transition-transform duration-200 ease-[cubic-bezier(0.25,1,0.5,1)] group-open:rotate-180"
                    style={{ color: "var(--color-accent)" }}
                  />
                </summary>
                <p className="pb-4 leading-relaxed max-w-[65ch] text-[var(--color-text-secondary)]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
