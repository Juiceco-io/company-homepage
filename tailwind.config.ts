import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        accent: "#F97316",
        "accent-hover": "#EA580C",
        "accent-light": "#FB923C",
        "text-primary": "#f9fafb",
        "text-secondary": "#9ca3af",
        border: "#2d2d2d",
      },
    },
  },
  plugins: [],
};

export default config;
