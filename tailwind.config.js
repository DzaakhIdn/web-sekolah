/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '10px 10px 0px -3px rgba(140,199,250,1)',
      }
    },
  },
  plugins: [],
}