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
        maroon: {
          DEFAULT: "#6B0F1A",
          deep: "#4A0A12",
          vivid: "#851222",
          light: "#A32032",
          subtle: "rgba(107, 15, 26, 0.08)",
          border: "rgba(107, 15, 26, 0.18)",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#DFCA86",
          dim: "rgba(201, 168, 76, 0.25)",
        },
        cream: {
          DEFAULT: "#FAF8F5",
          warm: "#F5F0E8",
          dark: "#EFE9DF",
        },
        ink: {
          DEFAULT: "#161215",
          soft: "#2A2227",
          muted: "#6B6167",
          light: "#8C8087",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-space)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
