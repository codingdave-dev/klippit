import { createMuiTheme } from "@material-ui/core/styles";

const themeTeal = "#54C5CF";
const themeOrange = "#FAA581";
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
      fontFamily: "Raleway",
    },
    h2: {
      fontFamily: "Raleway",
    },
    h3: {
      fontFamily: "Raleway",
    },
    h4: {
      fontFamily: "Raleway",
    },
    h5: {
      fontFamily: "Raleway",
    },
    h6: {
      fontFamily: "Raleway",
    },
    subtitle1: {
      fontFamily: "Raleway",
    },
    subtitle2: {
      fontFamily: "Raleway",
    },
    body1: {
      fontFamily: "Raleway",
    },
    body2: {
      fontFamily: "Raleway",
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
