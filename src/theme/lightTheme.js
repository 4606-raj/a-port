import { gray, white, blue, sky, red, green, yellow, transparentGray } from './colors';

export const lightTheme = {
  mode: "light",

  background: white[100],
  surface: white[200],
  card: white[300],

  text: gray[900],
  textSecondary: gray[700],

  border: gray[300],
  shadow: transparentGray[500],

  primary: blue[500],
  primaryHover: blue[600],
  secondary: sky[500],

  success: green[500],
  warning: yellow[500],
  danger: red[500],

  colors: { gray, white, blue, sky, red, green, yellow }
};
