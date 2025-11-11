import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import ThemeToast from "@/components/ThemeToast";
import Providers from "@/components/Providers"; // <-- 1. Import Providers

import MainContent from "@/components/MainContent";

const poppins = Poppins({ subsets: ["latin"], weight: ["300","400","600","700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Minimalistic Connect — Simple Monitoring Solution",
  description: "Elegant and minimalist approach to website and API monitoring.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
  <body className={`${poppins.variable} font-sans bg-bg text-text-primary`}>
        <a href="#content" className="skip-to-content">Skip to content</a>
        <Providers>
          <ThemeProvider>
            <HeaderNav />
            <ThemeToast />
            <MainContent>{children}</MainContent>
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}