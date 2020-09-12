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
    fontSize: "5em",
    [theme.breakpoints.down("md")]: {
      fontSize: "4em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.2em",
    },
  },
  subTitle: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5em",
    },
  },

  formWrapper: {
    marginTop: "3em",
    width: '540px',
    [theme.breakpoints.down("sm")]: {
      width: "450px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "280px",
    },
  },

  textInput: {
    marginTop: "0.8em",
    marginBottom: "0.8em",
    backgroundColor: theme.palette.common.white,
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


  button: {
    color: theme.palette.common.white,
  },
}));

const WelcomeForm = ({ nextPage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (

      <Fragment>
        <Grid item>

          <Grid item container direction={'column'} alignItems={'center'}>
            <Grid item>
              <Typography variant={"h2"} className={classes.title}>
                Welcome to Klippit Merchants!
              </Typography>
            </Grid>

            <Grid item>
              <Typography variant={"h6"} className={classes.subTitle}>
                We're excited to learn more about you and your business!
                </Typography>
            </Grid>
            <Grid item>
              <Typography variant={"h6"} className={classes.subTitle}>
                Input your first and last name.
              </Typography>
            </Grid>
          </Grid>

        </Grid>

        <Grid item>
          <Grid item container justify={"center"}>
            <Grid item className={classes.formWrapper}>
              <Grid item container >
                <Grid item lg={6} md={6} sm={6} xs={6} style={{paddingRight: '0.8em'}}>
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
                <Grid item  lg={6} md={6} sm={6} xs={6} style={{paddingLeft: '0.8em'}}>
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

              <Grid item style={{ marginTop: "1.5em" }}>
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
        </Grid>
      </Fragment>




  );
};

export default WelcomeForm;
