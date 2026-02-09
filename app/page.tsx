import { Hero } from "@/components/home/hero";
import { Story } from "@/components/home/story";
import { Platform } from "@/components/home/platform";
import { Experience } from "@/components/home/experience";
import { Vision } from "@/components/home/vision";
import { Credibility } from "@/components/home/credibility";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Story />
      <Platform />
      <Experience />
      <Vision />
      <Credibility />
      <CTA />
    </>
  );
}
