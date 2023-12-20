/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./atividades.html","./index2.html"],
  theme: {
    extend: {
      height: {
        '128': '50px',
      },
      backdropBrightness: {
        25: '.25',
        175: '1.75',
      }
    },
  },
  plugins: [],
}

