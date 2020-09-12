import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import CheckCircleInput from "../../common/form/CheckCircleInput";
import CheckboxInput from "../../common/form/CheckboxInput";
import { Field } from "redux-form";
import TextInput from "../../common/form/TextInput";
import SliderInput from "../../common/form/SliderInput";

import Slider from "@material-ui/core/Slider";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

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

const FinePrintForm = ({ nextForm, prevForm }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
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
        <Typography variant={"h5"}>Fine Print</Typography>
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
          style={{ paddingRight: "1.5em" }}
        >
          <Grid item>
            <Typography variant={"h6"} style={{ fontWeight: "600" }}>
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
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ paddingLeft: "1.5em" }}
        >
          <Grid item>
            <Typography variant={"h6"} style={{ fontWeight: "600" }}>
              ADD CUSTOM
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
        <Grid item container>
          <Grid item style={{ marginRight: "1em" }}>
            <Button
              variant="contained"
              size={"large"}
              className={classes.buttonGrey}
              onClick={() => prevForm("describeBusiness")}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size={"large"}
              className={classes.button}
              onClick={() => nextForm("location")}
            >
              Next Step
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FinePrintForm;
