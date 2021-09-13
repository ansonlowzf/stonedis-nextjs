import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { lightBlue, orange } from "@mui/material/colors";

let theme = createTheme({
  palette: {
    primary: lightBlue,
    secondary: orange,
    background: {
      default: "#fff",
    },
    bgNav: {
      main: "#24292F",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
