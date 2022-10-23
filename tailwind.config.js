const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['My font', ...fontFamily.sans],
      },
      animation: {
        spinWord: 'spinWord 12s infinite',
      },
      keyframes: {
        spinWord: {
          '10%': {
            transform: 'translateY(-112%)',
          },
          '25%': {
            transform: 'translateY(-100%)',
          },
          '35%': {
            transform: 'translateY(-212%)',
          },
          '50%': {
            transform: 'translateY(-200%)',
          },
          '60%': {
            transform: 'translateY(-312%)',
          },
          '75%': {
            transform: 'translateY(-300%)',
          },
          '85%': {
            transform: 'translateY(-412%)',
          },
          '100%': {
            transform: 'translateY(-400%)',
          },
        },
      },
    },
  },
  plugins: [],
};
