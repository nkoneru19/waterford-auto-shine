"use client";

import { CaretDown } from "@phosphor-icons/react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const faqs = [
  // Existing FAQs
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
      "We detail sedans, trucks, SUVs, and minivans. Exterior details range from $125 to $175, interior details from $200 to $275, and complete details from $325 to $375, depending on vehicle size.",
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
  // Additional SEO FAQs
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept cash, all major credit cards, and debit cards. Payment is due upon completion of the service.",
  },
  {
    question: "Do you detail boats, motorcycles, or RVs?",
    answer:
      "We specialize in cars, trucks, SUVs, and minivans. For other vehicle types, give us a call at (248) 618-8999 and we'll let you know if we can help.",
  },
  {
    question: "Is auto detailing worth it?",
    answer:
      "Absolutely. Professional detailing removes contaminants that regular washing misses, protects your paint, prevents interior wear, and can add hundreds to your vehicle's resale value. It's one of the best investments you can make in maintaining your car.",
  },
  {
    question: "What's the difference between a car wash and auto detailing?",
    answer:
      "A car wash is a quick surface-level clean. Auto detailing is a thorough, hands-on process that deep cleans, restores, and protects every surface of your vehicle — inside and out. We hand wash every car and use professional-grade products for lasting results.",
  },
  {
    question: "Can detailing remove scratches from my car?",
    answer:
      "Light scratches and swirl marks can often be removed or significantly reduced through paint correction and polishing. Deep scratches that go through the clear coat may require professional body work. Bring your car by and we'll give you an honest assessment.",
  },
  {
    question: "How do I prepare my car for a detail?",
    answer:
      "Just remove any personal belongings and valuables from your vehicle before dropping it off. We'll take care of the rest. No need to pre-clean or wash — that's our job!",
  },
  {
    question: "Do you offer any warranties or guarantees?",
    answer:
      "We stand behind our work 100%. If you're not satisfied with the results, let us know within 48 hours and we'll make it right at no extra charge.",
  },
  {
    question: "Where are you located in Waterford Township?",
    answer:
      "We're located at 3496 Pontiac Lake Rd, Waterford Township, MI 48328, right by the intersection of Pontiac Lake Rd and Airport Rd. Easy to find and plenty of parking.",
  },
  {
    question: "What are your hours of operation?",
    answer:
      "We're open Monday through Thursday 9 AM to 5 PM, Friday and Saturday 9 AM to 3 PM, and closed on Sundays.",
  },
  {
    question: "Can detailing help with pet hair removal?",
    answer:
      "Yes! Our interior detailing includes thorough vacuuming and steam cleaning that effectively removes pet hair from seats, carpets, and hard-to-reach crevices. We deal with pet hair all the time — it's one of our specialties.",
  },
];

export default function FAQPageContent() {
  return (
    <>
      <section className="py-16 sm:py-24 bg-[var(--color-surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page header */}
          <AnimatedSection>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-text-muted)] mb-4">
              FAQ
            </p>
            <h1 className="text-4xl md:text-5xl font-[var(--font-heading)] font-bold tracking-tight text-[var(--color-text-primary)] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] mb-12 max-w-[60ch]">
              Everything you need to know about our auto detailing services in Waterford Township, MI.
            </p>
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

          {/* CTA */}
          <AnimatedSection delay={0.2}>
            <div className="mt-12 text-center">
              <p className="text-[var(--color-text-secondary)] mb-4">
                Still have questions? We're happy to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+12486188999"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Call (248) 618-8999
                </a>
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-colors duration-200 border-2"
                  style={{
                    borderColor: "var(--color-accent)",
                    color: "var(--color-accent)",
                  }}
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <Footer />
    </>
  );
}
