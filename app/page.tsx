import { Hero } from "@/components/home/hero";
import { PainRecognition } from "@/components/home/pain-recognition";
import { TheShift } from "@/components/home/the-shift";
import { DayWithPropentro } from "@/components/home/day-with-propentro";
import { FindYourStartingPoint } from "@/components/home/find-your-starting-point";
import { TheNumbers } from "@/components/home/the-numbers";
import { BuiltForMarket } from "@/components/home/built-for-market";
import { Credibility } from "@/components/home/credibility";
import { CTA } from "@/components/home/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PainRecognition />
      <TheShift />
      <DayWithPropentro />
      <FindYourStartingPoint />
      <TheNumbers />
      <BuiltForMarket />
      <Credibility />
      <CTA />
    </>
  );
}
