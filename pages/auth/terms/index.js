import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "30em",
    filter: "brightness(0.4)",
  },
  overlay: {
    zIndex: theme.zIndex.modal + 1,
    marginTop: "-300px",
    backgroundColor: "white",
    width: "60%",
    height: "60em",
    padding: "1em",
  },
  headerWrapper: {
    marginTop: "0.5em",
    marginBottom: "0.5em",
  },
  textWrapper: {
    marginTop: "0.4em",
    marginBottom: "0.4em",
  },

  sectionHeader: {
    color: theme.palette.error.main,
    fontWeight: 600,
  },
  sectionText: {
    color: "grey",
  },
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      <DashboardHeader />
      <Grid
        item
        container
        direction={"column"}
        style={{ backgroundColor: "lightgrey" }}
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
                Terms & Conditions
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

export default Index;
