const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      tiny: '.875rem',
      base: '1rem', // 16px
      lg: '1.125rem',
      xl: '1.25rem', // 18px
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    colors: {
      white: '#FFFFFF',
      grey: {
        100: '#E8E8E8',
        300: '#C4C4C4',
        900: '#575757'
      },
      orange: {
        300: '#FFBF75',
        500: '#FFA24B',
        900: '#D7562E'
      },
      black: '#000000'
    }
  },
  plugins: [],
}
