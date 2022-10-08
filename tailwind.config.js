/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,png}", "./public/index.html"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    fontFamily: {
      roboto: ["Roboto Slab", "serif"],
    },
    extend: {
      screens: {
        ph: { max: "500px" },
        // => @media (max-width: 500px)  { ... }
        mb: { max: "400px" },
        // => @media (max-width: 400px)  { ... }
      },
      colors: {
        primary: { 200: "#509BDF", 100: "#84b9e8" },
        secondary: { 200: "#FCCA35", 100: "#fcd45d" },
      },
      backgroundImage: {
        header: "url(./images/aj-robbie-BuQ1RZckYW4-unsplash.jpg)",
        map: "url(./images/stale-grut-bjqw7-Jl1N0-unsplash.jpg)",
      },
    },
  },
  plugins: [],
};
