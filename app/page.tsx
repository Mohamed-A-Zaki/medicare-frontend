import Hero from "@/components/Hero";
import About from "@/sections/About";
import HowItWorks from "@/sections/HowItWorks";
import Services from "@/sections/Services/Services";
import Features from "@/sections/Features";
import Doctors from "@/sections/Doctors";
import Faq from "@/sections/Faq/Faq";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <About />
      <Services />
      <Features />
      <Doctors />
      <Faq />
      <Testimonials />
    </>
  );
}
