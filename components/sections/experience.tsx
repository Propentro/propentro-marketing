"use client";

import React from "react";
import { FadeIn } from "@/components/motion-wrapper";

const steps = [
  {
    time: "09:00",
    title: "Your Dashboard, Not Your Inbox",
    description:
      "Open Propentro. Everything\u2019s already there. Overnight rent payments auto-matched to tenants. Three BER certs expiring in 30 days flagged amber. One maintenance job auto-assigned because it was under the landlord\u2019s \u20AC200 threshold. Your morning used to start with 45 minutes of bank statement checking. Now it starts with a coffee.",
  },
  {
    time: "09:15",
    title: "Arrears That Chase Themselves",
    description:
      "The arrears dashboard shows 4 tenants in arrears. Two received automated reminders at day 3 and day 7 \u2014 both paid overnight. One is on a payment plan that\u2019s being tracked. You only need to handle the fourth one personally. That\u2019s 3 calls you didn\u2019t have to make.",
  },
  {
    time: "10:00",
    title: "A Landlord Calls (But Not About the Rent)",
    description:
      "\u201CIs the rent in?\u201D used to be your most-heard question. Now landlords check their portal. When they do call, it\u2019s about real decisions. You pull up their portfolio in 2 seconds: all properties, current tenants, financials, active maintenance. You sound like you\u2019re on top of everything \u2014 because you are.",
  },
  {
    time: "14:00",
    title: "Rent Review Season, Not Rent Review Hell",
    description:
      "42 leases due for review this quarter. Propentro already calculated the maximum RPZ-compliant increase for each, generated the notices with correct notice periods, and queued them for your approval. What used to take 3 full days takes 45 minutes.",
  },
  {
    time: "17:00",
    title: "Month-End in 20 Minutes",
    description:
      "Click \u201CGenerate All Statements\u201D. 30 professional, branded landlord statements \u2014 rent collected, itemized expenses, your management fee, net payout. Batch email. What used to steal an entire day is done before you leave the office.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[hsl(0,0%,99%)] py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-16">
          <p className="section-label text-[hsl(258,60%,55%)] mb-4">
            The Experience
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[hsl(240,20%,10%)] tracking-tight">
            This Isn&rsquo;t a Demo. This Is Tuesday.
          </h2>
          <p className="mt-4 text-lg text-[hsl(240,10%,45%)] max-w-xl mx-auto">
            Here&rsquo;s what property management looks like when your tools
            actually work together.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[39px] md:left-[47px] top-0 bottom-0 w-px bg-[hsl(240,10%,90%)]" />

            <div className="space-y-12">
              {steps.map((step, i) => (
                <FadeIn key={step.time} delay={i * 0.1}>
                  <div className="relative flex gap-6 md:gap-8">
                    {/* Time badge */}
                    <div className="shrink-0 relative z-10">
                      <div className="w-20 md:w-24 h-8 rounded-full bg-[hsl(258,65%,38%)] flex items-center justify-center">
                        <span className="text-xs font-semibold text-white">
                          {step.time}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="pb-2 pt-0.5">
                      <h3 className="text-lg font-semibold text-[hsl(240,20%,10%)] mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[hsl(240,10%,45%)] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
