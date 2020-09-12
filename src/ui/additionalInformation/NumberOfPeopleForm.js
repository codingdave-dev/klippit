import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field } from "redux-form";
import CheckboxInput from "../../common/form/CheckboxInput";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "2em",
      textAlign: "center",
    },
  },
  optionWrapper: {
    marginTop: "3em",
    width: "500px",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  option: {
    marginTop: "0.8em",
    marginBottom: "0.8em",
    paddingTop: "8px",
    paddingBottom: "8px",
    paddingLeft: "30px",
    backgroundColor: theme.palette.common.white,
    borderRadius: "10px",
    cursor: "pointer",
    transition: "transform 100ms ease-in",
    "&:hover": {
      boxShadow: "0px 5px 17px -7px rgba(0,0,0,0.75)",
      transform: "scale(1.01)",
    },
  },
  checkbox: {
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
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

const numberOfEmployees = [
  {
    id: "1to10",
    name: "1 - 10",
  },
  {
    id: "11to50",
    name: "11 - 50",
  },
  {
    id: "51to250",
    name: "51 - 250",
  },
  {
    id: "251to1000",
    name: "251 - 1000",
  },
  {
    id: "1000plus",
    name: "1000 +",
  },
];

const NumberOfPeopleForm = ({ submitting }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Fragment>
      {/*NUMBER OF PEOPLE*/}
      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            How many people work at your company?
          </Typography>
        </Grid>
      </Grid>

      {/*PEOPLE OPTIONS*/}
      <Grid item container justify={"center"}>
        <Grid item className={classes.optionWrapper}>
          {numberOfEmployees.map((number) => (
            <Grid key={number.id} item className={classes.option}>
              <Grid item container alignItems={"center"}>
                <Grid item>
                  <Typography variant={"subtitle1"}>{number.name}</Typography>
                </Grid>

                <Grid item style={{ marginLeft: "auto" }}>
                  <Field
                    name={number.id}
                    component={CheckboxInput}
                    checkboxClass={classes.checkbox}
                  />
                </Grid>
              </Grid>
            </Grid>
          ))}

          <Grid item style={{ marginTop: "3em" }}>
            <Button
              className={classes.button}
              variant="contained"
              color="secondary"
              size={"large"}
              fullWidth
              type={"submit"}
              disabled={submitting}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default NumberOfPeopleForm;