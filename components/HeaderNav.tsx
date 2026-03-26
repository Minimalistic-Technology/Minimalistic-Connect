'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import Button from "@/components/Button";

export default function HeaderNav() {
  const pathname = usePathname();
  const isAuthPage = pathname === '/signin';

  return (
    <header className={`sticky top-0 z-40 border-b border-border ${isAuthPage ? 'bg-white' : 'backdrop-blur supports-[backdrop-filter]:bg-bg/80'}`}>
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-semibold no-underline hover:no-underline">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo" aria-hidden />
          <span className="sr-only">Minimalistic Connect</span>
          <span aria-hidden className={`hidden sm:inline ${isAuthPage ? 'text-neutral-900' : ''}`}>Minimalistic Connect</span>
        </Link>

        {!isAuthPage && (
          <div className="hidden md:flex items-center gap-8" role="menubar">
            <Link className="type-body no-underline hover:underline" href="#features">Features</Link>
            <Link className="type-body no-underline hover:underline" href="#how">How it works</Link>
            <Link className="type-body no-underline hover:underline" href="#pricing">Pricing</Link>
            <Link className="type-body no-underline hover:underline" href="#faq">FAQ</Link>
          </div>
        )}

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href="/signin" className="hidden sm:inline-flex">
            <Button>Log in</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
