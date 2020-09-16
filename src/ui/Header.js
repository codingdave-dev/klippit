import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

import { AvatarGroup } from "@material-ui/lab";
import Avatar from "@material-ui/core/Avatar";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    zIndex: theme.zIndex.modal + 3,
    backgroundColor: "white",
    paddingTop: "0.8em",
    paddingBottom: "0.8em",
    paddingLeft: "3em",
    paddingRight: "3em",
    position: "fixed",
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
    fontSize: "16px",
    fontFamily: "Whitney, sans-serif",
    textDecoration: "none",
    color: theme.palette.common.black,
  },
  avatarWrapper: {
    marginRight: "1em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0.5em",
    },
  },
  avatar: {
    width: "25px",
    height: "25px",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "4em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "3em",
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Fragment>
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
              <a href="/">
                <img
                  className={classes.logo}
                  src="/assets/logo/logo.png"
                  alt="logo"
                />
              </a>
            </Grid>
            <Grid item>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: theme.palette.grey.A700,
                }}
              >
                <Typography className={classes.logoText} variant={"h6"}>
                  Merchant Waitlist
                </Typography>
              </a>
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
                        alt="Suport Avatar1"
                        src="/assets/avatar/headerAvatar/avatar1.png"
                      />
                      <Avatar
                        className={classes.avatar}
                        alt="Suport Avatar2"
                        src="/assets/avatar/headerAvatar/avatar2.png"
                      />
                      <Avatar
                        className={classes.avatar}
                        alt="Suport Avatar3"
                        src="/assets/avatar/headerAvatar/avatar3.png"
                      />
                    </AvatarGroup>
                  </Grid>
                </Hidden>

                <Grid item>
                  <a
                    href="mailto: support@klippitapp.com?subject=Merchant Help"
                    className={classes.supportText}
                  >
                    <Typography variant={"body1"}>
                      <span style={{ color: "grey" }}>Need help? </span>
                      <span style={{ fontWeight: "bold" }}>Get Support</span>
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Header;
