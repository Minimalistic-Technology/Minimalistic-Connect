
'use client';
import { useTheme } from "@/lib/theme";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();

  const opts = [
    { key: 'light', icon: <Sun size={16} />, label: 'Light' },
    { key: 'dark', icon: <Moon size={16} />, label: 'Dark' },
  ] as const;

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-surface p-1" role="group" aria-label="Theme">
      {opts.map((opt) => (
        <button
          key={opt.key}
          title={opt.label}
          aria-label={opt.label}
          aria-pressed={mode === opt.key}
          onClick={() => setMode(opt.key as any)}
          className={`inline-flex items-center justify-center w-9 h-8 rounded-lg focus-visible:ring-2 focus-visible:ring-brand-ring transition-colors ${mode === opt.key ? 'bg-brand-primary text-white' : 'btn-subtle'}`}
        >
          {opt.icon}
        </button>
      ))}
    </div>
  );
}
