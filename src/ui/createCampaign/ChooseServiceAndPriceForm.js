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

import Slider from '@material-ui/core/Slider'
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  checkbox: {
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
    },
  },
  checkboxLabel: {
    "& .MuiTypography-body1": {
      fontSize: "1.2em",
      fontFamily: "Raleway",
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

  imageIcon: {
    width: "35px",
    height: "35px",
  },

  button: {

    borderRadius: "100px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      marginTop: '1em'
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
}));

const leftChecks = [
  {
    id: "food",
    name: "Food",
  },
  {
    id: "onlineGoods",
    name: "Online Goods",
  },
  {
    id: "services",
    name: "Services",
  },
  {
    id: "events",
    name: "Events",
  },
];

const rightChecks = [
  {
    id: "beautySpa",
    name: "Beauty & Spa",
  },
  {
    id: "healthFitness",
    name: "Health & Fitness",
  },
  {
    id: "thingsToDo",
    name: "Things to do",
  },
];

const ChooseServiceAndPriceForm = ({nextForm}) => {
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
        <Typography variant={"h5"}>Choose service and Price</Typography>
      </Grid>

      {/*CHECKCIRCLE/CUSTOMS FIELDS*/}
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
              TYPE OF BUSINESS
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"subtitle1"}>
              (Select the category that best describes your business)
            </Typography>
          </Grid>

          <Grid item>
            <Grid item container>
              <Grid item lg={6} md={6} sm={6} xs={6}>
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
              <Grid item item lg={6} md={6} sm={6} xs={6}>
                {rightChecks.map((option) => (
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
              CUSTOM FIELDS
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"subtitle1"}>(Optional)</Typography>
          </Grid>

          <Grid item>
            <Grid item container>
              <Grid item lg={4} style={{ paddingRight: "3em" }}>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Colors"}
                  label={"Colors"}
                  name={"colors"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
              <Grid item lg={4} style={{ paddingRight: "3em" }}>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Sizes"}
                  label={"Sizes"}
                  name={"sizes"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
              <Grid item lg={4}>
                <Field
                  inputStyle={classes.textInput}
                  placeholder={"Options"}
                  label={"Options"}
                  name={"options"}
                  type={"text"}
                  variant={"outlined"}
                  component={TextInput}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*FIRST FROW OF FIELDS*/}
      <Grid item style={{ marginTop: "3em" }}>
        <Grid item container alignItems={"flex-end"}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                    DESCRIBE A SERVICE YOU WANT TO PROMOTE
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid item container alignItems={"center"}>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img
                        className={classes.imageIcon}
                        src="/assets/icon/test.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                      <Field
                        inputStyle={classes.textInput}
                        name={"describeAService"}
                        type={"text"}
                        variant={"outlined"}
                        component={TextInput}
                      />
                    </Grid>
                  </Grid>
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
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                    DESCRIBE WHAT INFLUENCERS SHOULD DO TO REDEEM THIS OFFER
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid item container alignItems={"center"}>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img
                        className={classes.imageIcon}
                        src="/assets/icon/test.png"
                        alt=""
                      />
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                      <Field
                        inputStyle={classes.textInput}
                        name={"describeWhatInfluencers"}
                        type={"text"}
                        variant={"outlined"}
                        component={TextInput}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*SECOND ROW OF FIELDS*/}
      <Grid item style={{ marginTop: "3em" }}>
        <Grid item container alignItems={"flex-end"}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                    WHAT DO YOUR CUSTOMERS USUALLY PAY FOR THIS PRODUCT
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid item container alignItems={"center"}>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img
                          className={classes.imageIcon}
                          src="/assets/icon/test.png"
                          alt=""
                      />
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                      <Field
                          inputStyle={classes.textInput}
                          name={"usualCostForProduct"}
                          type={"text"}
                          variant={"outlined"}
                          component={TextInput}
                      />
                    </Grid>
                  </Grid>
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
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                    WHAT HASHTAG DO YOU WANT YOUR CUSTOMERS TO USE
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid item container alignItems={"center"}>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img
                          className={classes.imageIcon}
                          src="/assets/icon/test.png"
                          alt=""
                      />
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                      <Field
                          inputStyle={classes.textInput}
                          name={"hashtag"}
                          type={"text"}
                          variant={"outlined"}
                          component={TextInput}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/*THIRD ROW*/}
      <Grid item style={{ marginTop: "3em" }}>
        <Grid item container alignItems={"flex-end"}>
          <Grid item lg={6} md={6} sm={6} xs={12}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"h6"} style={{ fontWeight: "600" }}>
                    SELECT A DISCOUNT PERCENTAGE
                  </Typography>
                </Grid>

                <Grid item style={{ marginTop: "0.5em" }}>
                  <Grid item container alignItems={"center"}>
                    <Grid item lg={1} md={1} sm={1} xs={1}>
                      <img
                          className={classes.imageIcon}
                          src="/assets/icon/test.png"
                          alt=""
                      />
                    </Grid>
                    <Grid item lg={11} md={11} sm={11} xs={11}>
                      <Field

                          name={"discount"}

                          component={SliderInput}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>


        </Grid>
      </Grid>


      <Grid item style={{marginTop: '3em', marginLeft: 'auto'}}>
        <Button
            variant="contained"
            size={"large"}
            className={classes.button}

            onClick={() => nextForm('addImages')}
        >
          Next Step
        </Button>
      </Grid>
    </Grid>
  );
};

export default ChooseServiceAndPriceForm;
