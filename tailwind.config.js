import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trinup: {
          green: '#25d367',
          dark: '#0d181c',
          light: '#f6f6f6',
          yellow: '#f6e944',
        },
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui()],
};
