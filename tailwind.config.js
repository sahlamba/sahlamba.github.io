const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.md',
    './*.html',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      black: colors.black,
      primary: {
        light: 'var(--color-primary-light)',
        DEFAULT: 'var(--color-primary-base)',
        dark: 'var(--color-primary-dark)',
      },
      inverted: {
        light: 'var(--color-inverted-light)',
        DEFAULT: 'var(--color-inverted-base)',
        dark: 'var(--color-inverted-dark)',
      },
      light: {
        bright: colors.white,
        DEFAULT: colors.gray[50],
        dull: colors.gray[200],
      },
      dark: {
        bright: colors.gray[700],
        DEFAULT: colors.gray[800],
        dull: colors.gray[900],
      },
    },
  },
  plugins: [],
}
