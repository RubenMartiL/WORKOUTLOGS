/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#e86cb6',
        'secondary': '#2e2e2e',
        'terciary': '#151414',
        'quaternary': '#1d1d1d',
      }
    },
  },
  plugins: [],
}

