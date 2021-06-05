module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#f3c614',
        'secondary': '#353535',
      }
    },
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