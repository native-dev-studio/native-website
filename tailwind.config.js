/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow':    '#FAAC28',
        'red':       '#BC1C0B',
        'gray':      '#1B1B1B',
        'gray-dark': '#151418',
        'white':     '#FFFFFF',
      },
      fontSize: {
        'sm': '1.125rem',
        'md': '1.500rem',
        'lg': '3.000rem',
      }
    },
  },
  plugins: [],
};
