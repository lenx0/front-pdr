export const main = {
  grid: {
    container: '130rem',
    gutter: '3.2rem',
  },
  border: {
    radius: '0.4rem',
  },
  font: {
    light: 300,
    normal: 400,
    bold: 600,
    sizes: {
      xxsmall: '1.0rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
      huge: '5.2rem',
    },
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.3s ease-in-out',
    fast: '0.1s ease-in-out',
  },
  colors: {
    black: '#222222',
    white: '#FFFFFF',
    darkGrey: '#2B2D42',
    mediumGray: '#8D99AE',
    lightGrey: '#EDF2F4',
    red: '#EF233C',
    darkRed: '#D80032',
  },
};

export const lightTheme = {
  name: 'lightTheme',
  grid: main.grid,
  border: main.border,
  font: main.font,
  spacings: main.spacings,
  layers: main.layers,
  transition: main.transition,
  bodyBackgroundColor: main.colors.lightGrey,
  headerBackgroundColor: main.colors.white,
  textColorMain: main.colors.black,
};

export const darkTheme = {
  name: 'darkTheme',
  grid: main.grid,
  border: main.border,
  font: main.font,
  spacings: main.spacings,
  layers: main.layers,
  transition: main.transition,
  bodyBackgroundColor: main.colors.black,
  headerBackgroundColor: main.colors.darkGrey,
  textColorMain: main.colors.white,
};
