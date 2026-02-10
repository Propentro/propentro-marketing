"use client";

import React from "react"

import { useState } from "react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Mail, ExternalLink } from "lucide-react";

const unitOptions = ["1–50", "51–200", "201–500", "501–1,000", "1,001–5,000", "5,000+"];
const countryOptions = [
  "Ireland",
  "United Kingdom",
  "Germany",
  "Netherlands",
  "United States",
  "Turkey",
  "UAE",
  "Other",
];

export function ContactContent() {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "0ffd8ede-6eaa-4811-b9d8-6c19af48a4cd");
    formData.append("from_name", "Propentro Contact Form");

    const name = formData.get("firstName") || "Someone";
    const company = formData.get("company") || "Unknown";
    formData.append("subject", `New enquiry from ${name} @ ${company}`);

    const email = formData.get("email");
    if (email) formData.append("replyto", email as string);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        e.currentTarget.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section ref={ref} className="bg-background pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left column */}
          <div className="flex-1 lg:max-w-md">
            <h1 className="animate-on-scroll font-display text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground">
              Let{"'"}s Talk<span className="text-primary">.</span>
            </h1>
            <p className="animate-on-scroll mt-5 text-base leading-relaxed text-muted-foreground">
              Whether you manage 50 units or 5,000 — tell us about your operation.
            </p>

            <div className="animate-on-scroll mt-8 space-y-4">
              <a
                href="mailto:hello@propentro.com"
                className="flex items-center gap-3 text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                hello@propentro.com
              </a>
              <a
                href="https://app.propentro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
                Existing user? Go to app.propentro.com
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div className="flex-1 animate-on-scroll">
            {submitted ? (
              <div className="rounded-xl border border-border bg-secondary p-8 text-center">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  Message sent.
                </h3>
                <p className="text-sm text-muted-foreground">
                  We respond within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot spam protection — invisible to users */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium text-foreground mb-1.5">
                      First Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium text-foreground mb-1.5">
                      Last Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-foreground mb-1.5">
                    Work Email <span className="text-primary">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-medium text-foreground mb-1.5">
                    Company <span className="text-primary">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    placeholder="Company name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="units" className="block text-xs font-medium text-foreground mb-1.5">
                      Units Managed
                    </label>
                    <select
                      id="units"
                      name="units"
                      className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Select range</option>
                      {unitOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-xs font-medium text-foreground mb-1.5">
                      Country
                    </label>
                    <select
                      id="country"
                      name="country"
                      className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all appearance-none"
                    >
                      <option value="">Select country</option>
                      {countryOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-foreground mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-[10px] border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                    placeholder="Tell us about your operation..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-[10px] bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-all hover:shadow-md min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>

                {error && (
                  <p className="text-xs text-red-500">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <p className="text-xs text-muted-foreground">
                  We respond within one business day.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
