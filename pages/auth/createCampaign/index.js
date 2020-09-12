import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import Typography from "@material-ui/core/Typography";
import ChooseServiceAndPriceForm from "../../../src/ui/createCampaign/ChooseServiceAndPriceForm";
import AddImagesForm from "../../../src/ui/createCampaign/AddImagesForm";
import DescribeBusinessForm from "../../../src/ui/createCampaign/DescribeBusinessForm";
import FinePrintForm from "../../../src/ui/createCampaign/FinePrintForm";
import LocationForm from "../../../src/ui/createCampaign/LocationForm";
import { createCampaign } from "../../../src/store/actions/campaignActions/campaignActions";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
}));

const actions = {
  createCampaign,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  loading: state.loading.loading
});

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

const Index = ({ auth, createCampaign, handleSubmit, error, submitting, loading }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const [stepperValue, setStepperValue] = useState(0);
  const [servicePriceForm, setServicePriceForm] = useState(true);
  const [addImagesForm, setAddImagesForm] = useState(false);
  const [describeBusinessForm, setDescribeBusinessForm] = useState(false);
  const [finePrintForm, setFinePrintForm] = useState(false);
  const [locationForm, setLocationForm] = useState(false);

  const uid = auth.uid;
  const router = useRouter();

  const handleCreateCampaign = async (values) => {
    const img1 = image1 ? image1 : "";
    const img2 = image2 ? image2 : "";
    const img3 = image3 ? image3 : "";

    await createCampaign(uid, values, img1, img2, img3)

    if (!loading) {
      await router.push({ pathname: "/auth/campaigns" })
    }
  };

  const handleNextForm = (form) => {
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

  const handlePrevForm = (form) => {
    if (form === "servicePrice") {
      setAddImagesForm(false);
      setServicePriceForm(true);
      setStepperValue(stepperValue - 1);
    }

    if (form === "addImages") {
      setDescribeBusinessForm(false);
      setServicePriceForm(false);
      setAddImagesForm(true);
      setStepperValue(stepperValue - 1);
    }

    if (form === "describeBusiness") {
      setFinePrintForm(false);
      setDescribeBusinessForm(true);
      setServicePriceForm(false);
      setAddImagesForm(false);
      setStepperValue(stepperValue - 1);
    }
    if (form === "finePrint") {
      setFinePrintForm(true);
      setLocationForm(false);
      setDescribeBusinessForm(true);
      setServicePriceForm(false);
      setAddImagesForm(false);
      setStepperValue(stepperValue - 1);
    }
  };

  return (
    <Fragment>
      <DashboardHeader />

      <Grid item container direction={"column"} alignItems={"center"}>
        <Grid item className={classes.wrapper}>
          <Grid item container direction={"column"} alignItems={"center"}>
            <Grid item>
              <Typography variant={"h4"}>
                Create a new campaign by following the steps below
              </Typography>
            </Grid>

            <Grid item style={{ marginTop: "4em", width: "100%" }}>
              <Stepper alternativeLabel activeStep={stepperValue}>
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

          <form
            autoComplete={"off"}
            onSubmit={handleSubmit(handleCreateCampaign)}
          >
            {servicePriceForm && (
              <ChooseServiceAndPriceForm nextForm={handleNextForm} />
            )}
            {addImagesForm && (
              <AddImagesForm
                nextForm={handleNextForm}
                prevForm={handlePrevForm}
                image1={image1}
                setImage1={setImage1}
                image2={image2}
                setImage2={setImage2}
                image3={image3}
                setImage3={setImage3}
              />
            )}

            {describeBusinessForm && (
              <DescribeBusinessForm
                nextForm={handleNextForm}
                prevForm={handlePrevForm}
              />
            )}

            {finePrintForm && (
              <FinePrintForm
                nextForm={handleNextForm}
                prevForm={handlePrevForm}
              />
            )}

            {locationForm && (
              <LocationForm
                nextForm={handleNextForm}
                prevForm={handlePrevForm}
                submitting={submitting}
              />
            )}
          </form>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "createCampaign", destroyOnUnmount: false })(Index));
