import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-background text-foreground py-24 transition-colors duration-300"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-8 text-primary">Sobre Mim</h2>
        <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
          Olá! Eu sou{" "}
          <span className="text-accent font-medium">Márcio Sardou</span>, um
          desenvolvedor <span className="text-accent">Full-Stack</span>{" "}
          apaixonado por criar soluções web inovadoras e eficientes. Tenho
          experiência em diversas tecnologias modernas e estou sempre em busca
          de novos desafios para aprimorar minhas habilidades e contribuir com
          projetos impactantes.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          Minha jornada na programação começou há vários anos e desde então
          venho desenvolvendo desde sites simples até aplicações web complexas.
          Adoro aprender novas ferramentas, explorar tendências e transformar
          ideias em experiências digitais incríveis 🚀.
        </p>
      </div>
    </section>
  );
}
