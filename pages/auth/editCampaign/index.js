import React, {Fragment, useEffect, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Footer from "../../../src/ui/Footer";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { connect } from "react-redux";
import ChooseServiceAndPriceForm_Edit from "../../../src/ui/edit Campaign/ChooseServiceAndPriceForm_Edit";
import {fetchCampaign} from "../../../src/store/actions/campaignActions/campaignActions";
import {useRouter, withRouter} from "next/router";
import Router from "next/router";
import AddImagesForm_Edit from "../../../src/ui/edit Campaign/AddImagesForm_Edit";
import DescribeBusinessForm_Edit from "../../../src/ui/edit Campaign/DescribeBusinessForm_Edit";
import FinePrintForm_Edit from "../../../src/ui/edit Campaign/FinePrintForm_Edit";
import LocationForm_Edit from "../../../src/ui/edit Campaign/LocationForm_Edit";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },

  title: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },

  subTitle: {
    color: "grey",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },

  stepperWrapper: {
    marginTop: "4em",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: "2em",
    },
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
}));

const steps = [
  {
    id: "1",
    name: "Choose services",
    name2: "and Price",
  },
  {
    id: "2",
    name: "Select Deal",
    name2: "Image",
  },
  {
    id: "3",
    name: "Additional",
    name2: "Information",
  },
  {
    id: "4",
    name: "Set your",
    name2: "Fine print",
  },
  {
    id: "5",
    name2: "Location",
  },
];

const actions = {
  fetchCampaign
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
  loading: state.loading.loading,
});

const Index = ({ auth, profile, fetchCampaign, router, loading }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [stepperValue, setStepperValue] = useState(0);
  const [servicePriceForm, setServicePriceForm] = useState(true);
  const [addImagesForm, setAddImagesForm] = useState(false);
  const [describeBusinessForm, setDescribeBusinessForm] = useState(false);
  const [finePrintForm, setFinePrintForm] = useState(false);
  const [locationForm, setLocationForm] = useState(false);

  const [campaignId, setCampaignId] = useState('')


  const id = router.query.id;


  useEffect(() => {
    if (auth.isLoaded === true && auth.isEmpty === true) {
      // router.push({ pathname: "/login" });
      router.push({pathname: '/login'});
    }

    fetchCampaign(id)

  }, [fetchCampaign, id, router, auth]);


  const handleNextForm = (form, ref) => {
    setCampaignId(ref);
    if (form === "addImages") {
      setServicePriceForm(false);
      setAddImagesForm(true);
      setStepperValue(stepperValue + 1);
    }

    if (form === "describeBusiness") {
      setServicePriceForm(false);
      setAddImagesForm(false);
      setDescribeBusinessForm(true);
      setStepperValue(stepperValue + 1);
    }

    if (form === "finePrint") {
      setServicePriceForm(false);
      setAddImagesForm(false);
      setDescribeBusinessForm(false);
      setFinePrintForm(true);
      setStepperValue(stepperValue + 1);
    }

    if (form === "location") {
      setServicePriceForm(false);
      setAddImagesForm(false);
      setDescribeBusinessForm(false);
      setFinePrintForm(false);
      setLocationForm(true);
      setStepperValue(stepperValue + 1);
    }
  };

  return (
    <Fragment>
      <DashboardHeader />

      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item className={classes.wrapper}>
          {/*TITLE STEPPER BLOCK*/}
          <Grid item container direction={"column"} alignItems={"center"}>
            {/*TITLE*/}
            <Grid item>
              <Typography variant={"h4"} className={classes.title}>
                Create a deal for influencers by following steps below
              </Typography>
            </Grid>

            <Grid item style={{ marginTop: "1em" }}>
              <Typography variant={"h6"} className={classes.subTitle}>
                Your deal will be available at launch
              </Typography>
            </Grid>

            {/*STEPPER*/}
            <Grid item className={classes.stepperWrapper}>
              <Stepper
                alternativeLabel={matchesXS ? false : true}
                activeStep={stepperValue}
                orientation={matchesXS ? "vertical" : "horizontal"}
              >
                {steps.map((step) => (
                  <Step key={step.id}>
                    <StepLabel>
                      {step.name}
                      <br />
                      {step.name2}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Grid>
          </Grid>
          {/*FORMS*/}
          {/*SERVICE FORM*/}
          {servicePriceForm && (
            <ChooseServiceAndPriceForm_Edit nextForm={handleNextForm} />
          )}
          {addImagesForm && (
            <AddImagesForm_Edit campaignId={campaignId} nextForm={handleNextForm} />
          )}
          {describeBusinessForm && (
            <DescribeBusinessForm_Edit
              campaignId={campaignId}
              nextForm={handleNextForm}
            />
          )}
          {finePrintForm && (
            <FinePrintForm_Edit campaignId={campaignId} nextForm={handleNextForm} />
          )}
          {locationForm && (
            <LocationForm_Edit campaignId={campaignId} nextForm={handleNextForm} />
          )}
        </Grid>
      </Grid>
      <Footer />
    </Fragment>
  );
};

export default withRouter(connect(mapStateToProps, actions)(Index));
// export default connect(mapStateToProps, actions)(Index);
