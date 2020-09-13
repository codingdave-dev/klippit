import React, {Fragment, useEffect} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import {useRouter} from "next/router";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    // ADD STYLES HERE
}));

const mapStateToProps = (state) => {

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,

    }
}

const Index = ({auth, profile}) => {
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
        <Fragment>
            <DashboardHeader/>
            FAQs
        </Fragment>
    );
};

export default connect(mapStateToProps) (Index);