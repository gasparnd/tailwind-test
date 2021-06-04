module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    scale: ['hover'],
    rotate:['responsive'],
    extend: {
      opacity: ['disabled'],
      backgroundColor: ['active'],
      textDecoration: ['focus-visible']
    },
  },
  plugins: [],
}