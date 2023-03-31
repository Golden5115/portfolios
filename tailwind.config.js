/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:{'max': '500px'},
      mx:{'min': '1440px'},
    },
    extend: {},
  },
  plugins: [],
}
