import React, {Fragment} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import {Field} from "redux-form";
import CheckboxInput from "../../common/form/CheckboxInput";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: "3.5em",
        [theme.breakpoints.down("md")]: {
            fontSize: "4em",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "2.5em",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2em",
        },
    },
    subTitle: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "1em",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.65em",
        },
    },
    formWrapper: {
        marginTop: "3em",
        width: '540px',
        [theme.breakpoints.down("sm")]: {
            width: "450px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "280px",
        },
    },

    option: {
        marginTop: '0.8em',
        marginBottom: '0.8em',
        paddingTop: "8px",
        paddingBottom: "8px",
        paddingLeft: "30px",
        backgroundColor: theme.palette.common.white,
        borderRadius: "10px",
        cursor: "pointer",
        transition: "transform 100ms ease-in",
        "&:hover": {
            boxShadow: "0px 5px 17px -7px rgba(0,0,0,0.75)",
            transform: "scale(1.01)",
        },
    },
    checkbox: {
        "& .MuiSvgIcon-fontSizeSmall": {
            fontSize: "1.2em",
            [theme.breakpoints.down("sm")]: {
                fontSize: "0.8em",
            },
        },
    },
}));

const managementResponsibilities = [
    {
        id: "manager",
        name: "Manager",
    },
    {
        id: "individualContributor",
        name: "Individual Contributor",
    },
    {
        id: "executive",
        name: "Executive",
    }
];

const ManagementResponsibilitiesForm = ({nextPage}) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Fragment>
            <Grid item>
                <Grid item container direction={'column'} alignItems={'center'}>
                    <Hidden xsDown>
                        <Grid item>
                            <Typography variant={"h2"} className={classes.title}>
                                What best describes your management responsibilities/level
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Grid item>
                            <Typography variant={"h2"} className={classes.title}>
                                What best describes
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h2"} className={classes.title}>
                                your management
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant={"h2"} className={classes.title}>
                                responsibilities/level
                            </Typography>
                        </Grid>
                    </Hidden>


                    <Grid item style={{marginTop: '2em'}}>
                        <Typography variant={"h6"} className={classes.subTitle}>
                            Select the role that best describes your job function
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid item container justify={"center"}>
                    <Grid item className={classes.formWrapper}>
                        <Grid item container direction={"column"}>
                            {managementResponsibilities.map((management) => (
                                <Grid key={management.id} item className={classes.option}>
                                    <Grid item container alignItems={"center"}>
                                        <Grid item>
                                            <Typography variant={"h6"}>{management.name}</Typography>
                                        </Grid>

                                        <Grid item style={{ marginLeft: "auto" }}>
                                            <Field
                                                name={management.id}
                                                component={CheckboxInput}
                                                checkboxClass={classes.checkbox}
                                            />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}

                            <Grid item style={{ marginTop: "3em" }}>
                                <Button
                                    className={classes.button}
                                    variant="contained"
                                    color="secondary"
                                    size={"large"}
                                    fullWidth
                                    onClick={() => nextPage(4)}
                                >
                                    Continue
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default ManagementResponsibilitiesForm;