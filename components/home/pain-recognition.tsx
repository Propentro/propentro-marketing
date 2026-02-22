"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Landmark,
  Wrench,
  ShieldAlert,
  FileSpreadsheet,
  Phone,
} from "lucide-react";

const painCards = [
  {
    icon: Landmark,
    text: "Every morning, you open your bank app and start cross-referencing payments to tenants. 45 minutes later, you\u2019re still not 100% sure Unit 7C paid.",
  },
  {
    icon: Wrench,
    text: "A tenant WhatsApps you a photo of a leak at 11pm. You save it somewhere, text a plumber, call the landlord\u2026 and forget to follow up three days later.",
  },
  {
    icon: ShieldAlert,
    text: "The gas cert for Block A expired 3 weeks ago. You only find out when the landlord asks  or worse, when the inspector shows up.",
  },
  {
    icon: FileSpreadsheet,
    text: "Open Excel. Calculate rent minus expenses minus your fee. Do it 30 times. Format into PDFs. Email each landlord. Lose a full day.",
  },
  {
    icon: Phone,
    text: "\u2018Is the rent in?\u2019 Five calls like this every day. Each takes 10 minutes to answer a question that should take 2 seconds.",
  },
];

export function PainRecognition() {
  const ref = useScrollAnimation();

  return (
    <section
      id="pain-recognition"
      ref={ref}
      className="relative bg-surface-dark py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(264 30% 95%) 1px, transparent 1px), linear-gradient(90deg, hsl(264 30% 95%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <p className="animate-on-scroll section-label text-accent justify-center mb-6">
            SOUND FAMILIAR?
          </p>
          <h2 className="animate-on-scroll font-display text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] tracking-tight text-text-on-dark text-balance">
            This Is Your Monday Morning
            <span className="font-light">.</span>
          </h2>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
          {painCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`animate-on-scroll group relative rounded-xl border border-[#1e1b2e] bg-surface-dark-secondary p-6 md:p-7 transition-all duration-300 hover:border-primary/30 ${
                  i === painCards.length - 1 ? "md:col-span-2 md:max-w-lg md:mx-auto" : ""
                }`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: "radial-gradient(ellipse at center, hsl(263 70% 42% / 0.06) 0%, transparent 70%)",
                }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm md:text-[15px] leading-relaxed text-text-muted-on-dark">
                    {card.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
