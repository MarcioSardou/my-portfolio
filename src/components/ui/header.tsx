"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { MenuIcon, Sun, Moon } from "lucide-react";
import { useDarkMode } from "@/hook/useDarkMode";

type NavItem = { label: string; href: string };

const defaultNav: NavItem[] = [
  { label: "Sobre", href: "#about" },
  { label: "Trabalhos", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Projetos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contato", href: "#contact" },
];

export default function Header({ nav = defaultNav }: { nav?: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const { dark, toggleDark } = useDarkMode();

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-lg border-b border-border transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-lg font-semibold text-foreground hover:text-accent transition-colors"
          >
            Márcio Sardou
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button
              asChild
              className="ml-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <a href="#contact">Trabalhe comigo</a>
            </Button>

            {/* theme toggle */}
            <button
              aria-label="toggle theme"
              onClick={toggleDark}
              className="ml-2 p-2 rounded-md hover:bg-muted transition-colors"
            >
              {dark ? (
                <Sun className="w-4 h-4 text-yellow-300" />
              ) : (
                <Moon className="w-4 h-4 text-primary" />
              )}
            </button>
          </nav>

          {/* mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="toggle theme"
              onClick={toggleDark}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {dark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-primary" />
              )}
            </button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-muted transition-colors">
                  <MenuIcon className="w-5 h-5 text-foreground" />
                </button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-72 p-4 bg-background text-foreground border-l border-border"
              >
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <SheetTitle className="text-lg font-semibold text-foreground">
                      Menu
                    </SheetTitle>
                    <SheetClose asChild />
                  </div>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-4">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 px-1 text-sm font-medium  text-muted-foreground hover:text-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2"
                  >
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-accent">
                      Download CV
                    </Button>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
