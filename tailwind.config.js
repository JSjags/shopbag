const defaultTheme = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.serif]
      }
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
