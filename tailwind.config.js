/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: { max: "640px" },

      md: { max: "768px" },

      lg: { max: "1024px" },

      xl: { max: "1280px" },
    },
  },
  plugins: [],
};
