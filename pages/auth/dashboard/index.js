import React, { Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { connect } from "react-redux";

import { useRouter } from "next/router";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  headerWrapper: {
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "1em",
    },
  },
  welcomeText: {
    marginRight: "2em",
    [theme.breakpoints.down("md")]: {
      marginRight: "1.5em",
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: 0,
      textAlign: "center",
      fontSize: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em",
      textAlign: "center",
    },
  },
  button: {
    marginLeft: "2em",
    borderRadius: "100px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
  },
  titleWrapper: {
    marginTop: "3em",
  },
  title: {
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "4.5em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3.5em",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
      textAlign: "center",
    },
  },
  subTitleWrapper: {
    marginTop: "3em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  subText: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1.3em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
      paddingLeft: "5em",
      paddingRight: "5em",
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
      textAlign: "center",
    },
  },
  userCountWrapper: {
    marginTop: "3em",
    position: "relative",
  },
  image: {
    width: "900px",
    [theme.breakpoints.down("md")]: {
      width: "800px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  userCountTextWrapper: {
    position: "absolute",
    textAlign: "center",
    width: "65%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    paddingTop: "3em",
    paddingBottom: "3em",
    [theme.breakpoints.down("xs")]: {
      width: "80%",
      paddingTop: "1em",
      paddingBottom: "1em",
    },
  },
  userNumber: {
    fontWeight: 700,
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5em",
    },
  },
  userNumberSubText: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "2em",
      paddingRight: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      paddingLeft: "1em",
      paddingRight: "1em",
    },
  },
  lineWrapper: {
    marginTop: "2em",
    marginBottom: "2em",
  },
  line: {
    width: "30%",
    borderBottom: "6px solid" + theme.palette.primary.main,
  },
  iframe: {
    borderRadius: "10px",
    width: "900px",
    height: "800px",
    [theme.breakpoints.down('md')]: {
      width: '800px',
      height: '700px'
    },
    [theme.breakpoints.down('sm')]: {
      width: '500px',
      height: '400px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '300px',
      height: '300px'
    }
  },
}));

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Index = ({ auth, profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
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

      <Grid item container direction={"column"} alignItems={"center"}>
        {/*HEADER TEXT*/}
        <Grid item className={classes.headerWrapper}>
          <Grid
            item
            container
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid item>
              <Typography className={classes.welcomeText} variant={"h4"}>
                Welcome to your Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                size={"large"}
                className={classes.button}
                startIcon={<AddIcon />}
                onClick={() =>
                  router.push({ pathname: "/auth/createCampaign" })
                }
              >
                New Campaign
              </Button>
            </Grid>
          </Grid>
        </Grid>

        {/*MAIN TITLE*/}
        <Grid item className={classes.titleWrapper}>
          <Typography variant={"h1"} className={classes.title}>
            The Influencer Marketing
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"h1"} className={classes.title}>
            Platform
          </Typography>
        </Grid>

        {/*SUB TEXT*/}
        <Grid item className={classes.subTitleWrapper}>
          <Typography variant={"h6"} className={classes.subText}>
            Technology powewred by an opt-in marketplace of over 550K content
            creators.
          </Typography>
        </Grid>

        {/*USER COUNT IMAGE*/}
        <Grid item className={classes.userCountWrapper}>
          <img
            className={classes.image}
            src="https://blog.willscot.com/wp-content/uploads/2019/08/WS-OfficeFurniture-1.jpg"
            alt=""
          />
          <Grid item className={classes.userCountTextWrapper}>
            <Grid item container direction={"column"}>
              <Grid item>
                <Typography variant={"h1"} className={classes.userNumber}>
                  13,864
                </Typography>
              </Grid>

              <Grid item className={classes.lineWrapper}>
                <Grid item container justify={"center"}>
                  <div className={classes.line} />
                </Grid>
              </Grid>

              <Grid item>
                <Typography
                  variant={"subtitle1"}
                  className={classes.userNumberSubText}
                >
                  Get discovered and partner with industry-leading food,
                  fashion, beauty and lifestyle brands. Don't sell your
                  influence short.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*SELF GUIDED TOUR*/}
        <Grid item style={{ marginTop: "6em" }}>
          <Typography variant={"h1"} className={classes.title}>
            Your Self-Guided
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"h1"} className={classes.title}>
            Product Tour
          </Typography>
        </Grid>

        <Grid item style={{ marginTop: "3em" }}>
          <Typography variant={"subtitle1"} className={classes.subText}>
            We think you'll love our marketplace! Just click on the
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle1"} className={classes.subText}>
            experience below to begin. When you are done.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant={"subtitle1"} className={classes.subText}>
            <a style={{ color: theme.palette.primary.main }} href="/">
              click here for more info
            </a>
          </Typography>
        </Grid>

        <Grid
          item
          container
          justify={"center"}
          style={{ marginTop: "6em", marginBottom: "6em" }}
        >
          <Grid item>
            <iframe
              className={classes.iframe}
              src="https://marvelapp.com/prototype/9242297?emb=1&iosapp=false&frameless=false"
              allowtransparency="true"
              frameBorder="0"
            ></iframe>
          </Grid>
        </Grid>

        {/*YOUR SELF GUIDED*/}
        <Grid item >
          <Typography variant={"h1"} className={classes.title}>
            Your Self-Guided
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "3em" }}>
          <Typography variant={"subtitle1"} className={classes.subText}>
            Technology powered by an opt-in marketplace of over 550K content
            creators.
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "3em" }}>
          <Button
            variant="contained"
            size={"large"}
            className={classes.button}
            startIcon={<AddIcon />}
            onClick={() => router.push({ pathname: "/auth/createCampaign" })}
          >
            New Campaign
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Index);
