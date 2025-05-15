/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        offgreen: {
          dark: "#86A8A4",
          medium: "#D9EBE9",
          light: "#E8F2F1",
        },
      },
      fontFamily: {
        sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
      backgroundPosition: {
        "right-select": "right 1.2rem center",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
