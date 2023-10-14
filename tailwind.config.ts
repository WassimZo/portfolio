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
        primary: {
          black: "#23120B",
          light: "#FAFAFA",
          red: "#E11818",
          blue: "#21219C",
          dark_blue: "#221954",
          light_blue: "#8D8DCB",
        },
      },
    },
  },
  plugins: [],
};
export default config;
