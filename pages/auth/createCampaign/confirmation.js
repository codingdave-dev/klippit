import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import DashboardHeader from "../../../src/ui/DashboardHeader";
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
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
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

const Confirmation = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter()
  return (
    <Fragment>
      <DashboardHeader />

      <Grid tem container direction={"column"} alignItems={"center"}>
        <Grid item className={classes.wrapper}>
          <Grid item container direction={"column"} alignItems={"center"}>
            <Grid item>
              <Typography variant={"h4"} className={classes.title}>
                Congratulations!
              </Typography>
            </Grid>

              <Grid item style={{marginTop: '4em', marginBottom: '4em', paddingLeft: '30px'}}>
                  <img src="/assets/icon/campaign/smartphone.png" alt="Smartphone"/>
              </Grid>

            <Grid item>
              <Typography variant={"h5"} className={classes.subTitle} style={{color: theme.palette.primary.main}}>
                You've created a deal that will be
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant={"h5"} className={classes.subTitle} style={{color: theme.palette.primary.main}}>
available to influencers when we launch.
              </Typography>
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
                        router.push({ pathname: "/auth/dashboard" })
                    }
                >
                  Get Started
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Confirmation;
