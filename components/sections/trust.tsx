"use client";

import React from "react";
import { ShieldCheck, Lock, Globe, FileCheck } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const trustSignals = [
  {
    icon: Globe,
    label: "Built in Ireland, for Ireland",
  },
  {
    icon: ShieldCheck,
    label: "Enterprise-grade security",
  },
  {
    icon: FileCheck,
    label: "GDPR compliant",
  },
  {
    icon: Lock,
    label: "Bank-level encryption",
  },
];

export function Trust() {
  return (
    <section className="relative bg-[hsl(0,0%,99%)] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[hsl(240,20%,10%)] tracking-tight">
            Trusted by Property Management Professionals
          </h2>
        </FadeIn>

        <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-14">
          {trustSignals.map((signal) => (
            <StaggerItem key={signal.label}>
              <div className="flex items-center gap-3 text-[hsl(240,10%,45%)]">
                <signal.icon className="w-5 h-5 text-[hsl(258,65%,38%)]" />
                <span className="text-sm font-medium">{signal.label}</span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.3} className="text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-lg border border-[hsl(240,10%,90%)] bg-white p-8 md:p-10 shadow-sm max-w-lg">
            <p className="text-lg font-semibold text-[hsl(240,20%,10%)]">
              Join the Early Access Program
            </p>
            <p className="text-sm text-[hsl(240,10%,45%)] leading-relaxed">
              Be among the first property management firms to experience
              Propentro. Early access members help shape the product and receive
              priority onboarding.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md bg-purple-primary hover:bg-purple-light text-white text-sm font-medium transition-colors duration-200"
            >
              Request Early Access &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
