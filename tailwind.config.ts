import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        karlaMedium: ["var(--font-karlaMedium)"],
        karlaRegular: ["var(--font-karlaRegular)"],
        playfairRegular: ["var(--font-playfairRegular)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
