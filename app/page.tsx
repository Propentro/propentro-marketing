import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";
import { FeaturesSection } from "@/components/home/features-section";
import { Engineering } from "@/components/home/engineering";
import { Roadmap } from "@/components/home/roadmap";
import { AboutBuilder } from "@/components/home/about-builder";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <FeaturesSection />
      <Engineering />
      <Roadmap />
      <AboutBuilder />
    </>
  );
}
