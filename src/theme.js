import { createMuiTheme } from "@material-ui/core/styles";

const themeTeal = "#54C5CF";
const themeOrange = "#FF8100";
const inputGrey = "#F6F7F8";
const navDrawer = "#647292";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: themeTeal,
    },
    secondary: {
      main: themeOrange,
    },
    common: {
      inputGrey: inputGrey,
      navDrawer: navDrawer,
    },
  },
  typography: {
    h1: {
      // fontFamily: "Raleway",
      fontFamily: "Whitney Medium, sans-serif",
    },
    h2: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    h3: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    h4: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    h5: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    h6: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    subtitle1: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    subtitle2: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    body1: {
      fontFamily: "Whitney Medium, sans-serif",
    },
    body2: {
      fontFamily: "Whitney Medium, sans-serif",
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        height: "3px",
      },
    },
    MuiTab: {
      root: {
        backgroundColor: navDrawer,
        "&:hover": {
          backgroundColor: themeTeal,
        },
        "&$selected": {
          backgroundColor: "white",
          color: themeTeal,
        },
      },
      textColorInherit: {
        color: "white",
      },
    },

  },
});

export default theme;
