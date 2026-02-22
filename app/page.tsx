import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Platform } from "@/components/sections/platform";
import { Experience } from "@/components/sections/experience";
import { Ireland } from "@/components/sections/ireland";
import { Numbers } from "@/components/sections/numbers";
import { Trust } from "@/components/sections/trust";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Problem />
      <Platform />
      <Experience />
      <Ireland />
      <Numbers />
      <Trust />
      <Contact />
    </>
  );
}
