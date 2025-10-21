import About from "@/components/about";
import Hero from "@/components/hero";
import Header from "@/components/ui/header";
import React from "react";

export default function page() {
  return (
    <div className="bg-neutral-900 h-full text-white">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto">
        <About />
      </main>
    </div>
  );
}
