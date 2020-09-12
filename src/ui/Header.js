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
    padding: '1.2em',
    [theme.breakpoints.down('md')]: {
      padding: '0.8em',
    }
  },
  logo: {
    [theme.breakpoints.down("md")]: {
      width: "7.5em",
    },
  },
  logoText: {
    fontWeight: "600",
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  },
  supportText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1em",
    },
  }
}));

const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Grid container direction={matchesXS ? 'column' : 'row'}  alignItems={"center"} className={classes.wrapper}>
      <Grid item>
        <Grid item container alignItems={'center'}>
          <Grid item>
            <img className={classes.logo} src="/assets/logo/logo.png" alt="logo" />
          </Grid>
          <Grid item>
            <Typography className={classes.logoText} variant={"h6"}>
              Merchant Waitlist
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={matchesXS ? { marginTop: "0.5em" } : { marginLeft: "auto" }}>
        <Grid item container alignItems={'center'}>
          <Grid item >
            <Grid item container alignItems={"center"}>
              <Hidden mdDown>
                <Grid item style={{ marginRight: "1em" }}>
                  <AvatarGroup>
                    <Avatar alt="Remy Sharp" src="" />
                    <Avatar alt="Travis Howard" src="" />
                    <Avatar alt="Cindy Baker" src="" />
                  </AvatarGroup>
                </Grid>
              </Hidden>

              <Grid item>
                <Typography variant={"h6"} className={classes.supportText}>
                  Need help? <span style={{ fontWeight: "700" }}>Get Support</span>
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
