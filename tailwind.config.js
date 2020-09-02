module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'min': '1170px' },
      'tab': { 'max': '767px' },
      'lap': { 'max': '991px' },
      'mob': { 'max': '580px' },
    },
    maxHeight: {
      'full' : '100%',
      'screen' : '100vh',
      '3/4' : '625px'
    },
    maxWidth: {
      'none': 'none',
      'xm' : '3rem',
      'xss': '3.3125rem',
      'xs': '20rem',
      'md':'28rem',
      'sm': '30rem',
      'lg':'32rem',
      'xl':'36rem',
      '2xl': '43rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      'full': '100%',
      'screen-sm': '640px',
      'screen-md': '768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px'
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
