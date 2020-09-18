import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em",
      textAlign: "center",
    },
  },
  subTitleWrapper: {
    paddingLeft: '10em',
    paddingRight: '10em',
  },
  subTitleWrapper2: {
    paddingLeft: '8em',
    paddingRight: '8em',
  },
  subTitle: {
    color: "grey",
    textAlign: "center",
  },
  iframe: {
    width: "453px",
    height: "600px",
    // height: "864px",
    [theme.breakpoints.down("xs")]: {
      width: "440px",
      height: "664px",
    },
  },

  button: {

    borderRadius: "100px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {

      marginTop: "1em",
    },
  },
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter()
  return (
    <Fragment>
      <DashboardHeader />
      <Grid
        item
        container
        justify={"center"}
        style={matchesSM ? { marginTop: "3em" } : { marginTop: "6em" }}
      >
        <Grid item className={classes.wrapper}>
          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid item>
              <Typography variant={"h4"} className={classes.title}>
                How It Works
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
            className={classes.subTitleWrapper}
          >
            <Grid item>
              <Typography variant={"body1"} className={classes.subTitle}>
                Take our self-guided product tour to learn how Klippit works for
                Merchants. It all starts with creating a deal for influencers.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
          >
            <iframe
                className={classes.iframe}
              src="https://marvelapp.com/prototype/25b009d6?emb=1&iosapp=false&frameless=false"
              allowtransparency="true"
              frameBorder="0"
            ></iframe>
          </Grid>

          <Grid
              item
              container
              justify={"center"}
              alignItems={"center"}
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "6em", marginBottom: '6em' }}
              className={classes.subTitleWrapper}
          >
            <Grid item>
              <Typography variant={"body1"} className={classes.subTitle}>
                Here is a first hand experience at how influencers will find your deal, purchase it, and promote your business to their network.
              </Typography>
            </Grid>
          </Grid>

          <Grid
              item
              container
              justify={"center"}
              alignItems={"center"}
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "2em" }}
          >
            <iframe
                className={classes.iframe}
                src="https://marvelapp.com/prototype/f3f68jb?emb=1&iosapp=false&frameless=false"
                allowTransparency="true"
                frameBorder="0"
            />
          </Grid>

          <Grid
              item
              container
              justify={"center"}
              alignItems={"center"}
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "6em", marginBottom: '6em' }}
              className={classes.subTitleWrapper2}
          >
            <Grid item>
              <Typography variant={"h5"} className={classes.subTitle} style={{color: theme.palette.primary.main}}>
                Are you currently running a deal or promotion? Upload it now and it will be available for influencers at launch!
              </Typography>
            </Grid>
          </Grid>

          <Grid
              item
              container
              justify={"center"}
              alignItems={"center"}
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "6em", marginBottom: '6em' }}

          >
            <Grid item>
              <Button
                  variant="contained"
                  size={"large"}
                  className={classes.button}
                  onClick={() =>
                      router.push({ pathname: "/auth/createCampaign" })
                  }
              >
                Get Started
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Index;