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
      '13':'13.5rem',
      'full': '100%'
    },

    maxWidth: {
      'none': 'none',
      'xm1': '1.75rem',
      'xm2': '3rem',
      'xm3': '3.3125rem',
      'xm4': '4.5rem',
      'xm5': '5rem',
      'xm6':'5.625rem',
      'xsm': '9.375rem',  
      'xsm1': '11.375rem',
      'xsm2': '12.5rem',
      'xsm3': '15rem',
      'xsm3': '15rem',
      'xsm4': '18rem',
      'xsm5': '18.4375rem',
      'xs': '20rem',
      'xs1': '21rem',
      'mdd': '21.875rem',
      'md1': '23.5rem',
      'md': '28rem',
      'sm': '30rem',
      'lg': '32rem',
      'xl': '36rem',
      'xll': '40rem',
      '2xl': '42rem',
      '3xl': '43rem',
      '4xl': '45rem',
      '5xl': '48rem',
      '6xl': '56rem',
      '7xl': '64rem',
      '8xl': '72rem',
      'full': '100%',
      'screen-sm': '640px',
      'screen-md': '768px',
      'screen-lg': '1024px',
      'screen-xl': '1280px'
    },
    extend: {
      spacing: {
        '68':'25rem',
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#F2F2F2',
        200: '#E5E5E5',
        300: '#D9D9D9',
        400: '#B2B2B2',
        500: '#737373',
        600: '#595959',
        700: '#404040',
        800: '#343434',
        900: '#181818',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#fc8181',
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
      },
      orange: {
        100: '#FEF5EB',
        200: '#FFF0E0',
        300: '#fbd38d',
        400: '#F58024',
        500: '#F58024',
        600: '#dd6b20',
        700: '#c05621',
        800: '#9c4221',
        900: '#7b341e',
      },
      yellow: {
        100: '#fffff0',
        200: '#fefcbf',
        300: '#faf089',
        400: '#f6e05e',
        500: '#ecc94b',
        600: '#d69e2e',
        700: '#b7791f',
        800: '#975a16',
        900: '#744210',
      },
      green: {
        100: '#f0fff4',
        200: '#c6f6d5',
        300: '#9ae6b4',
        400: '#68d391',
        500: '#48bb78',
        600: '#38a169',
        700: '#2f855a',
        800: '#276749',
        900: '#22543d',
      },
      teal: {
        100: '#e6fffa',
        200: '#b2f5ea',
        300: '#81e6d9',
        400: '#4fd1c5',
        500: '#38b2ac',
        600: '#319795',
        700: '#2c7a7b',
        800: '#285e61',
        900: '#234e52',
      },
      blue: {
        100: '#EBF8FF',
        200: '#D6F0FF',
        300: '#90CDF4',
        400: '#63b3ed',
        500: '#007AFF',
        600: '#1971E4',
        700: '#0A5AC2',
        800: '#0D3973',
        900: '#052D61',
      },
      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },
      purple: {
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#d6bcfa',
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
      },
      pink: {
        100: '#fff5f7',
        200: '#fed7e2',
        300: '#fbb6ce',
        400: '#f687b3',
        500: '#ed64a6',
        600: '#d53f8c',
        700: '#b83280',
        800: '#97266d',
        900: '#702459',
      },
    },
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
