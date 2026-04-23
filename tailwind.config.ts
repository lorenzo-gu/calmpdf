import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // CalmPDF palette — muted sage + warm off-white.
        sand: {
          50: "#FBFAF6",
          100: "#F3F1E9",
          200: "#E7E3D4",
        },
        sage: {
          50: "#F1F5F1",
          100: "#DCE7DC",
          300: "#A5BFA5",
          500: "#6B8E6B",
          600: "#557255",
          700: "#3F563F",
          900: "#1F2B1F",
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
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};

export default config;
