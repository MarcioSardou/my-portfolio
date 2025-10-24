import About from "@/components/about";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Experiences from "@/components/experiences";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Header from "@/components/ui/header";
import React from "react";

const GradientSeparator = () => (
  <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent " />
);

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 py-20">
        <About />

        <GradientSeparator />

        <Experiences />

        <GradientSeparator />

        <Projects />

        <GradientSeparator />

        <Skills />

        <GradientSeparator />

        <Certifications />

        <GradientSeparator />

        <Contact />
      </main>
    </div>
  );
}
