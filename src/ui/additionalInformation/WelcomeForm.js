import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field } from "redux-form";
import TextInput from "../../common/form/TextInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2.4em",
      textAlign: "center",
    },
  },

  subTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
      textAlign: "center",
    },
  },

  formWrapper: {
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },

  inputWrapper: {
    padding: "1em",
    marginTop: "2em",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5em",
      marginTop: 0,
    },
  },

  textInput: {
    backgroundColor: theme.palette.common.white,
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
    padding: "1em",
    [theme.breakpoints.down("xs")]: {
      padding: "0.5em",
    },
  },
  button: {
    color: theme.palette.common.white,
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const WelcomeForm = ({ nextPage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Fragment>
      {/*WELCOME TEXT*/}
      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            Welcome to Klippit Merchants!
          </Typography>
        </Grid>

        <Grid item style={matchesXS ? { marginTop: "0.5em" } : null}>
          <Typography variant={"h5"} className={classes.subTitle}>
            We're excited to learn more about you and your business!
          </Typography>
        </Grid>

        <Grid item style={matchesXS ? { marginBottom: "0.5em" } : null}>
          <Typography variant={"h5"} className={classes.subTitle}>
            Input your first and last name.
          </Typography>
        </Grid>
      </Grid>

      {/*FORM*/}
      <Grid item container justify={"center"}>
        <Grid
          item
          container
          direction={"column"}
          className={classes.formWrapper}
        >
          <Grid item>
            <Grid item container>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputWrapper}
              >
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"First Name"}
                  label={"First Name"}
                  name={"firstName"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
              <Grid
                item
                lg={6}
                md={6}
                sm={6}
                xs={12}
                className={classes.inputWrapper}
              >
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Last Name"}
                  label={"Last Name"}
                  name={"lastName"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
            </Grid>
          </Grid>

          {/*BUTTON*/}
          <Grid item className={classes.buttonWrapper}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              size={"large"}
              fullWidth
              onClick={() => nextPage(1)}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default WelcomeForm;