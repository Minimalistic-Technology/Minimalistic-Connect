
import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/theme";
import HeaderNav from "@/components/HeaderNav";
import Footer from "@/components/Footer";
import ThemeToast from "@/components/ThemeToast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Minimalistic Connect — Simple Monitoring Solution",
  description: "Elegant and minimalist approach to website and API monitoring.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans bg-bg text-text-primary`}>
        <a href="#content" className="skip-to-content">Skip to content</a>
        <ThemeProvider>
          <HeaderNav />
          <ThemeToast />
          <main id="content" className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
