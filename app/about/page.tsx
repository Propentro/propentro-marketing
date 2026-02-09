import type { Metadata } from "next";
import { AboutHero } from "@/components/about/hero";
import { Problem } from "@/components/about/problem";
import { Principles } from "@/components/about/principles";
import { AboutVision } from "@/components/about/vision";
import { CTA } from "@/components/home/cta";

export const metadata: Metadata = {
  title: "About — Propentro",
  description:
    "Propentro was built from real operational experience — not assumptions. We build what property managers actually need.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Problem />
      <Principles />
      <AboutVision />
      <CTA />
    </>
  );
}
