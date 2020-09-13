import React, {Fragment, useEffect} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {useRouter} from "next/router";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "30em",
    filter: "brightness(0.4)",
    [theme.breakpoints.down("md")]: {
      height: "25em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "15em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "10em",
    },
  },
  overlay: {
    zIndex: theme.zIndex.modal + 1,
    marginTop: "-300px",
    backgroundColor: "white",
    width: "60%",
    height: "60em",
    padding: "1em",
    borderRadius: "5px",
    [theme.breakpoints.down("md")]: {
      marginTop: "-250px",
      width: "80%",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-150px",
      width: "90%",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-100px",
    },
  },
  headerWrapper: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.1em",
      marginBottom: "0.1em",
    },
  },
  textWrapper: {
    marginTop: "0.4em",
    marginBottom: "0.4em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.3em",
      marginBottom: "0.3em",
    },
  },

  sectionHeader: {
    color: theme.palette.error.main,
    fontWeight: 600,
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  sectionText: {
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
    },
  },
}));

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,

  }
}

const Index = ({auth, profile}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter()
  useEffect(() => {
    if (auth.isLoaded === true && auth.isEmpty === true) {
      router.push({ pathname: "/login" });
    }

    if (
        auth.isLoaded === true &&
        auth.isEmpty === false &&
        profile.additionalInfoSet === false
    ) {
      router.push({ pathname: "/login" });
    }
  });
  return (
    <Fragment>
      <DashboardHeader />
      <Grid
        item
        container
        direction={"column"}
        style={{ backgroundColor: "lightgrey", paddingBottom: '3em' }}
      >
        <Grid item container style={{ marginTop: "-3em" }}>
          <Grid item lg={12}>
            <img
              src="/assets/people/people.jpeg"
              alt=""
              className={classes.image}
            />
          </Grid>
        </Grid>
        <Grid item container justify={"center"}>
          <Grid item container direction={"column"} className={classes.overlay}>
            <Grid item className={classes.headerWrapper}>
              <Typography variant={"h5"} className={classes.sectionHeader}>
                Privacy Notice
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body1"} className={classes.sectionText}>
                Updated <span style={{ fontWeight: 600 }}>DATE HERE</span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body1"} className={classes.sectionText}>
                IZEA Worldwide Inc.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(mapStateToProps) (Index);
