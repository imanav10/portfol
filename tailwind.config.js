/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        green: "#036D03",
        maroon: "#800000",
        gold: "#FFD700",
        brown: "#8B4513",
        blue: "#002EFF",
        orange: "#D35400",
      },
    },
  },
  plugins: [],
}

