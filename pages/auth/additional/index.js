import React, {useEffect, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import {useRouter} from "next/router";

import Header from "../../../src/ui/Header";

import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import WelcomeForm from "../../../src/ui/additionalInformation/WelcomeForm";
import TypeOfBusinessForm from "../../../src/ui/additionalInformation/TypeOfBusinessForm";
import BusinessInfoForm from "../../../src/ui/additionalInformation/BusinessInfoForm";
import ManagementResponsibilitiesForm from "../../../src/ui/additionalInformation/ManagementResponsibilitiesForm";
import NumberOfPeopleForm from "../../../src/ui/additionalInformation/NumberOfPeopleForm";
import {addBusinessInfo} from "../../../src/store/actions/businessActions/businessActions";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.common.inputGrey,
    width: "100%",
    paddingTop: "10em",
    paddingBottom: "10em",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "3.5em",
      paddingBottom: "5em",
    },
  },
}));

const actions = {
  addBusinessInfo
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

const Index = ({ addBusinessInfo, auth, profile, handleSubmit, error, submitting }) => {
  const classes = useStyles();
  const theme = useTheme();

  const uid = auth.uid
  const router = useRouter()

  const [welcomeForm, setWelcomeForm] = useState(true);
  const [businessTypeForm, setBusinessTypeForm] = useState(false);
  const [businessInfoForm, setBusinessForm] = useState(false);
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

    if (
        auth.isLoaded === true &&
        auth.isEmpty === true
    ) {
      router.push({ pathname: "/login" });
    }


  });


  const handleNextPage = (page) => {
    if (page === 1) {
      setWelcomeForm(false);
      setBusinessTypeForm(true);
    }

    if (page === 2) {
      setWelcomeForm(false);
      setBusinessTypeForm(false);
      setBusinessForm(true);
    }

    if (page === 3) {
      setWelcomeForm(false);
      setBusinessTypeForm(false);
      setBusinessForm(false);
      setManagementResponsibilitiesForm(true);
    }

    if (page === 4) {
      setWelcomeForm(false);
      setBusinessTypeForm(false);
      setBusinessForm(false);
      setManagementResponsibilitiesForm(false);
      setNumberOfPeopleForm(true);
    }
  };

  const formSubmit = async (values) => {
    await addBusinessInfo(uid, values)
    
    router.push({pathname: '/auth/dashboard'})
  };


  return (
    <Grid container>
      <Header />
      <Grid item className={classes.wrapper}>
        <Grid item container direction={"column"} alignItems={"center"}>
          <form autoComplete={"off"} onSubmit={handleSubmit(formSubmit)}>
            {welcomeForm && <WelcomeForm nextPage={handleNextPage} />}

            {businessTypeForm && (
              <TypeOfBusinessForm nextPage={handleNextPage} />
            )}

            {businessInfoForm && <BusinessInfoForm nextPage={handleNextPage} />}

            {managementResponsibilitiesForm && (
              <ManagementResponsibilitiesForm nextPage={handleNextPage} />
            )}

            {numberOfPeopleForm && <NumberOfPeopleForm />}
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "additionalInfo", destroyOnUnmount: false })(Index));
