"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Features", href: "/features" },
    { name: "Page types", href: "/Publicpage" },
    { name: "Pricing", href: "/pricing" },
    { name: "Enterprise", href: "/Enterprise" },
  ];

  return (
    <div className="flex h-16">
      {/* Sidebar */}
      <div className="w-24 bg-blue-700 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>

      {/* Header Content */}
      <header className="flex-1 bg-gray-900 text-white flex items-center justify-between px-6">
        {/* Logo and Name */}
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="text-xl font-semibold">Statuspage</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative pb-1 transition-colors after:transition-all after:duration-300 ${
                pathname === item.href
                  ? "text-white after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
                  : "text-gray-400 hover:text-white after:w-0 hover:after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA and Icons */}
        <div className="flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full text-sm">
            Get it Free
          </button>
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
          <a href="/signin" className="text-white font-semibold text-sm">
            Sign in
          </a>
        </div>
      </header>
    </div>
  );
}
