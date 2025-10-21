import Hero from "@/components/hero";
import Header from "@/components/ui/header";
import React from "react";

export default function page() {
  return (
    <div className="bg-neutral-900 h-screen text-white">
      <Header />
      <Hero />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"></main>
    </div>
  );
}
