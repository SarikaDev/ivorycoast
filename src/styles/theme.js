import { createTheme } from "@mui/material";

const colors = {
  primary: "rgba(241, 171, 21, 1)",
  secondary: "#D3D3D3",
  black: "#454545",
  white: "white",
  lightgrey: "#efeff1",
  green: "#1ec771",
  info: "#bd6100",
};

const theme = createTheme({
  typography: {
    fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
  },

  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
  palette: {
    primary: {
      main: colors.primary,
      error: colors.lightgrey,
    },
    secondary: {
      main: colors.secondary,
      secondary: colors.white,
      error: colors.green,
    },
    info: {
      main: colors.info,
    },
    grey: {
      100: "#EFF1F3",
    },
    common: {
      black: "#343434",
    },
  },
});

export default theme;
