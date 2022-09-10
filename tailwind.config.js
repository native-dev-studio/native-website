/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bold': ['PPPangramSans-Semibold'],
        // 'bold': ['PPPangramSans-Bold'],
      },
      screens: {
        'sm': '410px',
        'md': '600px',
        'lg': '1136px',
      },
      colors: {
        'yellow':    '#FAAC28',
        'red':       '#BC1C0B',
        'gray':      {
          100: '#757575',
          200: '#1B1B1B',
          300: '#151418',
        },
        'white':     '#FFFFFF',
        'blue':      '#276EF1',
      },
      fontSize: {
        'xs': '0.875rem',
        'sm': '1.125rem',
        'md': '1.500rem',
        'lg': '2.250rem',
        'xl': '3.000rem',
        '2xl': '6.000rem',
      }
    },
  },
  plugins: [],
};
