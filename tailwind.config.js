/* @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          claro: '#C5DFFF',
          escuro: '#061E3C',
          hover: '#1057B0'
        },
        purple: {
          ...colors.purple,
        },
        fontFamily: {
          inter: ['Inter', 'sans-serif']
        }
      },
    },
    plugins: [],
  },
};
