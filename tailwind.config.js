module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    screens: {
      'sm': { 'min': '640px', 'max': '767px' },
      'md': { 'min': '768px', 'max': '1023px' },
      'lg': { 'min': '1024px', 'max': '1279px' },
      'xl': { 'max': '1140px' },
      'lap': { 'max': '991px' },
      'tab': { 'max': '767px' },
      'mob': { 'max': '580px' },
    },
    maxHeight: {
      'full' : '100%',
      'screen' : '100vh',
      '3/4' : '625px'
    },
    minWidth: {
      '0' : '0',
      '8' : '8rem',
      '10': '10rem',
      '12': '12rem',
      'full':'100%'
    },
    maxWidth: {
      'none': 'none',
      'xmm': '1.75rem',
      'xm' : '3rem',
      'xss': '3.3125rem',
      'xsm':'5rem',
      'xs': '20rem',
      'xs1': '21rem',
      'mdd': '21.875rem',
      'md1': '23.5rem',
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
