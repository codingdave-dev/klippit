import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import { useRouter } from "next/router";

import Header from "../../../src/ui/Header";

import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import WelcomeForm from "../../../src/ui/additionalInformation/WelcomeForm";
import TypeOfBusinessForm from "../../../src/ui/additionalInformation/TypeOfBusinessForm";
import BusinessInfoForm from "../../../src/ui/additionalInformation/BusinessInfoForm";
import ManagementResponsibilitiesForm from "../../../src/ui/additionalInformation/ManagementResponsibilitiesForm";
import NumberOfPeopleForm from "../../../src/ui/additionalInformation/NumberOfPeopleForm";
import {
  addBusinessInfo,
  addBusinessType,
  addFirstLastName,
  addManagementResponsibilities,
  addNumberOfPeople,
} from "../../../src/store/actions/businessActions/businessActions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.inputGrey,
    width: "100%",
    paddingTop: "10em",
    paddingBottom: "20em",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10em",
    },
  },
}));

const actions = {
  addFirstLastName,
  addBusinessType,
  addBusinessInfo,
  addManagementResponsibilities,
  addNumberOfPeople,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const Index = ({
  addFirstLastName,
  addBusinessType,
  addBusinessInfo,
  addManagementResponsibilities,
  addNumberOfPeople,
  auth,
  profile,
}) => {
  const classes = useStyles();
  const theme = useTheme();

  const uid = auth.uid;
  const router = useRouter();

  const [welcomeForm, setWelcomeForm] = useState(true);
  const [businessTypeForm, setBusinessTypeForm] = useState(false);
  const [businessInfoForm, setBusinessInfoForm] = useState(false);
  const [
    managementResponsibilitiesForm,
    setManagementResponsibilitiesForm,
  ] = useState(false);
  const [numberOfPeopleForm, setNumberOfPeopleForm] = useState(false);

  useEffect(() => {
    if (
      auth.isLoaded === true &&
      auth.isEmpty === false &&
      profile.additionalInfoSet === true
    ) {
      router.push({ pathname: "/auth/dashboard" });
    }

    if (auth.isLoaded === true && auth.isEmpty === true) {
      router.push({ pathname: "/login" });
    }
  });

  const handleFirstLastName = async (values) => {
    await addFirstLastName(uid, values);
    setWelcomeForm(false);
    setBusinessTypeForm(true);
  };

  const handleBusinessType = async (values) => {
    await addBusinessType(uid, values);
    setBusinessTypeForm(false);
    setBusinessInfoForm(true);
  };

  const handleBusinessInfo = async (values) => {
    await addBusinessInfo(uid, values);
    setBusinessInfoForm(false);
    setManagementResponsibilitiesForm(true);
  };

  const handleManagementResponsibilities = async (values) => {
    await addManagementResponsibilities(uid, values);
    setManagementResponsibilitiesForm(false);
    setNumberOfPeopleForm(true);
  };

  const handleNumberOfPeople = async (values) => {
    await addNumberOfPeople(uid, values);
    router.push({ pathname: "/auth/dashboard" });
  };

  return (
    <Fragment>
      <Header />

      <Grid container>
        <Grid item className={classes.wrapper}>
          <Grid item container direction={"column"} alignItems={"center"}>
            {welcomeForm && (
              <WelcomeForm handleFirstLastName={handleFirstLastName} />
            )}

            {businessTypeForm && (
              <TypeOfBusinessForm handleBusinessType={handleBusinessType} />
            )}

            {businessInfoForm && (
              <BusinessInfoForm handleBusinessInfo={handleBusinessInfo} />
            )}

            {managementResponsibilitiesForm && (
              <ManagementResponsibilitiesForm
                handleManagementResponsibilities={
                  handleManagementResponsibilities
                }
              />
            )}

            {numberOfPeopleForm && (
              <NumberOfPeopleForm handleNumberOfPeople={handleNumberOfPeople} />
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(mapStateToProps, actions)(Index);
