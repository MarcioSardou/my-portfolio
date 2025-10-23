"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const certifications = [
  {
    title: "React.js Avançado",
    issuer: "Udemy",
    date: "2024",
    link: "https://www.udemy.com/certificate/XXXXXXX",
  },
  {
    title: "JavaScript Moderno (ES6+)",
    issuer: "Origamid",
    date: "2023",
    link: "https://www.origamid.com/certificate/XXXXXXX",
  },
  {
    title: "Node.js e APIs REST",
    issuer: "Rocketseat",
    date: "2022",
    link: "https://www.rocketseat.com.br/certificate/XXXXXXX",
  },
];

export default function Certifications() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Minhas Certificações
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border bg-card/40 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-3">
                  <Award className="w-8 h-8 text-primary" />
                  <h3 className="text-base font-semibold">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {cert.issuer} • {cert.date}
                  </p>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-primary underline hover:text-primary/80 transition-colors"
                    >
                      Ver certificado
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
