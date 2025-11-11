
'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default to light mode unless a user preference is stored
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
  const stored = (typeof window !== "undefined" && localStorage.getItem("theme-mode")) as ThemeMode | null;
  const initial: ThemeMode = stored ?? "light";
  setMode(initial);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const effective = mode === "system" ? (prefersDark ? "dark" : "light") : mode;
    root.classList.toggle("dark", effective === "dark");
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => {
      setMode((prev) => (prev === "system" ? "system" : prev));
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
