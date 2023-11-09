/* @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
        },
        purple: {
          ...colors.purple,
        },
      },
    },
    plugins: [],
  },
};
