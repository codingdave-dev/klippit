import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { Field } from "redux-form";

import TextAreaInput from "../../common/form/TextAreaInput";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
      textAlign: "center",
    },
  },
  inputWrapper: {
    width: "100%",
    marginTop: "2em",
  },

  button: {
    borderRadius: "100px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  buttonGrey: {
    borderRadius: "100px",
    backgroundColor: theme.palette.grey.A200,
    color: theme.palette.common.white,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
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
}));

const DescribeBusinessForm = ({ nextForm, prevForm }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid
      item
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.formWrapper}
    >
      <Grid item>
        <Typography variant={"h5"} className={classes.title}>
          Describe your business in 115 Characters
        </Typography>
      </Grid>

      <Grid item container>
        <Grid item className={classes.inputWrapper}>
          <Field
            inputStyle={classes.textInput}
            name={"businessDescription"}
            placeholder={"Enter the description"}
            rows={15}
            type={"text"}
            variant={"outlined"}
            component={TextAreaInput}
          />
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
        <Grid item container>
          <Grid item style={{ marginRight: "1em" }}>
            <Button
              variant="contained"
              size={"large"}
              className={classes.buttonGrey}
              onClick={() => prevForm("addImages")}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size={"large"}
              className={classes.button}
              onClick={() => nextForm("finePrint")}
            >
              Next Step
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DescribeBusinessForm;
