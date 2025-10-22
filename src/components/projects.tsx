"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Paywall Lib",
      period: "Biblioteca interna - Grupo Globo",
      description:
        "Biblioteca responsável pelo controle de autorização e exibição de barreiras de leitura nos produtos digitais, integrada ao Piano.io.",
      link: "https://github.com/MarcioSardouEDG/paywall-lib",
    },
    {
      title: "Sistema de Agendamento Pro Nélio",
      period: "Projeto pessoal",
      description:
        "Aplicação em React e Node.js para agendamento de cortes de cabelo, com envio de notificações via WhatsApp e interface responsiva.",
      link: "https://github.com/MarcioSardouEDG/sistema-nelio",
    },
    {
      title: "Enermatch PWA",
      period: "Projeto corporativo",
      description:
        "Progressive Web App desenvolvido com React e AWS Amplify, permitindo monitoramento energético em tempo real e dashboards personalizados.",
      link: "https://github.com/MarcioSardouEDG/enermatch-pwa",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background text-foreground">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-10 text-foreground">Projetos</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((proj, index) => (
            <Card
              key={index}
              className="
                flex flex-col
                bg-card 
                text-card-foreground 
                border 
                border-border 
                rounded-lg 
                transition-all 
                duration-300 
                hover:shadow-md 
                hover:border-primary/60 
                hover:translate-y-[-2px]
              "
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-card-foreground">
                  {proj.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {proj.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {proj.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="text-primary border-border hover:border-primary/60 hover:text-primary"
                >
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Ver projeto
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
