import { gray, darkGray, transparentGray, red, green, blue, yellow, white } from './colors';

const lightPalette = {
  mode: 'light',
  
  neutral: {
    lighter: gray[100],
    light: gray[200],
    main: gray[500],
    darker: gray[900],
  },
  primary: {
    light: blue[100],
    main: blue[500],
    dark: darkGray[500],
  },
  secondary: {
    light: blue[200],
    main: blue[600],
    dark: darkGray[800],
  },
  info: {
    lighter: white[100],
    light: white[200],
    main: white[300],
    dark: white[400],
    darker: white[500],
  },
  success: {
    light: green[100],
    main: green[500],
    dark: green[800],
  },
  warning: {
    light: yellow[100],
    main: yellow[500],
    dark: yellow[800],
  },
  error: {
    light: red[100],
    main: red[500],
    dark: red[800],
  },
  text: {
    primary: darkGray[500],
    secondary: gray[400],
    disabled: gray[300],
    stableLight: white[300],
    stableDark: darkGray[500],
  },
  background: {
    default: white[100],
    paper: white[200],
  },
  transparent: {
    gray: {
      main: transparentGray[500],
    },
  },
};

export default lightPalette;
