"use client";

import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/motion-wrapper";

const benefits = [
  "See your exact workflow automated",
  "No credit card required",
  "Live in under a week",
  "Cancel anytime",
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="relative bg-[hsl(240,20%,4%)] py-24 md:py-32 border-t border-white/[0.04]"
    >
      <div className="absolute inset-0 purple-glow opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <FadeIn className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Stop Managing Spreadsheets?
          </h2>
          <p className="mt-4 text-lg text-[hsl(240,10%,65%)] max-w-xl mx-auto">
            Book a 30-minute demo. We&rsquo;ll show you Propentro with your
            specific use cases.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: benefits */}
          <FadeIn direction="left" className="flex flex-col justify-center">
            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[hsl(152,68%,40%)] shrink-0" />
                  <span className="text-base text-[hsl(240,10%,80%)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Right: form */}
          <FadeIn direction="right">
            {submitted ? (
              <div className="rounded-lg border border-[hsl(152,68%,40%)]/30 bg-[hsl(152,68%,40%)]/5 p-8 text-center">
                <CheckCircle2 className="w-10 h-10 text-[hsl(152,68%,40%)] mx-auto mb-4" />
                <p className="text-lg font-semibold text-white mb-2">
                  Thank you!
                </p>
                <p className="text-sm text-[hsl(240,10%,65%)]">
                  We&rsquo;ll be in touch within 24 hours to schedule your demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-[hsl(240,10%,65%)] mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3.5 py-2.5 rounded-md bg-[hsl(240,15%,8%)] border border-[hsl(240,15%,15%)] text-white text-sm placeholder-[hsl(240,10%,40%)] focus:outline-none focus:border-[hsl(258,60%,55%)] focus:ring-1 focus:ring-[hsl(258,60%,55%)] transition-colors"
                      placeholder="John Murphy"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-[hsl(240,10%,65%)] mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3.5 py-2.5 rounded-md bg-[hsl(240,15%,8%)] border border-[hsl(240,15%,15%)] text-white text-sm placeholder-[hsl(240,10%,40%)] focus:outline-none focus:border-[hsl(258,60%,55%)] focus:ring-1 focus:ring-[hsl(258,60%,55%)] transition-colors"
                      placeholder="john@company.ie"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-xs font-medium text-[hsl(240,10%,65%)] mb-1.5"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full px-3.5 py-2.5 rounded-md bg-[hsl(240,15%,8%)] border border-[hsl(240,15%,15%)] text-white text-sm placeholder-[hsl(240,10%,40%)] focus:outline-none focus:border-[hsl(258,60%,55%)] focus:ring-1 focus:ring-[hsl(258,60%,55%)] transition-colors"
                    placeholder="Dublin Property Management Ltd"
                  />
                </div>

                <div>
                  <label
                    htmlFor="units"
                    className="block text-xs font-medium text-[hsl(240,10%,65%)] mb-1.5"
                  >
                    Number of units managed
                  </label>
                  <input
                    id="units"
                    name="units"
                    type="text"
                    className="w-full px-3.5 py-2.5 rounded-md bg-[hsl(240,15%,8%)] border border-[hsl(240,15%,15%)] text-white text-sm placeholder-[hsl(240,10%,40%)] focus:outline-none focus:border-[hsl(258,60%,55%)] focus:ring-1 focus:ring-[hsl(258,60%,55%)] transition-colors"
                    placeholder="e.g. 150"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-[hsl(240,10%,65%)] mb-1.5"
                  >
                    Message{" "}
                    <span className="text-[hsl(240,10%,40%)]">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full px-3.5 py-2.5 rounded-md bg-[hsl(240,15%,8%)] border border-[hsl(240,15%,15%)] text-white text-sm placeholder-[hsl(240,10%,40%)] focus:outline-none focus:border-[hsl(258,60%,55%)] focus:ring-1 focus:ring-[hsl(258,60%,55%)] transition-colors resize-none"
                    placeholder="Tell us about your current setup..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 rounded-md bg-purple-primary hover:bg-purple-light text-white font-medium transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Book My Demo"}
                </button>
              </form>
            )}

            <p className="mt-6 text-center text-sm text-[hsl(240,10%,50%)]">
              Or email us directly:{" "}
              <a
                href="mailto:hello@propentro.com"
                className="text-[hsl(258,60%,55%)] hover:text-[hsl(258,80%,65%)] transition-colors"
              >
                hello@propentro.com
              </a>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
