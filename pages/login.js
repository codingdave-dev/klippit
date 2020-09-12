import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm } from "redux-form";
import TextInput from "../src/common/form/TextInput";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login } from "../src/store/actions/authActions/authActions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "6em",
    [theme.breakpoints.down("md")]: {
      padding: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em",
    },
  },
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
    fontSize: "1.5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5em",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1.4em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1em",
    },
  },
  headerWrapper: {
    marginTop: "3em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  formHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6em",
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
    marginTop: "1.1em",
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

  image: {
    borderRadius: "10px",
    width: "450px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
}));

const actions = {
  login,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Login = ({ login, auth, profile, handleSubmit, error, submitting }) => {
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
      className={classes.wrapper}
      alignItems={matchesMD ? "center" : null}
    >
      <Grid item lg={6} md={12} sm={12} xs={12}>
        {/*LOGO CONTAINER*/}
        <Grid
          item
          container
          justify={matchesMD ? "center" : null}
          alignItems={"center"}
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
              Welcome bact to Klippit
            </Typography>
          </Grid>
        </Grid>

        {/*FORM*/}
        <Grid item container justify={matchesMD ? "center" : null}>
          <Grid item className={classes.formWrapper}>
            <Grid item container direction={"column"}>
              <Grid item>
                <form autoComplete={"off"} onSubmit={handleSubmit(login)}>
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

                  {/*FORGOT PASSWORD*/}
                  <Grid item>
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
                          <a
                            style={{
                              textDecoration: "none",
                              color: "black",
                            }}
                            href="/forgotPassword"
                          >
                            Forgot your password?
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  {/*BUTTON WRAPPER*/}
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
                          Login
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

      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12}
        style={matchesMD ? { marginTop: "4em" } : null}
      >
        <Grid item container justify={"center"}>
          <Grid item>
            <img
              className={classes.image}
              src="https://via.placeholder.com/500x600.png"
              alt=""
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "loginForm" })(Login));
