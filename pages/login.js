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
    marginTop: "4em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "8em",
    },
  },
  logoText: {
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  image: {
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "350px",
    },
  },
  leftWrapper: {
    marginTop: "6em",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3em",
    },
  },
  formHeader: {
    fontSize: "2em",
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },

  formWrapper: {
    marginTop: "1em",
    width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  textInput: {
    marginTop: "0.8em",
    marginBottom: "0.8em",
    backgroundColor: theme.palette.common.inputGrey,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        // borderColor: 'red',
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
  subFormText: {
    fontSize: "0.9em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.4em",
    },
  },
  button: {
    color: theme.palette.common.white,
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
    >
      <Grid item lg={6} md={12} sm={12} xs={12}>
        <Grid item container justify={"center"}>
          <Grid item>
            <Grid
              item
              container
              direction={"column"}
              alignItems={matchesMD ? "center" : null}
            >
              <Grid item>
                <Grid item container alignItems={"center"}>
                  <Grid item>
                    <img
                      className={classes.logo}
                      src="/assets/logo/logo.png"
                      alt="logo"
                    />
                  </Grid>
                  <Grid item>
                    <Typography className={classes.logoText} variant={"h6"}>
                      Merchant Waitlist
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item className={classes.leftWrapper}>
                <Grid
                  item
                  container
                  direction={"column"}
                  alignItems={matchesMD ? "center" : null}
                >
                  <Grid item>
                    <Typography variant={"h4"} className={classes.formHeader}>
                      Welcome back to Klippit
                    </Typography>
                  </Grid>

                  <Grid item className={classes.formWrapper}>
                    <Grid item container direction={"column"}>
                      <form autoComplete={"off"} onSubmit={handleSubmit(login)}>
                        <Grid item>
                          <Field
                            inputStyle={classes.textInput}
                            placeholder={"Email address"}
                            label={'Email address'}
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
                            label={'Password'}
                            name={"password"}
                            type={"password"}
                            variant={"outlined"}
                            component={TextInput}
                          />
                        </Grid>

                        <Grid item style={{ marginTop: "1.1em" }}>
                          <Grid item container alignItems={"center"}>
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
                            <Grid item style={{ marginLeft: "auto" }}>
                              <Button
                                className={classes.button}
                                variant="contained"
                                color="secondary"
                                size={"medium"}
                                type={"submit"}
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
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        xs={12}
        style={matchesMD ? { marginTop: "3em" } : null}
      >
        <Grid item container direction={"column"} alignItems={"center"}>
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
