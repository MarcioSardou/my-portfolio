"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Download, Linkedin, Github } from "lucide-react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Decorative gradient orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto px-6 py-16 sm:px-8 lg:px-12">
        {/* Text Content */}
        <div className="flex flex-col justify-center flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-secondary font-mono text-sm tracking-wider uppercase">
              Olá, eu sou
            </p>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-100 via-primary to-secondary bg-clip-text text-transparent leading-tight">
              Márcio Sardou
            </h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded-full" />
              <p className="text-xl text-slate-400 font-mono">
                Desenvolvedor Full-Stack
              </p>
            </div>
          </div>

          <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
            Desenvolvedor Full-Stack apaixonado por criar soluções web{" "}
            <span className="text-primary font-semibold">inovadoras</span> e{" "}
            <span className="text-secondary font-semibold">eficientes</span>.
            Com experiência em diversas tecnologias, estou sempre em busca de
            novos desafios para aprimorar minhas habilidades e contribuir para
            projetos impactantes.
          </p>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button
              size="lg"
              className="gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-primary/50 text-primary hover:bg-primary/10 hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-secondary/50 text-secondary hover:bg-secondary/10 hover:border-secondary transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Profile Image Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div
            className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(64, 121, 255, 0.4), rgba(64, 255, 170, 0.2), transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Main Card */}
          <div
            className={`relative bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/80 backdrop-blur-xl rounded-3xl p-2 border border-slate-700/50 shadow-2xl transition-all duration-500 ${
              isHovered ? "scale-105 border-primary/50" : "scale-100"
            }`}
          >
            {/* Shine effect */}
            <div
              className={`absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 pointer-events-none ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
              style={{
                background:
                  "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)",
              }}
            />

            <div className="relative rounded-2xl overflow-hidden w-72 h-96 md:w-80 md:h-[28rem]">
              <Image
                src="/profile.png"
                alt="Marcio Sardou - Frontend Developer"
                fill
                className="object-cover"
                priority
              />
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent transition-opacity duration-500 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary rounded-tl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-secondary rounded-br-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
