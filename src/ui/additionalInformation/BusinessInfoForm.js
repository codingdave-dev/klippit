import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field } from "redux-form";
import TextInput from "../../common/form/TextInput";
import Button from "@material-ui/core/Button";
import CheckboxInput from "../../common/form/CheckboxInput";
import TextField from "@material-ui/core/TextField";

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
}));

const BusinessInfoForm = ({ nextPage }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <Fragment>
      <Grid item>
        <Typography variant={"h2"} className={classes.title}>
          Tell us more about your business
        </Typography>
      </Grid>

      <Grid item>
        <Grid item container justify={"center"}>
          <Grid item className={classes.formWrapper}>
            <Grid item container direction={"column"}>
              <Grid item>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Name of the business"}
                  label={"Name of the business"}
                  name={"nameOfBusiness"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
              <Grid item>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Phone Number"}
                  label={"Phone Number"}
                  name={"phoneNumber"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>

              <Grid item style={{ marginTop: "3em" }}>
                <Button
                  className={classes.button}
                  variant="contained"
                  color="secondary"
                  size={"large"}
                  fullWidth
                  onClick={() => nextPage(3)}
                >
                  Continue
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>


  );
};

export default BusinessInfoForm;
