/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight:{
    medium:'400',
    dark:'700'
    },
    extend: {
      colors:{
        veryDarkGrayishBlue: 'hsl(237, 12%, 33%)',
         darkGrayishBlue: 'hsl(240, 6%, 50%)',
         lighGrayishBlue: 'hsl(240, 5%, 91%)'
      }
    },
  },
  plugins: [],
};

