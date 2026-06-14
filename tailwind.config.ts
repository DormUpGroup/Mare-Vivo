import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: "#EEF3F2",
        deep: "#174D49",
        heading: "#24302F",
        muted: "#6F7D7A",
        olive: "#A77C52",
        card: "#FFFFFF",
        ocean: "#174D49",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(36, 48, 47, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
