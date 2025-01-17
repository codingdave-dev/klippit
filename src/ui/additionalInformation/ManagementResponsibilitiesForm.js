import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Field, reduxForm, SubmissionError } from "redux-form";
import CheckboxInput from "../../common/form/CheckboxInput";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import handleSubmit from "redux-form/lib/handleSubmit";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: 'Whitney, sans-serif',
    fontWeight: '700',
    fontSize: '48px',
    lineHeight: '58px',
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.9em",
      textAlign: "center",
    },
  },
  subTitle: {
    color: 'grey',
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
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
  error: {
    color: theme.palette.error.main,
    fontWeight: 500,
  },
}));

const managementResponsibilities = [
  {
    id: "manager",
    name: "Manager",
  },
  {
    id: "individualContributor",
    name: "Individual Contributor",
  },
  {
    id: "executive",
    name: "Executive",
  },
];


const ManagementResponsibilitiesForm = ({
  handleManagementResponsibilities,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const validate = (value) => {
    if (
      value.manager ||
      value.individualContributor ||
      value.executive === true
    ) {
      handleManagementResponsibilities(value);
    } else {
      throw new SubmissionError({ _error: "Please choose an option" });
    }
  };

  return (
    <Fragment>
      {/*TYPE OF BUSINESS*/}
      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item>
          <Typography variant={"h2"} className={classes.title}>
            What best describes your management responsibilities/level
          </Typography>
        </Grid>
        <Grid item style={{ marginTop: "1em" }}>
          <Typography variant={"h5"} className={classes.subTitle}>
            Select the role that best describes your job function
          </Typography>
        </Grid>
      </Grid>

      {/*BUSINESS OPTIONS*/}
      <form autoComplete={"off"} onSubmit={handleSubmit(validate)}>
        <Grid item container justify={"center"}>
          <Grid item className={classes.optionWrapper}>
            {managementResponsibilities.map((management) => (
              <Grid key={management.id} item className={classes.option}>
                <Grid item container alignItems={"center"}>
                  <Grid item>
                    <Typography variant={"subtitle1"}>
                      {management.name}
                    </Typography>
                  </Grid>

                  <Grid item style={{ marginLeft: "auto" }}>
                    <Field
                      name={management.id}
                      component={CheckboxInput}
                      checkboxClass={classes.checkbox}
                    />
                  </Grid>
                </Grid>
              </Grid>
            ))}

            {error && (
              <Grid item style={{ marginTop: "0.5em" }}>
                <Typography variant={"subtitle1"} className={classes.error}>
                  {error}
                </Typography>
              </Grid>
            )}

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
      </form>
    </Fragment>
  );
};

export default reduxForm({ form: "addManagementResponsibilities" })(
  ManagementResponsibilitiesForm
);
