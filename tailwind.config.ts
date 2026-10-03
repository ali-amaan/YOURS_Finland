import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f3f1eb",
        ink: "#14211c",
        pine: {
          DEFAULT: "#12382f",
          deep: "#0c241e",
        },
        moss: "#1c6b56",
        aurora: "#8fd0c6",
        copper: "#c45c32",
        mist: "#e7eee9",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        card: "0 24px 60px -36px rgba(18, 56, 47, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
