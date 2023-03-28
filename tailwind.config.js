/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xxsm: "280px",
      xsm: "360px",
      sm: "480px",
      md: "769px",
      mdl: "885px",
      lg: "976px",
      xlg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {},
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        CDisplay: ["Clash Display", "sans-serif"],
      },
    },
  },
  plugins: [],
};
