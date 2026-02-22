import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Book a Demo  Propentro",
  description:
    "Book a 20-minute demo of Propentro. Whether you manage 30 units or 3,000, we\u2019ll map Propentro to your operation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
