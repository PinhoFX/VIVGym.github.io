/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./atividades.html","./index2.html"],
  theme: {
  //   colors:{
  //     'primary': '#1200ff',
               
  //     'secondary': '#00b17b',
               
  //     'accent': '#ab2a00',
               
  //     'neutral': '#231718',
               
  //     'base-100': '#262626',
               
  //     'info': '#00c6ff',
               
  //     'success': '#238100',
               
  //     'warning': '#d36c00',
               
  //     'error': '#ff6692',
  // },
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

