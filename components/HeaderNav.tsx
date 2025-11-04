
'use client';
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-bg/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Primary">
        <Link href="#" className="flex items-center gap-2 font-semibold no-underline hover:no-underline">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo" aria-hidden />
          <span className="sr-only">Minimalistic Connect</span>
          <span aria-hidden>Minimalistic Connect</span>
        </Link>
        <div className="hidden md:flex items-center gap-8" role="menubar">
          <Link className="type-body no-underline hover:underline" href="#features">Features</Link>
          <Link className="type-body no-underline hover:underline" href="#how">How it works</Link>
          <Link className="type-body no-underline hover:underline" href="#pricing">Pricing</Link>
          <Link className="type-body no-underline hover:underline" href="#faq">FAQ</Link>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="#" className="btn btn-subtle hidden sm:inline-flex no-underline">Sign in</Link>
          <Button className="hidden sm:inline-flex">Start Free Scan</Button>
        </div>
      </nav>
    </header>
  );
}
