import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Field, reduxForm} from "redux-form";
import TextInput from "../../common/form/TextInput";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {connect} from "react-redux";

import {changeUserPassword} from "../../store/actions/userActions/userActions";

const useStyles = makeStyles((theme) => ({
    formWrapper: {
        marginTop: '3em', backgroundColor: 'white', borderRadius: '10px', padding: '1em'
    },
    button: {
        borderRadius: "10px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        fontSize: "1em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginTop: '1em'
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
}));

const actions = {

    changeUserPassword
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,

    };

};

const PasswordForm = ({auth, profile, changeUserPassword, handleSubmit, error, submitting,}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const handleUpdatePassword = async (values) => {
        await changeUserPassword(values)
    }

    return (
        <Grid item container direction={'column'} className={classes.formWrapper}>

            <form autoComplete={'off'} onSubmit={handleSubmit(handleUpdatePassword)}>
                <Grid item style={{marginTop: '1em'}}>
                    <Grid item container direction={matchesXS ? 'column' : 'row'}>
                        <Grid item lg={6} md={6} sm={6} xs={12} style={matchesXS ? {marginBottom: '1em'}:{paddingRight: '1em'}}>
                            <Field
                                inputStyle={classes.textInput}
                                name={"currentPassword"}
                                label={'Current Password'}
                                placeholder={'Current Password'}
                                type={"password"}
                                variant={"outlined"}
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={12} style={matchesXS ? null : {paddingLeft: '1em'}}>
                            <Field
                                inputStyle={classes.textInput}
                                name={"newPassword"}
                                label={'New Password'}
                                placeholder={'New Password'}
                                type={"password"}
                                variant={"outlined"}
                                component={TextInput}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                {error === 'Current password is invalid' && (
                    <Grid item style={{marginTop: '2em'}}>
                        <Typography variant={'subtitle1'} style={{color: theme.palette.error.main, fontWeight: 600}}>{error}</Typography>
                    </Grid>
                )}

                <Grid item style={{marginTop: '2em'}}>
                    <Grid item container alignItems={'center'}>
                        <Grid item >
                            <Button
                                variant="contained"
                                size={"small"}
                                className={classes.button}
                                type={'submit'}
                            >
                                Change Password
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </form>

        </Grid>
    );
};

export default connect(mapStateToProps, actions)(reduxForm({ form: "passwordForm", destroyOnUnmount: true, forceUnregisterOnUnmount: true }) (PasswordForm));