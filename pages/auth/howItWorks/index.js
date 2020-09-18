import React, {Fragment, useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import {useRouter} from "next/router";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: '90%',
  },
  title: {
    fontFamily: "Basis Grotesque Pro, Helvetica Neue, Arial, Droid, sans-serif",
    fontWeight: 900,
    fontSize: "75px",
    lineHeight: "66px",
    color: "#000000",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      lineHeight: "55px",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "25px",
      lineHeight: "40px",
      textAlign: "center",
    },
  },
  subTitleWrapper: {
    paddingLeft: '10em',
    paddingRight: '10em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '4em',
      paddingRight: '4em',
    },
    [theme.breakpoints.down('sm')]: {
  paddingLeft: 0,
  paddingRight: 0,
}
  },
  subTitleWrapper2: {
    paddingLeft: '8em',
    paddingRight: '8em',
    [theme.breakpoints.down('md')]: {
      paddingLeft: '4em',
      paddingRight: '4em',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 0,
      paddingRight: 0,
    }

  },
  subTitle: {
    color: "grey",
    textAlign: "center",
  },
  iframe: {
    width: "80%",
    height: "600px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
      // height: "664px",
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

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  loading: state.loading.loading,
});

const Index = ({auth}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter()

  useEffect(() => {
    if (auth.isLoaded === true && auth.isEmpty === true) {
      // router.push({ pathname: "/login" });
      router.push({pathname: '/login'});
    }


  });
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
              <Typography variant={"h1"} className={classes.title}>
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
              <Typography variant={"h6"} className={classes.subTitle}>
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
            <iframe className={classes.iframe} src="https://marvelapp.com/prototype/9242297?emb=1&iosapp=false&frameless=false" width="3840"
                    height="3310" allowtransparency="true" frameBorder="0"></iframe>
          </Grid>

          <Grid
              item
              container
              justify={"center"}
              alignItems={"center"}
              direction={matchesSM ? "column" : "row"}
              style={{ marginTop: "9em", marginBottom: '9em' }}
              className={classes.subTitleWrapper}
          >
            <Grid item>
              <Typography variant={"h6"} className={classes.subTitle}>
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

export default connect(mapStateToProps)(Index);
