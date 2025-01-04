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
        background: "hsl(var(--color-background))",
        foreground: "hsl(var(--color-foreground))",
        surface: "hsl(var(--color-surface))",
        accent: "hsl(var(--color-accent))",
        border: "hsl(var(--color-border))",
      },
    },
  },
  plugins: [],
} satisfies Config;
