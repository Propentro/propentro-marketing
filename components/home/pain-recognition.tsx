"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Banknote, Wrench, ShieldAlert, FileSpreadsheet, Phone } from "lucide-react";

const painCards = [
  {
    icon: Banknote,
    text: "Every morning, you open your bank app and start cross-referencing payments to tenants. 45 minutes later, you\u2019re still not 100% sure Unit 7C paid.",
  },
  {
    icon: Wrench,
    text: "A tenant WhatsApps you a photo of a leak at 11pm. You save it somewhere, text a plumber, call the landlord\u2026 and forget to follow up three days later.",
  },
  {
    icon: ShieldAlert,
    text: "The gas cert for Block A expired 3 weeks ago. You only find out when the landlord asks \u2014 or worse, when the inspector shows up.",
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
      id="pain"
      ref={ref}
      className="relative bg-surface-dark py-24 md:py-32 overflow-hidden"
    >
      {/* Subtle grain */}
      <div className="grain-texture absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="animate-on-scroll section-label text-accent justify-center mb-5">
            SOUND FAMILIAR?
          </p>
        </div>

        <div className="stagger-children grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {painCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div
                key={i}
                className={`animate-on-scroll group relative p-6 rounded-xl border border-[#2a2640] bg-surface-dark-secondary hover:border-[#3d3660] transition-all duration-300 ${
                  i === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(ellipse at center, hsl(263 70% 42% / 0.06) 0%, transparent 70%)",
                  }}
                />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-[#5B21B6]/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm leading-relaxed text-text-muted-on-dark">
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
