"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const contacts = [
  {
    name: "E-mail",
    icon: Mail,
    link: "mailto:marcio.sardou@gmail.com",
    label: "marcio.sardou@gmail.com",
    color: "hover:bg-amber-600/20 hover:text-amber-400",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    link: "https://www.linkedin.com/in/marciosardou",
    label: "/in/marciosardou",
    color: "hover:bg-blue-600/20 hover:text-blue-400",
  },
  {
    name: "GitHub",
    icon: Github,
    link: "https://github.com/marciosardou",
    label: "@marciosardou",
    color: "hover:bg-neutral-900 hover:text-white",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://instagram.com/marciosardou",
    label: "@marciosardou",
    color: "hover:bg-pink-600/20 hover:text-pink-400",
  },
];

export default function ContactSection() {
  return (
    <footer
      id="contact"
      className="py-20 bg-background text-foreground border-t border-border"
    >
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Vamos construir algo juntos? 🚀
        </motion.h2>

        <motion.p
          className="text-muted-foreground mb-10 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Estou sempre aberto a novas oportunidades, colaborações e desafios
          criativos. Entre em contato por qualquer um dos canais abaixo 👇
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-300 border border-border bg-card/40 backdrop-blur-sm hover:scale-105 ${contact.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <contact.icon className="w-10 h-10 mb-2" />
              <span className="text-sm font-medium">{contact.name}</span>
              <span className="text-xs text-muted-foreground">
                {contact.label}
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Márcio Sardou. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
}
