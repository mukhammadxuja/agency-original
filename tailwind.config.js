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
        spinWord: 'spinWord 15s infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        spinWord: {
          '10%': {
            transform: 'translateY(-110%)',
          },
          '25%': {
            transform: 'translateY(-110%)',
          },
          '35%': {
            transform: 'translateY(-210%)',
          },
          '50%': {
            transform: 'translateY(-210%)',
          },
          '60%': {
            transform: 'translateY(-310%)',
          },
          '75%': {
            transform: 'translateY(-310%)',
          },
          '85%': {
            transform: 'translateY(-410%)',
          },
          '100%': {
            transform: 'translateY(-410%)',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
