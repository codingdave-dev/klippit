import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import CheckCircleInput from "../../common/form/CheckCircleInput";
import { Field, FieldArray, reduxForm, SubmissionError } from "redux-form";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import AddCircleIcon from "@material-ui/icons/AddCircle";
import CancelIcon from "@material-ui/icons/Cancel";

import TextInput from "../../common/form/TextInput";
import { connect } from "react-redux";
import { createCampaignStep5 } from "../../store/actions/campaignActions/campaignActions";
import router, {useRouter} from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  subTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7em",
    },
  },
  checkbox: {
    color: theme.palette.primary.main,
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.6em",
      },
    },
  },
  checkboxLabel: {
    color: theme.palette.primary.main,
    "& .MuiTypography-body1": {
      fontSize: "1.2em",
      fontFamily: "Raleway",
      [theme.breakpoints.down("md")]: {
        fontSize: "0.9em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.2em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7em",
      },
    },
  },
  addLocationWrapper: {
    marginTop: "1em",
    marginLeft: "-12px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "-18px",
    },
  },
  addLocation: {
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

  button: {
    width: '130px',
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
  error: {
    color: theme.palette.error.main,
    fontWeight: 300,
  },
}));

// const mapStateToProps = (state) => {
//   return {
//     initialValues: state.campaigns.addCampaign[0],
//   };
// };

const actions = {
  createCampaignStep5,
};

const LocationForm = ({
  createCampaignStep5,
  pushArray,
  campaignId,
  nextForm,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [addLocation, setAddLocation] = useState(false);
  const router = useRouter()

  const handleLocation = async (values) => {
    if (
      values.myBusinessHasAPhysicalLocation ||
      values.myBusinessDoesntHaveAPhysicalLocation === true
    ) {
      if (addLocation) {
        if (
          values.locations[0].streetAddress &&
          values.locations[0].city &&
          values.locations[0].state &&
          values.locations[0].zip &&
          values.locations[0].phoneNumber
        ) {
          await createCampaignStep5(campaignId, values);
          router.push({ pathname: "/auth/createCampaign/confirmation" });
        } else {
          throw new SubmissionError({ _error: "Please fill in all fields" });
        }
      } else {
        throw new SubmissionError({ _error: "Please add a business address" });
      }
    } else {
      throw new SubmissionError({ _error: "Please select a location option" });
    }
  };

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
          className={classes.addLocationWrapper}
        >
          <Grid item>
            <IconButton
              aria-label="add location"
              onClick={() => {
                fields.push({});
                setAddLocation(true);
              }}
              className={classes.addIcon}
            >
              <AddCircleIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography variant={"subtitle1"} className={classes.addLocation}>
              ADD LOCATION
            </Typography>
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
          <Grid
            item
            lg={1}
            md={1}
            sm={1}
            xs={1}
            style={matchesSM ? null : { paddingLeft: "0.8em" }}
          >
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <IconButton
                    aria-label="delete"
                    className={classes.cancelIcon}
                    onClick={() => fields.remove(index)}
                  >
                    <CancelIcon />
                  </IconButton>
                </Grid>

                {index + 1 === fields.length && (
                  <Grid item>
                    <IconButton
                      aria-label="delete"
                      className={classes.addIcon}
                      onClick={() => fields.push({})}
                    >
                      <AddCircleIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            lg={11}
            md={11}
            sm={11}
            xs={11}
            style={matchesSM ? { paddingLeft: "1em" } : null}
          >
            <Grid item container direction={"column"}>
              <Grid
                item
                style={matchesSM ? { padding: "0.5em" } : { padding: "1em" }}
              >
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
                <Grid item container direction={matchesSM ? "column" : "row"}>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={
                      matchesSM ? { padding: "0.5em" } : { padding: "1em" }
                    }
                  >
                    <Field
                      inputStyle={classes.textInput}
                      placeholder={"City"}
                      name={`${location}.city`}
                      type={"text"}
                      variant={"outlined"}
                      component={TextInput}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={
                      matchesSM ? { padding: "0.5em" } : { padding: "1em" }
                    }
                  >
                    <Field
                      inputStyle={classes.textInput}
                      placeholder={"State"}
                      name={`${location}.state`}
                      type={"text"}
                      variant={"outlined"}
                      component={TextInput}
                    />
                  </Grid>
                  <Grid
                    item
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    style={
                      matchesSM ? { padding: "0.5em" } : { padding: "1em" }
                    }
                  >
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

              <Grid
                item
                style={matchesSM ? { padding: "0.5em" } : { padding: "1em" }}
              >
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
    <Fragment>
      <form autoComplete={"off"} onSubmit={handleSubmit(handleLocation)}>
        <Grid
          item
          container
          direction={"column"}
          className={classes.formWrapper}
        >
          <Grid item>
            <Typography variant={"h5"} className={classes.title}>
              Location
            </Typography>
          </Grid>
          <Grid item style={{ marginTop: "2em" }}>
            <Typography variant={"subtitle1"} className={classes.subTitle}>
              Review your business location(s) where customers may redeem their
              vouchers.
            </Typography>
          </Grid>

          <Grid
            item
            container
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
          >
            <Grid item lg={6} md={6} sm={12} xs={12}>
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
              sm={12}
              xs={12}
              style={
                matchesSM ? { marginTop: "0.2em" } : { paddingLeft: "1.5em" }
              }
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

          {error && (
            <Typography variant={"subtitle1"} className={classes.error}>
              {error}
            </Typography>
          )}

          <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
            <Grid item container>
              <Grid item style={{ marginRight: "1em" }}>
                <Button
                  variant="contained"
                  size={"large"}
                  className={classes.buttonGrey}
                  // onClick={() => prevForm("finePrint")}
                >
                  Back
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  size={"large"}
                  className={classes.button}
                  type={"submit"}
                  disabled={submitting}
                >
                  {submitting ? <CircularProgress size={30} style={{color: 'white'}}/> : 'Next Step'}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "addBusinessLocation" })(LocationForm));
