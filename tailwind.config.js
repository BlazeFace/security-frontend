module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        maroon: '#861F41',
        hokiestone: '#75787b',
        burntorange:'#C64600',
        darkorange: '#933400',
        white: '#E5E1E6',
        darkblue: '#003C71',
        teal: '#508590',
        darkgrey: '#313335'

      },}
  },
  fontSize: {
    sm: ['14px', '20px'],
    base: ['16px', '24px'],
    lg: ['20px', '28px'],
    xl: ['24px', '32px'],
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
