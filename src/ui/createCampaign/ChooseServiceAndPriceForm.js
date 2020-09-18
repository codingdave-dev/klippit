import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import CheckCircleInput from "../../common/form/CheckCircleInput";

import { Field, reduxForm, SubmissionError } from "redux-form";
import TextInput from "../../common/form/TextInput";
import SliderInput from "../../common/form/SliderInput";

import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { createCampaignStep1 } from "../../store/actions/campaignActions/campaignActions";
import { combineValidators, isRequired } from "revalidate";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
    [theme.breakpoints.down("sm")]: {
      padding: "1.5em",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },

  leftWrapper: {
    paddingRight: "1.5em",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
    },
  },
  rightWrapper: {
    paddingLeft: "1.5em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      paddingLeft: 0,
    },
  },

  columnTitle: {
    fontWeight: "600",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  columnSubTitle: {
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },

  checkbox: {
    color: theme.palette.primary.main,
    "& .MuiSvgIcon-fontSizeSmall": {
      fontSize: "1.2em",
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "0.8em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.6em",
      },
    },
  },
  checkboxLabel: {
    "& .MuiTypography-body1": {
      fontSize: "1.2em",
      fontFamily: "Raleway",
      [theme.breakpoints.down("md")]: {
        fontSize: "1em",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7em",
      },
    },
  },

  customWrapper: {
    paddingRight: "3em",
    [theme.breakpoints.down("md")]: {
      paddingRight: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0,
      paddingTop: "0.5em",
      paddingBottom: "0.5em",
    },
  },

  inputLabel: {
    fontWeight: "600",
  },
  inputWrapper: {
    paddingLeft: "1em",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "1.5em",
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
    width: "40px",
    height: "40px",
    [theme.breakpoints.down("xs")]: {
      width: "25px",
      height: "25px",
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
  error: {
    color: theme.palette.error.main,
    fontWeight: 300,
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '12px',
    width: '150px'
  }
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

const validate = combineValidators({
  describeAService: isRequired({ message: "Field is required" }),
  describeWhatInfluencers: isRequired({ message: "Field is required" }),
  usualCostForProduct: isRequired({ message: "Field is required" }),
  hashtag: isRequired({ message: "Field is required" }),
  discount: isRequired({ message: "Discount is required" }),
});

const actions = {
  createCampaignStep1,
};

const ChooseServiceAndPriceForm = ({
  createCampaignStep1,
  nextForm,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleTypeOfBusiness = async (value) => {
    if (
      value.food ||
      value.onlineGoods ||
      value.services ||
      value.events ||
      value.beautySpa ||
      value.healthFitness ||
      value.thingsToDo === true
    ) {
      let ref = await createCampaignStep1(value);
      nextForm("addImages", ref);
    } else {
      throw new SubmissionError({ _error: "Please choose an option" });
    }
  };

  return (
    <Grid item container direction={"column"} className={classes.formWrapper}>
      <Grid item>
        <Typography variant={"h5"} className={classes.title}>
          Choose service and Price
        </Typography>
      </Grid>

      <form autoComplete={"off"} onSubmit={handleSubmit(handleTypeOfBusiness)}>
        {/*CHECKCIRCLE/CUSTOMS FIELDS*/}
        <Grid
          item
          container
          direction={matchesSM ? "column" : "row"}
          style={{ marginTop: "2em" }}
        >
          <Grid
            item
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className={classes.leftWrapper}
          >
            <Grid item>
              <Grid item container alignItems={'center'}>
                <Grid item>
                  <Typography variant={"h6"} className={classes.columnTitle}>
                    TYPE OF BUSINESS
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title={'What category would you place your business in?'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                    <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.8em'}}/>
                  </Tooltip>

                </Grid>
              </Grid>

            </Grid>
            <Grid item>
              <Typography
                variant={"subtitle1"}
                className={classes.columnSubTitle}
              >
                (Select the category that best describes your business)
              </Typography>
            </Grid>

            <Grid item>
              <Grid item container direction={matchesXS ? "column" : "row"}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
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
                <Grid item lg={6} md={6} sm={6} xs={12}>
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
                {error && (
                  <Typography variant={"subtitle1"} className={classes.error}>
                    {error}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            lg={6}
            md={6}
            sm={6}
            xs={12}
            className={classes.rightWrapper}
          >
            <Grid item>
              <Grid item container alignItems={'center'}>
                <Grid item>
                  <Typography variant={"h6"} className={classes.columnTitle}>
                    CUSTOM FIELDS
                  </Typography>
                </Grid>
                <Grid item>
                  <Tooltip title={'Is the product that you are selling restricted to a certain size or color? If so enter it here. Skip this if it is not applicable to you'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                    <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.8em'}}/>
                  </Tooltip>

                </Grid>
              </Grid>

            </Grid>
            <Grid item>
              <Typography
                variant={"subtitle1"}
                className={classes.columnSubTitle}
              >
                (Optional)
              </Typography>
            </Grid>

            <Grid item>
              <Grid item container>
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={classes.customWrapper}
                >
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
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={classes.customWrapper}
                >
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
                <Grid
                  item
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className={matchesSM ? classes.customWrapper : null}
                >
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

        {/*FIRST ROW OF FIELDS*/}
        <Grid item style={{ marginTop: "3em" }}>
          <Grid item container alignItems={"flex-end"}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid item>
                <Grid item container direction={"column"}>
                  {/*DESCRIBE A SERVICE*/}
                  <Grid item>
                    <Typography
                        variant={"subtitle1"}
                        className={classes.inputLabel}
                    >
                      DESCRIBE A SERVICE YOU WANT TO PROMOTE<Tooltip title={'Ex: 60-Minute Swedish or Deep Tissue Massage'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                      <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.8em'}}/>
                    </Tooltip>
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginTop: "0.5em" }}>
                    <Grid item container alignItems={"center"}>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <img
                          className={classes.imageIcon}
                          src="/assets/icon/campaign/smartphone.png"
                          alt="smartphoneIcon"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className={classes.inputWrapper}
                      >
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
              sm={12}
              xs={12}
              style={
                matchesSM ? { marginTop: "1.2em" } : { paddingLeft: "1.5em" }
              }
            >
              <Grid item>
                <Grid item container direction={"column"}>
                  <Grid item>

                    <Typography
                        variant={"subtitle1"}
                        className={classes.inputLabel}
                    >
                      DESCRIBE WHAT INFLUENCERS SHOULD DO TO REDEEM THIS OFFER <Tooltip title={'Your deal is tied to a one time incentive that influencers will have to complete to redeem this deal. Ex: You must take a picture of yourself with the (product)'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                      <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.7em'}}/>
                    </Tooltip>
                    </Typography>

                  </Grid>

                  <Grid item style={{ marginTop: "0.5em" }}>
                    <Grid item container alignItems={"center"}>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <img
                          className={classes.imageIcon}
                          src="/assets/icon/campaign/smartphone.png"
                          alt="smartphone"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className={classes.inputWrapper}
                      >
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
        <Grid
          item
          style={matchesSM ? { marginTop: "1.2em" } : { marginTop: "3em" }}
        >
          <Grid item container alignItems={"flex-end"}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid item>
                <Grid item container direction={"column"}>
                  <Grid item>
                    <Grid item container>
                      <Grid item>
                        <Typography
                            variant={"subtitle1"}
                            className={classes.inputLabel}
                        >
                          WHAT DO YOUR CUSTOMERS USUALLY PAY FOR THIS PRODUCT <Tooltip title={'How much would this cost without a discount?'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                          <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.7em'}}/>
                        </Tooltip>
                        </Typography>
                      </Grid>
                    </Grid>

                  </Grid>

                  <Grid item style={{ marginTop: "0.5em" }}>
                    <Grid item container alignItems={"center"}>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <img
                          className={classes.imageIcon}
                          src="/assets/icon/campaign/paymentMethod.png"
                          alt="paymentMethod"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className={classes.inputWrapper}
                      >
                        <Field
                          inputStyle={classes.textInput}
                          name={"usualCostForProduct"}
                          type={"text"}
                          variant={"outlined"}
                          component={TextInput}
                          adornment={"$"}
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
              sm={12}
              xs={12}
              style={
                matchesSM
                  ? { paddingLeft: 0, marginTop: "1.2em" }
                  : { paddingLeft: "1.5em" }
              }
            >
              <Grid item>
                <Grid item container direction={"column"}>
                  <Grid item>
                    <Typography
                      variant={"subtitle1"}
                      className={classes.inputLabel}
                    >
                      WHAT HASHTAG DO YOU WANT YOUR CUSTOMERS TO USE <Tooltip title={'Influencers will be sharing the content they create on their social media pages. What hashtag do you want them to use when they post about your business?'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                      <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.7em'}}/>
                    </Tooltip>
                    </Typography>
                  </Grid>

                  <Grid item style={{ marginTop: "0.5em" }}>
                    <Grid item container alignItems={"center"}>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <img
                          className={classes.imageIcon}
                          src="/assets/icon/campaign/socialMedia.png"
                          alt="Social Media"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className={classes.inputWrapper}
                      >
                        <Field
                          inputStyle={classes.textInput}
                          name={"hashtag"}
                          type={"text"}
                          variant={"outlined"}
                          component={TextInput}
                          adornment={"#"}
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
        <Grid
          item
          style={matchesSM ? { marginTop: "1.2em" } : { marginTop: "3em" }}
        >
          <Grid item container alignItems={"flex-end"}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <Grid item>
                <Grid item container direction={"column"}>
                  <Grid item>
                    <Typography
                      variant={"subtitle1"}
                      className={classes.inputLabel}
                    >
                      SELECT A DISCOUNT PERCENTAGE <Tooltip title={'How much will you be discounting this product/service for influencers?'} placement={'right'} classes={{tooltip: classes.tooltip}}>
                      <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px', marginLeft: '0.7em'}}/>
                    </Tooltip>
                    </Typography>
                  </Grid>

                  <Grid item style={{ marginTop: "0.5em" }}>
                    <Grid item container alignItems={"center"}>
                      <Grid item lg={1} md={1} sm={1} xs={1}>
                        <img
                          className={classes.imageIcon}
                          src="/assets/icon/campaign/discount.png"
                          alt="discount"
                        />
                      </Grid>
                      <Grid
                        item
                        lg={11}
                        md={11}
                        sm={11}
                        xs={11}
                        className={classes.inputWrapper}
                      >
                        <Field name={"discount"} component={SliderInput} />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
          <Button
            variant="contained"
            size={"large"}
            className={classes.button}
            type={"submit"}
            aria-label={"next screen"}
            disabled={submitting}
          >
            {submitting ? <CircularProgress size={30} style={{color: 'white'}}/> : 'Next Step'}
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "addBusinessType", validate })(ChooseServiceAndPriceForm));
