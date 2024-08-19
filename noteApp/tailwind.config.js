/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ["./index.html","./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        ...colors,
        primary:'#2B85FF',
        secondary:'#EF863E',
        white:'#fdfeff',
        transparent: 'transparent',
        blue:'#2B85FF',
        red: '#FF0000'
      }
    },
  },
  plugins: [],
}

