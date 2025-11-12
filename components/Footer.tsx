
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-2 items-center">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo" aria-hidden />
          <span className="font-semibold">Minimalistic Connect</span>
        </div>
        <div className="flex flex-wrap items-center gap-4 md:justify-end">
          <Link href="#" className="type-body no-underline hover:underline">Privacy</Link>
          <Link href="#" className="type-body no-underline hover:underline">Terms</Link>
          <Link href="#" className="type-body no-underline hover:underline">Contact</Link>
          <div className="type-caption text-text-secondary">© {new Date().getFullYear()} Minimalistic Connect</div>
        </div>
      </div>
    </footer>
  );
}
