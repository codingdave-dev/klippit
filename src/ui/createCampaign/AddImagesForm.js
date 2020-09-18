import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DropzoneInput from "../../dropzone/DropzoneInput";
import { reduxForm, SubmissionError } from "redux-form";
import { createCampaignStep2 } from "../../store/actions/campaignActions/campaignActions";
import { connect } from "react-redux";
import Tooltip from "@material-ui/core/Tooltip";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
  },
  title: {

    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  subTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      marginBottom: "2em",
    },
  },

  dropzoneWrapper: {
    padding: "3em",
    [theme.breakpoints.down("md")]: {
      padding: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.4em",
      marginTop: "2em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "0.3em",
      marginTop: 0,
    },
  },
  dropzone: {
    width: "250px",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "140px",
      height: "140px",
    },
  },
  image: {
    width: "250px",
    height: "250px",
    [theme.breakpoints.down("md")]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      height: "150px",
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
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    fontSize: '12px',
    width: '150px'
  }
}));

const actions = {
  createCampaignStep2,
};

const AddImagesForm = ({
  createCampaignStep2,
  campaignId,
  nextForm,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");

  const handleAddImages = async () => {
    if (image1 && image2 && image3) {
      let ref = await createCampaignStep2(campaignId, image1, image2, image3);
      nextForm("describeBusiness", ref);
    } else {
      throw new SubmissionError({ _error: "Please add images" });
    }
  };

  return (
    <Grid
      item
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.formWrapper}
    >
      <Grid item>
        <Typography variant={"h4"} className={classes.title}>
          Select a image for this deal <Tooltip title={'This is the cover image(s) that will be displayed on our mobile app.'} placement={'right'} classes={{tooltip: classes.tooltip}}>
          <img src="/assets/icon/campaign/question.png" alt="question mark" style={{width: '18px'}}/>
        </Tooltip>
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={"subtitle1"} className={classes.subTitle}>
          UPLOAD UP TO THREE IMAGES
        </Typography>
      </Grid>
      <form autoComplete={"off"} onSubmit={handleSubmit(handleAddImages)}>


        <Grid item container justify={"center"}>
          <Grid item lg={4}>
            <Grid
              item
              container
              justify={"center"}
              className={classes.dropzoneWrapper}
            >
              <Grid item className={classes.dropzone}>
                {!image1 && <DropzoneInput setFiles={setImage1} />}
                {image1 && (
                  <img
                    src={image1[0].preview}
                    alt="image preview 1"
                    className={classes.image}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={4}>
            <Grid
              item
              container
              justify={"center"}
              className={classes.dropzoneWrapper}
            >
              <Grid item className={classes.dropzone}>
                {!image2 && <DropzoneInput setFiles={setImage2} />}
                {image2 && (
                  <img
                    src={image2[0].preview}
                    alt="image preview 2"
                    className={classes.image}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>

          <Grid item lg={4}>
            <Grid
              item
              container
              justify={"center"}
              className={classes.dropzoneWrapper}
            >
              <Grid item className={classes.dropzone}>
                {!image3 && <DropzoneInput setFiles={setImage3} />}
                {image3 && (
                  <img
                    src={image3[0].preview}
                    alt="image preview 3"
                    className={classes.image}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid item style={{ marginTop: "3em", marginLeft: "auto" }}>
          {error && (
              <Grid item container style={{ marginBottom: "1em"}}>

                <Typography variant={"subtitle1"} className={classes.error}>
                  {error}
                </Typography>

              </Grid>
          )}
          <Grid item container>
            <Grid item style={{ marginRight: "1em" }}>
              <Button
                variant="contained"
                size={"large"}
                className={classes.buttonGrey}
                // onClick={() => prevForm("servicePrice")}
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

export default connect(
  null,
  actions
)(reduxForm({ form: "addBusinessType" })(AddImagesForm));
