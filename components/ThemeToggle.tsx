
'use client';
import { useTheme } from "@/lib/theme";

export default function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-border bg-surface p-1" role="group" aria-label="Theme">
      {(['light','dark','system'] as const).map(opt => (
        <button
          key={opt}
          className={`btn btn-subtle px-3 py-1.5 rounded-lg aria-[pressed=true]:bg-brand-primary aria-[pressed=true]:text-white`}
          aria-pressed={mode === opt}
          onClick={() => setMode(opt)}
        >
          {opt[0].toUpperCase() + opt.slice(1)}
        </button>
      ))}
    </div>
  );
}
