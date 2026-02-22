"use client";

import React from "react";
import {
  Landmark,
  TrendingUp,
  ClipboardList,
  Euro,
  Home,
  Scale,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";

const features = [
  {
    icon: Landmark,
    title: "RTB Compliance",
    description:
      "Automated tenancy registration reminders. Part 4 rights tracking. Notice of termination generation with legally correct notice periods based on tenancy duration.",
  },
  {
    icon: TrendingUp,
    title: "RPZ Rent Increases",
    description:
      "HICP formula calculator built in. System knows which properties are in Rent Pressure Zones and caps increases automatically. No Googling, no guessing.",
  },
  {
    icon: ClipboardList,
    title: "Irish Certifications",
    description:
      "BER certificate tracking with minimum rating alerts. Gas safety, fire safety, insurance expiry \u2014 all tracked with 90/60/30/14/7-day automated reminders.",
  },
  {
    icon: Euro,
    title: "Euro & Irish Banking",
    description:
      "Open Banking integration with Irish banks. Euro-denominated throughout. SEPA payment support. Your financials work the way Irish banking works.",
  },
  {
    icon: Home,
    title: "HAP & RAS Support",
    description:
      "Track HAP and RAS payments separately. Reconcile local authority payments against expected amounts. Handle split-payment tenancies cleanly.",
  },
  {
    icon: Scale,
    title: "RTB Dispute Ready",
    description:
      "Export a complete, timestamped timeline as a PDF evidence pack. Every communication, every notice, every payment \u2014 documented and defensible.",
  },
];

export function Ireland() {
  return (
    <section
      id="ireland"
      className="relative bg-[hsl(240,20%,4%)] py-24 md:py-32 border-t border-white/[0.04]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="section-label mb-4">Built for Ireland</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight max-w-4xl mx-auto">
            Not a US Product with an Irish Flag. Built from the Ground Up for
            How Property Management Works Here.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="group h-full rounded-lg border border-[hsl(240,15%,15%)] bg-[hsl(240,15%,8%)] p-6 hover:border-[hsl(258,60%,55%)]/30 transition-all duration-300 hover:-translate-y-0.5">
                <feature.icon className="w-6 h-6 text-[hsl(258,80%,65%)] mb-4" />
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[hsl(240,10%,65%)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <p className="text-sm text-[hsl(240,10%,55%)] max-w-2xl mx-auto leading-relaxed">
            UK compliance (Gas Safety, EICR, EPC, Section 21, MTD) is also
            supported for firms operating across both markets. Our architecture
            is designed for multi-jurisdiction expansion.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
