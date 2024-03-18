import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services/Services";
import Features from "@/components/Features";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <About />
      <Services />
      <Features />
    </>
  );
}
