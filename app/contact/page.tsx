import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/contact-content";

export const metadata: Metadata = {
  title: "Contact — Propentro",
  description:
    "Get in touch with Propentro. Whether you manage 50 units or 5,000, tell us about your operation.",
};

export default function ContactPage() {
  return <ContactContent />;
}
