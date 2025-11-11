"use client";

import { usePathname } from 'next/navigation';

export default function MainContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAuth = !!pathname && (pathname.startsWith('/auth/login') || pathname.startsWith('/auth/signup'));

  return (
    <main id="content" className={`min-h-screen ${isAuth ? '' : 'pt-16'}`}>
      {children}
    </main>
  );
}
