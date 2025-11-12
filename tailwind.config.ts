
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      colors: {
        bg: "var(--bg)",
        surface: "var(--surface)",
        border: "var(--border)",
        text: {
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        brand: {
          primary: "var(--primary)",
          primaryHover: "var(--primary-hover)",
          ring: "var(--primary-ring)",
          accent: "var(--accent)",
          gradientFrom: "var(--gradient-from)",
          gradientTo: "var(--gradient-to)",
        },
        state: {
          success: "var(--success)",
          warning: "var(--warning)",
          error: "var(--error)",
        },
      },
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.06)",
        cardDark: "0 2px 12px rgba(0,0,0,0.35)",
      },
    },
  },
  plugins: [],
};
export default config;
