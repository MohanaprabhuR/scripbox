module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    fontFamily: {
      'sans': ['inter', '-apple-system', 'BlinkMacSystemFont'],
      'serif': ['Cambon', 'Georgia', 'Cambria'],
    },
    container: {
      center: true,
    },
    screens: {
      'xl': {
        'max': '1200px'
      },
      'lg': {
        'max': '992px'
      },
      'md': {
        'max': '768px'
      },
      'sm': {
        'max': '576px'
      },
    },
    maxHeight: {
      'full': '100%',
      'screen': '100vh',
      '3/4': '625px',
      'xl': '11.25rem',
      'lg': '12.25rem'
    },
    minWidth: {
      '0': '0',
      '8': '8rem',
      '10': '10rem',
      '12': '12rem',
      'full': '100%'
    },

    maxWidth: {
      'none': 'none',
      'class="py-2 text-sm font-medium leading-none text-gray-500 hover:text-gray-900"': '1.25rem',
      'xm1': '1.75rem',
      'xm2': '3rem',
      'xm3': '3.3125rem',
      'xm4': '4.5rem',
      'xm5': '5rem',
      'xsm': '9.375rem',  
      'xsm1': '11.75rem',
      'xsm2': '12.5rem',
      'xsm3': '15rem',
      'xsm4': '18rem',
      'xs': '20rem',
      'xs1': '21rem',
      'mdd': '21.875rem',
      'md1': '23.5rem',
      'md': '28rem',
      'sm': '30rem',
      'lg': '32rem',
      'xl': '36rem',
      'xll': '40rem',
      '2xl': '43rem',
      '3xl': '45rem',
      '4xl': '48rem',
      '5xl': '56rem',
      '6xl': '64rem',
      '7xl': '72rem',
      'full': '100%',
      'screen-sm': '640px',
      'screen-md': '768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px'
    },
    extend: {},
  },
  variants: {},
  plugins: [
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          width: '1140px',
          '@screen xl': {
            width: '960px',
          },
          '@screen lg': {
            width: '720px',
          },
          '@screen md': {
            width: '540px',
          },
          '@screen sm': {
            width: 'auto',
          },
        }
      })
    },
  ],
};
