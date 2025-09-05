
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { User } from "lucide-react";

interface HeaderProps {
  isLoggedIn: boolean;
  username: string;
  email: string;
  handleLogout: () => void;
}

export default function Header({
  isLoggedIn,
  username,
  email,
  handleLogout,
}: HeaderProps) {
  const pathname = usePathname();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isPageTypesDropdownOpen, setIsPageTypesDropdownOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "/features" },
    {
      name: "Page types",
      href: "/Publicpage",
      dropdownItems: [
        { name: "Public page", href: "/Publicpage" }, // Corrected from /Pricing
        { name: "Private page", href: "/privatepg" }, // Corrected from /privatePage
        { name: "Audience-specific page", href: "/audience" }, // Placeholder, needs page
      ],
    },
    { name: "Pricing", href: "/pricing" },
    { name: "Enterprise", href: "/Enterprise" }, // Lowercase for consistency
  ];

  const toggleProfileDropdown = () =>
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const togglePageTypesDropdown = () =>
    setIsPageTypesDropdownOpen(!isPageTypesDropdownOpen);

  return (
    <div className="flex h-16">
      {/* Sidebar */}
      <div className="w-24 bg-blue-700 flex items-center justify-center">
        <div className="w-6 h-6 bg-white rounded-full"></div>
      </div>

      {/* Header Content */}
      <header className="flex-1 bg-gray-900 text-white flex items-center justify-between px-6">
        {/* Logo and Name with Link to Homepage */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full" />
          <span className="text-xl font-semibold">Statuspage</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              {item.dropdownItems ? (
                <>
                  <button
                    onClick={togglePageTypesDropdown}
                    className={`relative pb-1 transition-colors after:transition-all after:duration-300 ${
                      pathname === item.href
                        ? "text-white after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
                        : "text-gray-400 hover:text-white after:w-0 hover:after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
                    }`}
                  >
                    {item.name}
                  </button>
                  {isPageTypesDropdownOpen && (
                    <div className="absolute left-0 top-full mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block px-4 py-2 text-sm text-white hover:bg-gray-800 rounded-md"
                          onClick={() => setIsPageTypesDropdownOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`relative pb-1 transition-colors after:transition-all after:duration-300 ${
                    pathname === item.href
                      ? "text-white after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
                      : "text-gray-400 hover:text-white after:w-0 hover:after:w-full after:bg-white after:h-[2px] after:absolute after:left-0 after:bottom-0"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* CTA and Icons */}
        <div className="flex items-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full text-sm">
            Get it Free
          </button>
          {isLoggedIn ? (
            <div className="relative flex items-center gap-6">
              <span className="text-white font-semibold text-sm">
                Hi, {username}
              </span>
              <button
                onClick={toggleProfileDropdown}
                aria-label="Profile"
                className="text-white hover:text-gray-300"
              >
                <User className="h-5 w-5" />
              </button>
              {isProfileDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-gray-900 border border-gray-700 rounded-md shadow-lg z-50">
                  <div className="px-4 py-2 border-b border-gray-700">
                    <p className="text-sm font-medium text-white">{username}</p>
                    <p className="text-xs text-gray-400">{email}</p>
                  </div>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsProfileDropdownOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-white hover:bg-gray-800 rounded-b-md"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
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
            </>
          )}
        </div>
      </header>
    </div>
  );
}
