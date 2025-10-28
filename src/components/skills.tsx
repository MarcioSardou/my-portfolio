"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import "devicon/devicon.min.css"; // instala com: npm i devicon

type Level = "Iniciante" | "Intermediário" | "Expert";

type Skill = {
  name: string;
  icon: string;
  level: Level;
};

const skills: Skill[] = [
  {
    name: "JavaScript",
    icon: "devicon-javascript-plain colored",
    level: "Expert",
  },
  {
    name: "TypeScript",
    icon: "devicon-typescript-plain colored",
    level: "Intermediário",
  },
  {
    name: "React / Next.js",
    icon: "devicon-react-original colored",
    level: "Expert",
  },
  {
    name: "Node.js",
    icon: "devicon-nodejs-plain colored",
    level: "Intermediário",
  },
  { name: "HTML5", icon: "devicon-html5-plain colored", level: "Expert" },
  { name: "CSS3", icon: "devicon-css3-plain colored", level: "Expert" },
  {
    name: "TailwindCSS",
    icon: "devicon-tailwindcss-original-wordmark colored",
    level: "Intermediário",
  },
  { name: "Git", icon: "devicon-git-plain colored", level: "Intermediário" },
  { name: "Docker", icon: "devicon-docker-plain colored", level: "Iniciante" },
  {
    name: "MongoDB",
    icon: "devicon-mongodb-plain colored",
    level: "Intermediário",
  },
  {
    name: "PostgreSQL",
    icon: "devicon-postgresql-plain colored",
    level: "Intermediário",
  },
  {
    name: "Linux",
    icon: "devicon-linux-plain colored",
    level: "Intermediário",
  },
];

const levelToPercent: Record<Level, number> = {
  Iniciante: 33,
  Intermediário: 66,
  Expert: 100,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-background text-foreground">
      <div className="mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">Minhas Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border border-border bg-card/40 backdrop-blur-sm hover:shadow-lg hover:scale-105 transition-transform duration-300">
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <i className={`${skill.icon} text-4xl`} />
                  <span className="text-sm font-medium text-center">
                    {skill.name}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {skill.level}
                  </span>
                  <Progress
                    value={levelToPercent[skill.level]}
                    className="w-full mt-2"
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
