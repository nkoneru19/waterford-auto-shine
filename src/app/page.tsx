import DesktopEffects from "@/components/sections/DesktopEffects";
import Hero from "@/components/sections/Hero";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Services from "@/components/sections/Services";
import Gallery from "@/components/sections/Gallery";
import Process from "@/components/sections/Process";
import WhyUs from "@/components/sections/WhyUs";
import Comparison from "@/components/sections/Comparison";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import FinalCTA from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <DesktopEffects />
      <Hero />
      <TrustMarquee />
      <Services />
      <Gallery />
      <Process />
      <WhyUs />
      <Comparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
    </>
  );
}
