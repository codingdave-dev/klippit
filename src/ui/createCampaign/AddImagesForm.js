import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import DropzoneInput from "../../dropzone/DropzoneInput";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    padding: "2.5em",
    backgroundColor: theme.palette.common.inputGrey,
    borderRadius: "10px",
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  subTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
      marginBottom: '2em'
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

const AddImagesForm = ({
  nextForm,
  prevForm,
  image1,
  setImage1,
  image2,
  setImage2,
  image3,
  setImage3,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      item
      container
      direction={"column"}
      alignItems={"center"}
      className={classes.formWrapper}
    >
      <Grid item>
        <Typography variant={"h5"} className={classes.title}>
          Choose service and Price
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={"subtitle1"} className={classes.subTitle}>
          UPLOAD UP TO THREE IMAGES
        </Typography>
      </Grid>

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
        <Grid item container>
          <Grid item style={{ marginRight: "1em" }}>
            <Button
              variant="contained"
              size={"large"}
              className={classes.buttonGrey}
              onClick={() => prevForm("servicePrice")}
            >
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              size={"large"}
              className={classes.button}
              onClick={() => nextForm("describeBusiness")}
            >
              Next Step
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddImagesForm;
