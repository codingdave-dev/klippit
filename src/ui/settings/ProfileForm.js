import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DropzoneInput from "../../dropzone/DropzoneInput";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../common/form/TextInput";

import {
  deleteAvatarPhoto,
  updateUserProfile,
} from "../../store/actions/userActions/userActions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: "3em",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "1em",
  },

  avatarButton: {
    backgroundColor: "white",
    border: "1px solid lightgrey",
    fontSize: "1.1em",
    boxShadow: "none",
    // textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  deleteButton: {
    backgroundColor: theme.palette.error.main,
    color: "white",
    border: "1px solid" + theme.palette.error.main,
    fontSize: "1.1em",
    boxShadow: "none",
    // textTransform: "none",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  button: {
    borderRadius: "10px",
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    fontSize: "1em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },

  textInput: {
    backgroundColor: theme.palette.common.inputGrey,
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

  avatar: {
    width: "3.5em",
    height: "3.5em",
    [theme.breakpoints.down("xs")]: {
      width: "3em",
      height: "3em",
    },
  },

  dropzone: {
    width: 250,
    height: 250,
    [theme.breakpoints.down("xs")]: {
      width: 180,
      height: 180,
    },
  },
  image: {
    width: 250,
    height: 250,
    [theme.breakpoints.down("xs")]: {
      width: 180,
      height: 180,
    },
  },
}));

const actions = {
  updateUserProfile,
  deleteAvatarPhoto,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    initialValues: state.firebase.profile,
  };
};

const ProfileForm = ({
  profile,
  updateUserProfile,
  deleteAvatarPhoto,
  handleSubmit,
  error,
  submitting,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [uploadImage, setUploadImage] = useState(false);
  const [avatarImage, setAvatarImage] = useState(null);

  const handleUpdateProfile = async (values) => {
    await updateUserProfile(values, avatarImage).then(
      setAvatarImage(null),
      setUploadImage(false)
    );
  };

  const handleDeleteAvatar = () => {
    deleteAvatarPhoto();
  };
  return (
    <Grid item container direction={"column"} className={classes.formWrapper}>
      <Grid item>
        <Typography variant={"h6"} style={{ fontWeight: 600 }}>
          Personal Information
        </Typography>
      </Grid>

      <Grid item style={{ marginTop: "2em" }}>
        <Grid item container alignItems={"center"}>
          {!uploadImage && (
            <Fragment>
              <Grid item>
                <Avatar
                  className={classes.avatar}
                  src={profile.imageURL || "/assets/avatar/avatar.png"}
                />
              </Grid>
              {profile.imageURL === "/assets/avatar/avatar.png" && (
                <Grid item style={{ marginLeft: "1em" }}>
                  <Button
                    variant="contained"
                    size={"small"}
                    className={classes.avatarButton}
                    onClick={() => setUploadImage(true)}
                  >
                    Upload Avatar
                  </Button>
                </Grid>
              )}

              {profile.imageURL !== "/assets/avatar/avatar.png" && (
                <Grid item style={{ marginLeft: "1em" }}>
                  <Button
                    variant="contained"
                    size={"small"}
                    className={classes.deleteButton}
                    onClick={() => handleDeleteAvatar()}
                  >
                    Delete Avatar
                  </Button>
                </Grid>
              )}
            </Fragment>
          )}

          {uploadImage && (
            <Fragment>
              <Grid
                item
                container
                alignItems={"center"}
                direction={matchesXS ? "column" : "row"}
              >
                <Grid item className={classes.dropzone}>
                  {!avatarImage && <DropzoneInput setFiles={setAvatarImage} />}
                  {avatarImage && (
                    <img
                      className={classes.image}
                      src={avatarImage[0].preview}
                      alt="avatar image"
                    />
                  )}
                </Grid>
                <Grid
                  item
                  style={matchesXS ? { marginLeft: 0 } : { marginLeft: "1em" }}
                >
                  <Button
                    variant="contained"
                    size={"small"}
                    className={classes.avatarButton}
                    onClick={() => setUploadImage(false)}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Fragment>
          )}
        </Grid>
      </Grid>

      <form autoComplete={"off"} onSubmit={handleSubmit(handleUpdateProfile)}>
        <Grid item style={{ marginTop: "2em" }}>
          <Grid item container direction={matchesXS ? "column" : "row"}>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={
                matchesXS ? { marginBottom: "1em" } : { paddingRight: "1em" }
              }
            >
              <Field
                inputStyle={classes.textInput}
                name={"firstName"}
                label={"First Name"}
                placeholder={"First Name"}
                type={"text"}
                variant={"outlined"}
                component={TextInput}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={
                matchesXS ? { marginBottom: "1em" } : { paddingLeft: "1em" }
              }
            >
              <Field
                inputStyle={classes.textInput}
                name={"lastName"}
                label={"Last Name"}
                placeholder={"Last Name"}
                type={"text"}
                variant={"outlined"}
                component={TextInput}
              />
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={matchesXS ? null : { marginTop: "2em" }}>
          <Grid item container direction={matchesXS ? "column" : "row"}>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={
                matchesXS ? { marginBottom: "1em" } : { paddingRight: "1em" }
              }
            >
              <Field
                inputStyle={classes.textInput}
                name={"email"}
                label={"Email address"}
                placeholder={"Email address"}
                type={"text"}
                variant={"outlined"}
                component={TextInput}
              />
            </Grid>
            <Grid
              item
              lg={6}
              md={6}
              sm={6}
              xs={12}
              style={
                matchesXS ? { marginBottom: "1em" } : { paddingLeft: "1em" }
              }
            >
              <Field
                inputStyle={classes.textInput}
                name={"phoneNumber"}
                label={"Phone Number"}
                placeholder={"Phone Number"}
                type={"text"}
                variant={"outlined"}
                component={TextInput}
              />
            </Grid>
          </Grid>
        </Grid>

        {error && (
          <Grid
            item
            style={matchesXS ? { marginTop: "1em" } : { marginTop: "2em" }}
          >
            <Typography
              variant={"subtitle1"}
              style={{ color: theme.palette.error.main, fontWeight: 600 }}
            >
              {error}
            </Typography>
          </Grid>
        )}

        <Grid
          item
          style={matchesXS ? { marginTop: "1em" } : { marginTop: "2em" }}
        >
          <Grid item container justify={matchesXS ? "center" : null}>
            <Grid item>
              <Button
                variant="contained"
                size={"small"}
                className={classes.button}
                disabled={submitting}
                type={"submit"}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Grid>
  );
};

export default connect(
  mapStateToProps,
  actions
)(
  reduxForm({
    form: "profileForm",
    destroyOnUnmount: true,
    forceUnregisterOnUnmount: true,
    enableReinitialize: true,
  })(ProfileForm)
);
