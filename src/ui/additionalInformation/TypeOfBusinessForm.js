import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { Field } from "redux-form";
import CheckboxInput from "../../common/form/CheckboxInput";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  title: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: '0.5em',
      paddingRight: '0.5em',
      fontSize: "2.4em",
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

const businessTypes = [
  {
    id: "foodBeverage",
    name: "Food/Beverage",
  },
  {
    id: "beautySpa",
    name: "Beauty & Spa",
  },
  {
    id: "healthFitness",
    name: "Health & Fitness",
  },
  {
    id: "onlineGoods",
    name: "Online Goods",
  },
  {
    id: "events",
    name: "Events",
  },
  {
    id: "thingsToDo",
    name: "Things to do",
  },
];

const TypeOfBusinessForm = ({ nextPage }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Fragment>
      {/*TYPE OF BUSINESS*/}
      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            What type of business is this?
          </Typography>
        </Grid>
      </Grid>

      {/*BUSINESS OPTIONS*/}
      <Grid item container justify={"center"}>
        <Grid item className={classes.optionWrapper}>
          {businessTypes.map((business) => (
            <Grid key={business.id} item className={classes.option}>
              <Grid item container alignItems={"center"}>
                <Grid item>
                  <Typography variant={"subtitle1"}>{business.name}</Typography>
                </Grid>

                <Grid item style={{ marginLeft: "auto" }}>
                  <Field
                    name={business.id}
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
              onClick={() => nextPage(2)}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TypeOfBusinessForm;
