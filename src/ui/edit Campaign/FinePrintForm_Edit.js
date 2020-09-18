import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import CheckCircleInput from "../../common/form/CheckCircleInput";

import { Field, reduxForm, SubmissionError } from "redux-form";

import Button from "@material-ui/core/Button";
import handleSubmit from "redux-form/lib/handleSubmit";
import {
  createCampaignStep4,
  editCampaignStep4,
} from "../../store/actions/campaignActions/campaignActions";
import { connect } from "react-redux";
import { withRouter } from "next/router";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      padding: "1.5em",
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

  columnTitle: {
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },

  checkbox: {
    color: theme.palette.primary.main,
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8em",
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
      [theme.breakpoints.down("sm")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.8em",
      },
    },
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
  error: {
    color: theme.palette.error.main,
    fontWeight: 300,
  },
}));

const leftChecks = [
  {
    id: "mayRedeemAcrossVisits",
    name: "May Redeem across visits",
  },
  {
    id: "appointmentRequired",
    name: "Appointment Required",
  },
  {
    id: "doesNotShipToPOBoxes",
    name: "Does not ship to PO Boxes",
  },
  {
    id: "mustPurchaseRedeemTogetherToSitTogether",
    name: "Must purchase / redeem together to sit together",
  },
  {
    id: "newClientsOnly",
    name: "New clients only",
  },

  {
    id: "onlineOnly",
    name: "Online only",
  },

  {
    id: "expirationVaries",
    name: "Expiration Varies",
  },

  {
    id: "amountPaidNeverExpires",
    name: "Amount paid never expires",
  },
];

const actions = {
  editCampaignStep4,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    initialValues: state.campaigns.addCampaign[0],
  };
};

const FinePrintForm = ({
  editCampaignStep4,
  campaignId,
  nextForm,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const handleFinePrint = async (values) => {
    if (
      values.mayRedeemAcrossVisits ||
      values.appointmentRequired ||
      values.doesNotShipToPOBoxes ||
      values.mustPurchaseRedeemTogetherToSitTogether ||
      values.newClientsOnly ||
      values.onlineOnly ||
      values.expirationVaries ||
      values.amountPaidNeverExpires
    ) {
      let ref = await editCampaignStep4(campaignId, values);
      nextForm("location", ref);
    } else {
      throw new SubmissionError({ _error: "Please choose an option" });
    }
  };

  return (
    <Grid item container direction={"column"} className={classes.formWrapper}>
      <Grid item>
        <Typography variant={"h5"} className={classes.title}>
          Fine Print
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: "2em" }}>
        <Typography variant={"subtitle1"} className={classes.subTitle}>
          Set the conditions and restrictions concerning vouchers redemption and
          the Merchant Offering to be stated on the Vouchers.
        </Typography>
      </Grid>

      <form autoComplete={"off"} onSubmit={handleSubmit(handleFinePrint)}>
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "2em" }}
        >
          <Grid
            item
            lg={7}
            md={8}
            sm={12}
            xs={12}
            style={{ paddingRight: "1.5em" }}
          >
            <Grid item>
              <Typography variant={"h6"} className={classes.columnTitle}>
                Check all that apply:
              </Typography>
            </Grid>

            <Grid item>
              <Grid item container>
                <Grid item lg={12} md={12} sm={12} xs={12}>
                  {leftChecks.map((option) => (
                    <Grid item key={option.id}>
                      <Grid item container alignItems={"center"}>
                        <Grid item>
                          <Field
                            name={`${option.id}`}
                            label={option.name}
                            component={CheckCircleInput}
                            checkboxClass={classes.checkbox}
                            checkboxLabelClass={classes.checkboxLabel}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            lg={5}
            md={4}
            sm={6}
            xs={12}
            style={matchesSM ? { marginTop: "2em" } : { paddingLeft: "1.5em" }}
          >
            <Grid item>
              <Typography variant={"h6"} className={classes.columnTitle}>
                ADD CUSTOM
              </Typography>
            </Grid>
          </Grid>
        </Grid>

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
                // onClick={() => prevForm("describeBusiness")}
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
      </form>
    </Grid>
  );
};

export default withRouter(
  connect(
    mapStateToProps,
    actions
  )(
    reduxForm({ form: "addBusinessFinePrint", enableReinitialize: true })(
      FinePrintForm
    )
  )
);
