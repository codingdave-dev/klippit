import React, {Fragment, useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import {useRouter} from "next/router";
import {connect} from "react-redux";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import TextInput from "../../../src/common/form/TextInput";
import {Field, reduxForm} from "redux-form";
import {logout} from "../../../src/store/actions/authActions/authActions";
import DropzoneInput from "../../../src/dropzone/DropzoneInput";
import {
    changeUserPassword,
    deleteAvatarPhoto,
    updateUserProfile
} from "../../../src/store/actions/userActions/userActions";
import ProfileForm from "../../../src/ui/settings/ProfileForm";
import PasswordForm from "../../../src/ui/settings/PasswordForm";

const useStyles = makeStyles((theme) => ({
    myAccountButton: {
        // marginLeft: "2em",
        borderRadius: "100px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        fontSize: "1.1em",
        // textTransform: "none",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: '1em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8em",
        },
    },
    logoutButton: {

        fontSize: "1.1em",

        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: '1em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.8em",
        },
    },



}));

const actions = {
    logout,

}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        initialValues: state.firebase.profile,
    };

};


const Index = ({auth, profile, logout, changeUserPassword, handleSubmit, error, submitting,}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    const router = useRouter()

    useEffect(() => {
        if (auth.isLoaded === true && auth.isEmpty === true) {
            router.push({ pathname: "/login" });
        }

        if (
            auth.isLoaded === true &&
            auth.isEmpty === false &&
            profile.additionalInfoSet === false
        ) {
            router.push({ pathname: "/login" });
        }
    });






    return (
        <div style={{backgroundColor: 'lightgrey'}}>
            <DashboardHeader />


            <Grid item container direction={'column'} style={{backgroundColor: 'lightgrey', padding: '2em'}}>

                {/*BUTTON CONTAINER*/}
                <Grid item container >
                    <Grid item>
                        <Button
                            variant="contained"
                            size={"large"}
                            className={classes.myAccountButton}


                        >
                            My Account
                        </Button>
                    </Grid>
                    <Grid item style={{marginLeft: 'auto'}}>
                        <Button
                            variant="contained"
                            size={"large"}
                            className={classes.logoutButton}
                            onClick={() => logout()}
                        >
                            Logout
                        </Button>
                    </Grid>
                </Grid>


                {/*PROFILE FORM*/}
                <ProfileForm/>




                {/*PASSWORD CHANGE CONTAINER*/}
                <PasswordForm/>



            </Grid>
        </div>
    );
};

export default connect(mapStateToProps, actions) (Index);