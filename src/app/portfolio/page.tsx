import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Header from "@/components/ui/header";
import { Separator } from "@radix-ui/react-separator";
import React from "react";

export default function page() {
  return (
    <div className="bg-background h-full text-white">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto">
        <About />

        <Separator className=" h-0.5 bg-neutral-200 dark:bg-neutral-700" />

        <Experiences />

        <Separator className=" h-0.5 bg-neutral-200 dark:bg-neutral-700" />

        <Projects />

        <Separator className=" h-0.5 bg-neutral-200 dark:bg-neutral-700" />

        <Skills />

        <Separator className=" h-0.5 bg-neutral-200 dark:bg-neutral-700" />

        <Certifications />

        <Separator className=" h-0.5 bg-neutral-200 dark:bg-neutral-700" />

        <Contact />
      </main>
    </div>
  );
}
