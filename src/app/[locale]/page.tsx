import Hero from "@/components/sections/Hero";
import ClientLogos from "@/components/sections/ClientLogos";
import Audience from "@/components/sections/Audience";
import EngineShowcase from "@/components/sections/EngineShowcase";
import Metrics from "@/components/sections/Metrics";
import Landscape from "@/components/sections/Landscape";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Audience />
      <EngineShowcase />
      <Metrics />
      <Landscape />
      <HowItWorks />
      <CTA />
    </>
  );
}
