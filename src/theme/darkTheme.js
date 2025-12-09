import { darkGray, blue, sky, red, green, yellow } from './colors';

export const darkTheme = {
  mode: "dark",

  background: darkGray[900],
  surface: darkGray[800],
  card: darkGray[700],

  text: "#FFFFFF",
  textSecondary: darkGray[200],

  border: darkGray[400],
  shadow: '#00000040',

  primary: blue[400],       // slightly brighter for dark backgrounds
  primaryHover: blue[300],
  secondary: sky[400],

  success: green[300],
  warning: yellow[300],
  danger: red[300],

  colors: { darkGray, blue, sky, red, green, yellow }
};
