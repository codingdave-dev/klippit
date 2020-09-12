import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import CheckCircleInput from "../../common/form/CheckCircleInput";
import CheckboxInput from "../../common/form/CheckboxInput";
import { Field, FieldArray, reduxForm, arrayPush } from "redux-form";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import TextInput from "../../common/form/TextInput";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    color: theme.palette.primary.main,
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
    },
  },
  checkboxLabel: {
    color: theme.palette.primary.main,
    "& .MuiTypography-body1": {
      fontSize: "1.2em",
      fontFamily: "Raleway",
    },
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
  addIcon: {
    color: theme.palette.primary.main,
    fontSize: "1.2em",
  },
  cancelIcon: {
    color: theme.palette.error.main,
    fontSize: "1.2em",
  },

  textInput: {
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

const mapStateToProps = () => {
  return {
    pushArray: arrayPush,
  };
};

const LocationForm = ({ nextForm, prevForm, pushArray, submitting }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleAddLocation = () => {
    pushArray("createCampaign", "locations", "");
  };

  // FIELD ARRAY RENDER
  const locationFields = ({ fields, meta: { error, submitFailed } }) => (
    <Fragment>
      {fields.length < 1 && (
        <Grid
          item
          container
          alignItems={"center"}
          style={{ paddingLeft: "0.6em" }}
        >
          <Grid item>
            <IconButton aria-label="delete" onClick={() => fields.push({})}>
              <AddCircleIcon className={classes.addIcon} />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant={"h6"}>ADD LOCATION</Typography>
          </Grid>
        </Grid>
      )}

      {fields.map((location, index) => (
        <Grid
          item
          container
          key={index}
          style={{ marginTop: "1.5em", marginBottom: "2em" }}
        >
          <Grid item lg={1} style={{ paddingLeft: "0.8em" }}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <IconButton
                    aria-label="delete"
                    className={classes.cancelIcon}
                    onClick={() => fields.remove(index)}
                  >
                    <CancelIcon  />
                  </IconButton>
                </Grid>

                {index + 1 === fields.length && (
                  <Grid item>
                    <IconButton aria-label="delete" className={classes.addIcon} onClick={() => fields.push({})}>
                      <AddCircleIcon  />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={11}>
            <Grid item container direction={"column"}>
              <Grid item style={{ padding: "1em" }}>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Street Address"}
                  name={`${location}.streetAddress`}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
              <Grid item>
                <Grid item container>
                  <Grid item lg={4} style={{ padding: "1em" }}>
                    <Field
                      inputStyle={classes.textInput}
                      placeholder={"City"}
                      name={`${location}.city`}
                      type={"text"}
                      variant={"outlined"}
                      component={TextInput}
                    />
                  </Grid>
                  <Grid item lg={4} style={{ padding: "1em" }}>
                    <Field
                      inputStyle={classes.textInput}
                      placeholder={"State"}
                      name={`${location}.state`}
                      type={"text"}
                      variant={"outlined"}
                      component={TextInput}
                    />
                  </Grid>
                  <Grid item lg={4} style={{ padding: "1em" }}>
                    <Field
                      inputStyle={classes.textInput}
                      placeholder={"Zip"}
                      name={`${location}.zip`}
                      type={"text"}
                      variant={"outlined"}
                      component={TextInput}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item style={{ padding: "1em" }}>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Phone number"}
                  name={`${location}.phoneNumber`}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Fragment>
  );

  return (
    <Grid
      item
      container
      direction={"column"}
      style={{
        padding: "2.5em",
        backgroundColor: theme.palette.common.inputGrey,
        borderRadius: "10px",
      }}
    >
      <Grid item>
        <Typography variant={"h5"}>Location</Typography>
      </Grid>

      <Grid
        item
        container
        direction={matchesXS ? "column" : "row"}
        style={{ marginTop: "2em" }}
      >
        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ paddingLeft: "1.5em" }}
        >
          <Grid item>
            <Field
              name={"myBusinessHasAPhysicalLocation"}
              label={"My business has a physical location"}
              component={CheckCircleInput}
              checkboxClass={classes.checkbox}
              checkboxLabelClass={classes.checkboxLabel}
            />
          </Grid>
        </Grid>

        <Grid
          item
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ paddingLeft: "1.5em" }}
        >
          <Grid item>
            <Field
              name={"myBusinessDoesntHaveAPhysicalLocation"}
              label={`My business doesn't have a physical location`}
              component={CheckCircleInput}
              checkboxClass={classes.checkbox}
              checkboxLabelClass={classes.checkboxLabel}
            />
          </Grid>
        </Grid>
      </Grid>

      <FieldArray name="locations" component={locationFields} />

      <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
        <Grid item container>
          <Grid item style={{ marginRight: "1em" }}>
            <Button
              variant="contained"
              size={"large"}
              className={classes.buttonGrey}
              onClick={() => prevForm("finePrint")}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size={"large"}
              className={classes.button}
              type={'submit'}
              disabled={submitting}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps)(
  reduxForm({ form: "createCampaign", destroyOnUnmount: false })(LocationForm)
);
