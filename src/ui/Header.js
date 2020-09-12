import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

import { AvatarGroup } from "@material-ui/lab";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    paddingLeft: "1em",
    paddingRight: "1em",
  },
  logo: {
    width: "140px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  logoText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.25em",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  },

  supportWrapper: {
    marginLeft: "auto",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },

  supportText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  },
  avatarWrapper: {
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.5em",
    },
  },
  avatar: {
    [theme.breakpoints.down("sm")]: {
      "&.MuiAvatar-root": {
        width: "30px",
        height: "30px",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid
      container
      direction={matchesXS ? "column" : "row"}
      alignItems={"center"}
      className={classes.wrapper}
    >
      {/*LOGO*/}
      <Grid item>
        <Grid item container alignItems={"center"}>
          <Grid item>
            <img
              className={classes.logo}
              src="/assets/logo/logo.png"
              alt="logo"
            />
          </Grid>
          <Grid item>
            <Typography className={classes.logoText} variant={"h6"}>
              Merchant Waitlist
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*SUPPORT*/}
      <Grid item className={classes.supportWrapper}>
        <Grid item container alignItems={"center"}>
          <Grid item>
            <Grid item container alignItems={"center"}>
              <Hidden xsDown>
                <Grid item className={classes.avatarWrapper}>
                  <AvatarGroup>
                    <Avatar
                      className={classes.avatar}
                      alt="Remy Sharp"
                      src=""
                    />
                    <Avatar
                      className={classes.avatar}
                      alt="Travis Howard"
                      src=""
                    />
                    <Avatar
                      className={classes.avatar}
                      alt="Cindy Baker"
                      src=""
                    />
                  </AvatarGroup>
                </Grid>
              </Hidden>

              <Grid item>
                <Typography variant={"h6"} className={classes.supportText}>
                  Need help?{" "}
                  <span style={{ fontWeight: "600" }}>Get Support</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;