/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#0B1527",
        "secondary": "#008CFF"
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Poppins', 'serif'],
      }
    },
  },
  plugins: [],
}