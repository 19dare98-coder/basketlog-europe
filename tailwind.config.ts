import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#05070d",
        panel: "#0d1220",
        text: "#e7eaf3",
        muted: "#9ca9c3",
        accent: "#6d9eff"
      }
    }
  },
  plugins: []
};

export default config;
