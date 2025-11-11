
'use client';
import { useEffect, useState } from "react";

export default function ThemeToast() {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("theme-toast-shown");
    if (stored) return;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const msg = prefersDark
      ? "System dark mode detected — you can switch anytime."
      : "System light mode detected — you can switch anytime.";
    setMessage(msg);
    setVisible(true);
    localStorage.setItem("theme-toast-shown", "1");
    const t = setTimeout(() => setVisible(false), 5000);
    return () => clearTimeout(t);
  }, []);

  if (!visible) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in rounded-lg bg-surface border border-border px-4 py-3 shadow-card text-text-primary">
      <p className="type-body">{message}</p>
    </div>
  );
}
