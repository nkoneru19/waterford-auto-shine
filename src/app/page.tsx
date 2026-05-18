import DesktopEffects from "@/components/sections/DesktopEffects";
import Hero from "@/components/sections/Hero";
import GoogleReviews from "@/components/sections/GoogleReviews";
import TrustMarquee from "@/components/sections/TrustMarquee";
import Services from "@/components/sections/Services";
import Comparison from "@/components/sections/Comparison";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <DesktopEffects />
      <Hero />
      <GoogleReviews />
      <TrustMarquee />
      <Services />
      <Comparison />
      <Process />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
