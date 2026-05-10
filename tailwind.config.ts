import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        calm: {
          bg: "#FBFAF7",
          surface: "#FFFFFF",
          soft: "#F3F0EA",
          text: {
            primary: "#171717",
            secondary: "#5F6368",
          },
          border: "#E7E1D8",
          accent: "#2563EB",
          "accent-hover": "#1D4ED8",
          privacy: "#16A34A",
          warning: "#D97706",
        },
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      borderRadius: {
        control: "var(--radius-control)",
        card: "var(--radius-card)",
        shell: "var(--radius-shell)",
      },
      boxShadow: {
        "calm-soft": "0 10px 24px -16px rgba(23, 23, 23, 0.28)",
        "calm-lift": "0 14px 34px -20px rgba(37, 99, 235, 0.35)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
