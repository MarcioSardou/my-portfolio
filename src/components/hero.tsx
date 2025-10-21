import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="w-full m-auto bg-neutral-600">
      <div className="flex max-w-6xl mx-auto p-8 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Olá, eu sou Márcio Sardou
          </h1>
          <p className="text-lg text-white">
            Desenvolvedor Full-Stack apaixonado por criar soluções web
            inovadoras e eficientes. Com experiência em diversas tecnologias,
            estou sempre em busca de novos desafios para aprimorar minhas
            habilidades e contribuir para projetos impactantes.
          </p>
          <div>
            <Button>download resume</Button>
            <Button>Linkedin</Button>
            <Button>github</Button>
          </div>
        </div>

        <Image
          src="/profile.png"
          alt="Marcio Sardou - Frontend Developer"
          className="object-cover"
          priority
          width={200}
          height={150}
        />
      </div>
    </section>
  );
}
