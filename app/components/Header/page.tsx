// components/Header.tsx
import { Moon } from 'lucide-react'; // You can replace this with any icon or toggle logic

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 shadow-md">
      <div className="max-w-full mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded-full"></div>
          <span className="text-xl font-semibold">ampire</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-300">
          <a href="#">Solution</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Blog</a>
          <a href="#">Company</a>
        </nav>

        {/* CTA and Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-[#0D1224] font-semibold px-4 py-1.5 rounded-lg hover:bg-gray-200 transition">
            Get started
          </button>
          <button className="text-gray-400 hover:text-white">
            <Moon size={20} />
          </button>
        </div>
      </div>
    </header>
  );
}
