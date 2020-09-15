import React, {Fragment} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Header from "../src/ui/Header";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    image: {
        width: "100%",
        height: "auto",
        filter: "brightness(0.4)",
    },
    overlay: {
        zIndex: theme.zIndex.modal + 1,
        marginTop: "-800px",
        backgroundColor: "white",
        width: "60%",
        padding: "1em",
        borderRadius: "5px",
        [theme.breakpoints.down("md")]: {
            marginTop: "-500px",
            width: "80%",
        },
        [theme.breakpoints.down("sm")]: {
            marginTop: "-300px",
            width: "90%",
        },
        [theme.breakpoints.down("xs")]: {
            marginTop: "-150px",
        },
    },
    headerWrapper: {
        marginTop: "0.5em",
        marginBottom: "0.5em",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0.1em",
            marginBottom: "0.1em",
        },
    },
    textWrapper: {
        marginTop: "0.6em",
        marginBottom: "0.6em",
        [theme.breakpoints.down("sm")]: {
            marginTop: "0.4em",
            marginBottom: "0.4em",
        },
    },

    sectionHeader: {
        color: theme.palette.error.main,
        fontWeight: 600,
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.2em",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1em",
        },
    },
    sectionText: {
        color: "grey",
        [theme.breakpoints.down("sm")]: {
            fontSize: "0.8em",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "0.7em",
        },
    },
}));

const Privacy = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Fragment>
            <Header />
            {/*PRIVACY*/}
            <Grid
                item
                container
                direction={"column"}
                style={{ backgroundColor: "lightgrey", paddingBottom: '3em' }}
            >
                <Grid item container style={{ marginTop: "-3em" }}>
                    <Grid item lg={12}>
                        <img
                            src="/assets/people/people.jpeg"
                            alt=""
                            className={classes.image}
                        />
                    </Grid>
                </Grid>
                <Grid item container justify={"center"}>
                    <Grid item container direction={"column"} className={classes.overlay}>
                        <Grid item className={classes.headerWrapper}>
                            <Typography variant={"h5"} className={classes.sectionHeader}>
                                Privacy Notice
                            </Typography>
                        </Grid>
                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                Being of sound mind and memory, do hereby make, constitute and
                                appoint Klippit ltd Company as my true and lawful agent and
                                attorney in fact (hereinafter sometimes called "my agent"), with
                                full power and authority to act for me, individually, and in my
                                name, place and stead, with reference to the transaction of any
                                and all business related to or connected with my bank accounts
                                at NetSpend, P.O. Box 2136, Austin, TX 78768-2136 hereinafter
                                “Bank”, including, but not limited to, the following:
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                1. Making deposits, transfers and withdrawals to or from any of
                                my bank accounts at bank
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                2. Opening new checking, savings, or other accounts in my name
                                and maintaining same.
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                3. Executing signature cards for accounts maintained or opened
                                by my agent in my name.
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                4. Performing any and all other matters relating to, or in
                                connection with, my bank accounts at Bank.
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                I direct that the above-related powers and authority of my said
                                agent shall be so exercisable and effective regardless of the
                                fact that I may be mentally or physically incapacitated or
                                incapable of understanding or unable to express myself or act in
                                my own behalf at the time of any action on my behalf by said
                                agent. Such incapacity, whether mental or physical, that I may
                                exhibit shall not in any way interfere with the authority of my
                                agent herein to act fully on my behalf according to the terms
                                hereof. In other words, this Power of Attorney shall not be
                                affected by the subsequent disability, incompetence or
                                incapacity of the principal.
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                And I do hereby undertake to ratify and confirm, all and
                                singular, the acts heretofore performed and to be hereinafter
                                performed by my said agents, acting in my name and on my behalf.
                            </Typography>
                        </Grid>

                        <Grid item className={classes.textWrapper}>
                            <Typography variant={"body2"} className={classes.sectionText}>
                                Bank shall honor this Power of Attorney until and unless Bank
                                receives written notice of revocation of same signed by me. Bank
                                is hereby indemnified and shall be held harmless by the
                                undersigned for any and all actions taken by my agent regarding
                                my accounts at Bank, regardless of whether within the intended
                                scope of this Power of Attorney or not; therefore, Bank shall
                                have no liability for the actions of my agent or for following
                                the directions of my agent in connection with my bank accounts
                                at Bank.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};

export default Privacy;