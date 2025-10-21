"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
// import { Icons } from "@/components/icons"; // opcional: seu set de icons
import { MenuIcon, XIcon, Sun, Moon } from "lucide-react";
import Image from "next/image";

type NavItem = { label: string; href: string };

const defaultNav: NavItem[] = [
  { label: "Sobre", href: "#about" },
  { label: "Trabalhos", href: "#work" },
  { label: "Blog", href: "#blog" },
  { label: "Contato", href: "#contact" },
];

export default function Header({ nav = defaultNav }: { nav?: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(
    typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
  );

  function toggleDark() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setDark(root.classList.contains("dark"));
  }

  return (
    <header className="w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
              <span className="font-semibold text-lg">Márcio Sardou</span>
            </Link>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-sky-600 dark:hover:text-sky-400"
              >
                {item.label}
              </a>
            ))}
            <Button asChild>
              <a href="#contact" className="ml-2">
                Trabalhe comigo
              </a>
            </Button>
            <button
              aria-label="toggle theme"
              onClick={toggleDark}
              className="ml-2 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
            <Avatar>
              <AvatarImage src="/avatar.jpg" alt="avatar" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
          </nav>

          {/* mobile */}
          <div className="md:hidden flex items-center gap-2">
            <button
              aria-label="toggle theme"
              onClick={toggleDark}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {dark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                  <MenuIcon className="w-5 h-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <div className="flex items-center justify-between">
                    <SheetTitle>Menu</SheetTitle>
                    <SheetClose asChild>
                      <button aria-label="close">
                        <XIcon className="w-5 h-5" />
                      </button>
                    </SheetClose>
                  </div>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-4">
                  {nav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="py-2 px-1 text-sm font-medium hover:text-sky-600 dark:hover:text-sky-400"
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={() => setOpen(false)}
                    className="mt-2"
                  >
                    <Button>Trabalhe comigo</Button>
                  </a>
                </div>

                <div className="mt-6 border-t border-gray-100 dark:border-gray-800 pt-4">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src="/avatar.jpg" alt="avatar" />
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">Márcio Sardou</p>
                      <p className="text-xs text-muted-foreground">
                        Frontend dev
                      </p>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
