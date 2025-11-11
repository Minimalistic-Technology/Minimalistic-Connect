
"use client";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation'; // Import useRouter
import Button from "@/components/Button";
import ThemeToggle from "@/components/ThemeToggle";
import { AnimeNavBar } from '@/components/ui/anime-navbar'
import { Grid, Zap, DollarSign, HelpCircle } from 'lucide-react'
import { useState, useEffect } from 'react';

export default function HeaderNav() {
  const pathname = usePathname();
  const router = useRouter(); // Init router
  const isAuthPage = !!pathname && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/signup'));

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Since this is a client component, we can safely access localStorage
    const token = localStorage.getItem('accessToken');
    setIsAuthenticated(!!token);
  }, [pathname]); // Re-run on path change to ensure state is up-to-date

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsAuthenticated(false);
    router.push('/'); // Redirect to home after logout
  };

  // Render nothing on auth pages
  if (isAuthPage) {
    return null;
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-bg/80 border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 flex items-center justify-between h-16" aria-label="Primary">
        <Link href="/" className="flex items-center gap-2 font-semibold no-underline hover:no-underline">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo" aria-hidden />
          <span className="sr-only">Minimalistic Connect</span>
          <span aria-hidden>Minimalistic Connect</span>
        </Link>
        <div className="flex items-center gap-3">
          <AnimeNavBar
            defaultActive="Features"
            items={[
              { name: 'Features', url: '#features', icon: Grid },
              { name: 'How it works', url: '#how', icon: Zap },
              { name: 'Pricing', url: '#pricing', icon: DollarSign },
              { name: 'FAQ', url: '#faq', icon: HelpCircle },
            ]}
          />
          {isAuthenticated ? (
            <>
              <ThemeToggle />
              <Link href="/dashboard" className="btn btn-subtle hidden sm:inline-flex no-underline">Dashboard</Link>
              <Button onClick={handleLogout} className="hidden sm:inline-flex">Logout</Button>
            </>
          ) : (
            <>
              <ThemeToggle />
              <Link href="/auth/login" className="btn btn-subtle hidden sm:inline-flex no-underline">Sign in</Link>
              <Link href="/auth/signup" passHref>
                <Button className="hidden sm:inline-flex">Start Free Scan</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
