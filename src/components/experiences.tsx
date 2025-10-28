"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

export default function Experiences() {
  const experiences = [
    {
      title: "Desenvolvedor Frontend na NovaTech",
      period: "Março 2022 - Presente",
      description:
        "Desenvolvimento de interfaces modernas com React e Next.js, focando em performance, SEO e acessibilidade. Colaboração próxima com designers para aprimorar a experiência do usuário.",
    },
    {
      title: "Engenheiro de Software na DigitalWave",
      period: "Janeiro 2020 - Fevereiro 2022",
      description:
        "Atuação no desenvolvimento full-stack utilizando Node.js e React, implementando microsserviços e integrações com APIs REST e GraphQL.",
    },
    {
      title: "Desenvolvedor Júnior na CodeFactory",
      period: "Julho 2018 - Dezembro 2019",
      description:
        "Participação em projetos internos e manutenção de sistemas legados. Aprendizado contínuo em JavaScript moderno, Git e metodologias ágeis.",
    },
    {
      title: "Estagiário de Desenvolvimento na WebLab",
      period: "Janeiro 2017 - Junho 2018",
      description:
        "Auxílio na criação de sites institucionais e landing pages otimizadas. Contato inicial com React e práticas de versionamento.",
    },
    {
      title: "Freelancer - Projetos Pessoais",
      period: "2015 - 2016",
      description:
        "Criação de pequenos sites e portfólios para clientes locais. Desenvolvimento de habilidades em design responsivo e estruturação de código limpo.",
    },
  ];

  return (
    <section id="work" className="py-20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100">
          Experiências
        </h2>

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="transition-all duration-300 hover:shadow-lg border-gray-200 dark:hover:shadow-purple-300 bg-white dark:bg-gray-900"
            >
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-100">
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  {exp.period}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
