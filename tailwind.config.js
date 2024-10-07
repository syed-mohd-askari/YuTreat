/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        '570px': {'max': '810px'},
        '550px': {'max': '550px'},
        '350px': {'max': '520px'},
      }
    },
  },
  plugins: [],
}

