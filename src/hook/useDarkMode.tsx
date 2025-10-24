"use client";
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // verifica se o usuário já escolheu um tema
    const storedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const root = document.documentElement;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      root.classList.add("dark");
      setDark(true);
    } else {
      root.classList.remove("dark");
      setDark(false);
    }
  }, []);

  function toggleDark() {
    const root = document.documentElement;
    root.classList.toggle("dark");

    const isDark = root.classList.contains("dark");
    setDark(isDark);

    // salva a preferência
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return { dark, toggleDark };
}
