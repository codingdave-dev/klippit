import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm } from "redux-form";
import TextInput from "../src/common/form/TextInput";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import {
  login,
  resetPassword,
} from "../src/store/actions/authActions/authActions";
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
    fontFamily: 'Whitney Medium, sans-serif',
    fontWeight: 600,
    lineHeight: '42px',
    color: 'rgba(0,0,0,0.87)'
  },
  headerWrapper: {
    marginTop: "5em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  formHeader: {
    fontSize: "32px",
    fontFamily: 'Whitney Medium, sans-serif',
    fontWeight: 700,
    lineHeight: '32px',
    color: 'rgba(0,0,0,0.87)',
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
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
  login,
  resetPassword,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Login = ({
  login,
  resetPassword,
  auth,
  profile,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [forgotPassword, setForgotPassword] = useState(false);
  const [message, setMessage] = useState(null);

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

  const handleResetPassword = () => {
    setMessage("Please check your email and follow instructions.");
  };

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
                {forgotPassword
                    ? "Reset your password"
                    : "Welcome back to Klippit"}
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
                      onSubmit={handleSubmit(
                          forgotPassword ? resetPassword : login
                      )}
                  >
                    <Grid item>
                      <Field
                          inputStyle={classes.textInput}
                          placeholder={"Email address"}
                          label={"Email address"}
                          name={"email"}
                          type={"text"}
                          variant={"outlined"}
                          component={TextInput}
                      />
                    </Grid>
                    {!forgotPassword && (
                        <Grid item>
                          <Field
                              inputStyle={classes.textInput}
                              placeholder={"Password"}
                              label={"Password"}
                              name={"password"}
                              type={"password"}
                              variant={"outlined"}
                              component={TextInput}
                          />
                        </Grid>
                    )}

                    {/*FORGOT PASSWORD*/}
                    {!forgotPassword && (
                        <Grid item>
                          <Grid
                              item
                              container
                              alignItems={"center"}
                              direction={matchesSM ? "column" : null}
                          >
                            <Grid item>
                              <Typography
                                  className={classes.subFormText}
                                  variant={"body2"}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setForgotPassword(true)}
                              >
                                Forgot your password?
                              </Typography>
                            </Grid>
                          </Grid>
                        </Grid>
                    )}

                    {error && (
                        <Grid
                            item
                            style={
                              matchesXS ? { marginTop: "1em" } : { marginTop: "2em" }
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

                    {message && (
                        <Grid
                            item
                            style={
                              matchesXS ? { marginTop: "1em" } : { marginTop: "2em" }
                            }
                        >
                          <Typography
                              variant={"subtitle1"}
                              style={{
                                color: theme.palette.error.main,
                                fontWeight: 600,
                              }}
                          >
                            {message}
                          </Typography>
                        </Grid>
                    )}

                    {/*BUTTON WRAPPER*/}
                    <Grid item className={classes.buttonWrapper}>
                      <Grid
                          item
                          container
                          alignItems={"center"}
                          direction={matchesSM ? "column" : null}
                      >
                        <Grid item>
                          <Typography
                              className={classes.subFormText}
                              variant={"body2"}
                          >
                            Need an account?{" "}
                            <span style={{ fontWeight: "bold" }}>
                            <a
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                                href="/"
                            >
                              Sign up
                            </a>
                          </span>
                            {forgotPassword && (
                                <Fragment>
                                  {" "}
                                  or{" "}
                                  <span
                                      onClick={() => {
                                        setForgotPassword(false);
                                        setMessage(null);
                                      }}
                                      style={{
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                      }}
                                  >
                                Log in
                              </span>
                                </Fragment>
                            )}
                          </Typography>
                        </Grid>

                        <Grid
                            item
                            style={
                              matchesSM
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
                              onClick={() =>
                                  forgotPassword ? handleResetPassword() : null
                              }
                          >
                            {forgotPassword ? "Reset" : "Login"}
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      {!matchesMD && (
          <Grid item lg={6} >
            <div className={classes.imageWrapper}>
              <Grid item container justify={"center"}>
                <Grid item>
                  <Fade in={true} timeout={500}>
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
)(reduxForm({ form: "loginForm" })(Login));
