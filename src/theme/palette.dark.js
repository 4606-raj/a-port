import { gray, darkGray, transparentGray, red, green, blue, yellow, white } from './colors';

const darkPalette = {
  mode: 'dark',

  neutral: {
    lighter: darkGray[400],
    light: darkGray[500],
    main: darkGray[700],
    darker: darkGray[900],
  },

  primary: {
    light: blue[300],
    main: blue[500],
    dark: darkGray[500],
  },

  secondary: {
    light: blue[200],
    main: blue[400],
    dark: blue[700],
  },

  info: {
    lighter: darkGray[500],
    light: darkGray[700],
    main: darkGray[500],
    dark: darkGray[600],
    darker: darkGray[900],
  },

  success: {
    light: green[300],
    main: green[400],
    dark: green[700],
  },

  warning: {
    light: yellow[300],
    main: yellow[400],
    dark: yellow[700],
  },

  error: {
    light: red[300],
    main: red[400],
    dark: red[700],
  },

  text: {
    primary: white[100],
    secondary: white[100],
    disabled: darkGray[400],
  },

  background: {
    default: darkGray[900],
    paper: darkGray[800],
  },

  transparent: {
    gray: { main: '#ffffff14' },
  },
};

export default darkPalette;
