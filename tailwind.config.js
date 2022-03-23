const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      colors: {
        white: '#FFFFFF',
        grey: {
          100: '#F0F0F0',
          300: '#C4C4C4',
          900: '#575757'
        },
        orage: {
          300: '#FFBF75',
          500: '#FFA24B',
          900: '#D7562E'
        },
        black: '#000000'
      },
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
