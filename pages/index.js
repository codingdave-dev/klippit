import React, {Fragment, useEffect, useState} from "react";
import { useRouter } from "next/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import TextInput from "../src/common/form/TextInput";
import Button from "@material-ui/core/Button";
import { registerUser } from "../src/store/actions/authActions/authActions";
import Fade from "@material-ui/core/Fade";


const useStyles = makeStyles((theme) => ({
  logo: {
    width: "150px",
    [theme.breakpoints.down("md")]: {
      width: "175px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100px",
    },
  },
  logoText: {
    fontSize: "24px",
    fontFamily: "Whitney Medium, sans-serif",
    fontWeight: 600,
    lineHeight: "42px",
    color: "rgba(0,0,0,0.87)",
  },
  headerWrapper: {
    marginTop: "5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  formHeader: {
    fontSize: "32px",
    fontFamily: "Whitney Medium, sans-serif",
    fontWeight: 700,
    lineHeight: "32px",
    color: "rgba(0,0,0,0.87)",
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      textAlign: "center",
    },
  },
  subHeaderWrapper: {
    marginTop: "1.5em",
  },
  subFormHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
      textAlign: "center",
    },
  },

  formWrapper: {
    marginTop: "1.5em",
    width: "400px",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  textInput: {
    marginTop: "0.8em",
    marginBottom: "0.8em",
    backgroundColor: theme.palette.common.inputGrey,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.white,
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  buttonWrapper: {
    marginTop: "2em",
  },
  button: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  privacyWrapper: {
    marginTop: "3em",
  },
  subFormText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.4em",
    },
  },

  imageWrapper: {
    opacity: 1,
    transform: "scale(1.01)",
    transition: "all 1.2s ease-in-out 0s",
    transformOrigin: "center top",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100vh",
    objectFit: "cover",
  },
}));

const actions = {
  registerUser,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Index = ({
  registerUser,
  auth,
  profile,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));


  const router = useRouter();

  useEffect(() => {
    if (
      auth.isLoaded === true &&
      auth.isEmpty === false &&
      profile.additionalInfoSet === false
    ) {
      router.push({ pathname: "/auth/additional" });
    }
    if (
      auth.isLoaded === true &&
      auth.isEmpty === false &&
      profile.additionalInfoSet === true
    ) {
      router.push({ pathname: "/auth/dashboard" });
    }


  });
  return (
    <Grid
      container
      direction={matchesMD ? "column" : "row"}
      alignItems={matchesMD ? "center" : null}
    >
      <Grid item container lg={6} md={12} sm={12} xs={12} justify={"center"}>
        <Grid item>
          {/*LOGO CONTAINER*/}
          <Grid
            item
            container
            justify={matchesMD ? "center" : null}
            alignItems={"center"}
            style={{ marginTop: "2em" }}
          >
            <Grid item>
              <img
                className={classes.logo}
                src="/assets/logo/logo.png"
                alt="Klippit Logo"
              />
            </Grid>
            <Grid item>
              <Typography className={classes.logoText} variant={"h6"}>
                Merchant Waitlist
              </Typography>
            </Grid>
          </Grid>

          {/*HEADER CONTAINER*/}
          <Grid
            item
            container
            justify={matchesMD ? "center" : null}
            className={classes.headerWrapper}
          >
            <Grid item>
              <Typography variant={"h4"} className={classes.formHeader}>
                Create a Klippit Merchant account
              </Typography>
            </Grid>
          </Grid>

          {/*SUB HEADER*/}
          <Grid
            item
            container
            justify={matchesMD ? "center" : null}
            className={classes.subHeaderWrapper}
          >
            {/*FORM SUB HEADER*/}
            <Grid item>
              <Typography variant={"h6"} className={classes.subFormHeader}>
                Join our community of influencers and merchants
              </Typography>
            </Grid>
          </Grid>

          {/*FORM*/}
          <Grid item container justify={matchesMD ? "center" : null}>
            <Grid item className={classes.formWrapper}>
              <Grid item container direction={"column"}>
                <Grid item>
                  <form
                    autoComplete={"off"}
                    onSubmit={handleSubmit(registerUser)}
                  >
                    <Grid item>
                      <Field
                        inputStyle={classes.textInput}
                        aria={"Email Address"}
                        placeholder={"Email address"}
                        label={"Email address"}
                        name={"email"}
                        type={"text"}
                        variant={"outlined"}
                        component={TextInput}
                      />
                    </Grid>
                    <Grid item>
                      <Field
                        inputStyle={classes.textInput}
                        aria={"Password"}
                        placeholder={"Password"}
                        label={"Password"}
                        name={"password"}
                        type={"password"}
                        variant={"outlined"}
                        component={TextInput}
                      />
                    </Grid>

                    {error && (
                      <Grid
                        item
                        style={
                          matchesXS
                            ? { marginTop: "1em" }
                            : { marginTop: "2em" }
                        }
                      >
                        <Typography
                          variant={"subtitle1"}
                          style={{
                            color: theme.palette.error.main,
                            fontWeight: 600,
                          }}
                        >
                          {error}
                        </Typography>
                      </Grid>
                    )}

                    <Grid item className={classes.buttonWrapper}>
                      <Grid
                        item
                        container
                        alignItems={"center"}
                        direction={matchesXS ? "column" : null}
                      >
                        <Grid item>
                          <Typography
                            className={classes.subFormText}
                            variant={"body2"}
                          >
                            Already have an account?{" "}
                            <span style={{ fontWeight: "bold" }}>
                              <a
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                                href="/login"
                              >
                                Sign in
                              </a>
                            </span>
                          </Typography>
                        </Grid>

                        <Grid
                          item
                          style={
                            matchesXS
                              ? { marginTop: "1em" }
                              : { marginLeft: "auto" }
                          }
                        >
                          <Button
                            className={classes.button}
                            variant="contained"
                            size={"medium"}
                            type={"submit"}
                            disabled={submitting}
                          >
                            Create Account
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item container justify={matchesMD ? "center" : null}>
            <Grid item className={classes.privacyWrapper}>
              <Typography className={classes.subFormText} variant={"body2"}>
                By signing up, you agree to our{" "}
                <a
                  href="/terms"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.common.black,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Terms of use</span>
                </a>{" "}
                and{" "}
                <a
                  href="/privacy"
                  style={{
                    textDecoration: "none",
                    color: theme.palette.common.black,
                  }}
                >
                  <span style={{ fontWeight: 600 }}>Privacy Policy</span>
                </a>
                .
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {!matchesMD && (
        <Grid item lg={6}>
          <div className={classes.imageWrapper}>
            <Grid item container justify={"center"}>
              <Grid item>
                <Fade in={true} timeout={3000}>
                  <img
                      className={classes.image}
                      src="/assets/landing/landingPage.png"
                      alt="Landing Page Phone Photo"
                  />
                </Fade>

              </Grid>
            </Grid>
          </div>
        </Grid>
      )}
    </Grid>
  );
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "createAccount" })(Index));
