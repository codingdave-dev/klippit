import React, {Fragment, useEffect, useState} from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CampaignTable from "../../../src/ui/campaigns/CampaignTable";
import {connect} from "react-redux";
import {useRouter} from "next/router";
import {fetchUserCampaigns, toggleCampaign} from "../../../src/store/actions/campaignActions/campaignActions";


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: '60%',
        [theme.breakpoints.down('md')]: {
            width: '90%'
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '1.8em',
            textAlign: 'center'
        }
    },
    button: {
        marginLeft: "2em",
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
    tabPanel: {
        border: '1px solid lightgrey',
        marginTop: '-2px',
        borderTopRightRadius: '10px',
        borderBottomRightRadius: '10px',
        borderBottomLeftRadius: '10px'.length,
        [theme.breakpoints.down('xs')]: {
            '& .MuiBox-root': {
                padding: '0.2em'
            }
        }


    }

}));

const actions = {
    fetchUserCampaigns,
    toggleCampaign
}

const mapStateToProps = (state) => {

    let currentCampaigns = []
    let previousCampaigns = []

    if (state.campaigns.campaigns && state.campaigns.campaigns.length > 0) {
        currentCampaigns = state.campaigns.campaigns.filter((array) => array.active === true);
    }
    if (state.campaigns.campaigns && state.campaigns.campaigns.length > 0) {
        previousCampaigns = state.campaigns.campaigns.filter((array) => array.active === false);
    }

    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        currentCampaigns: currentCampaigns,
        previousCampaigns: previousCampaigns,

    }
}

const Index = ({auth, profile, fetchUserCampaigns, toggleCampaign, currentCampaigns, previousCampaigns}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const router = useRouter()

    const userId = auth.uid

    const [value, setValue] = useState(0)

    // TAB PANEL PROPS
    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }
    const TabPanel = (props) => {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        {children}
                    </Box>
                )}
            </div>
        );
    }

    useEffect(() => {
        fetchUserCampaigns(userId)
    }, [fetchUserCampaigns, userId])

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

    const handleTabChange = (event, newValue) => {
        setValue(newValue)
    }

    const handleToggleCampaign = (id, value) => {
        toggleCampaign(userId,id, !value )
    }

    return (
        <Fragment>
            <DashboardHeader />

            <Grid item container justify={'center'} style={matchesSM ? {marginTop: '3em'}:{marginTop: '6em'}}>
                <Grid item className={classes.wrapper} >
                    <Grid item container alignItems={'center'} direction={matchesSM ? 'column' : 'row'}>
                        <Grid item>
                            <Typography variant={'h4'} className={classes.title}>Welcome to your Dashboard</Typography>
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                size={"large"}
                                className={classes.button}
                                startIcon={<AddIcon />}
                                onClick={() => router.push({pathname: '/auth/createCampaign'})}
                            >
                                New Campaign
                            </Button>
                        </Grid>
                    </Grid>


                    <Grid item container style={matchesSM ? {marginTop: '3em'}:{marginTop: '6em'}}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Tabs value={value}   onChange={handleTabChange} indicatorColor={'primary'} aria-label="simple tabs example">
                                <Tab label="CURRENT"  {...a11yProps(0)} />
                                <Tab label="PREVIOUS" {...a11yProps(1)} />
                            </Tabs>

                            <TabPanel value={value} index={0} className={classes.tabPanel} >
                                <CampaignTable campaigns={currentCampaigns} toggleCampaign={handleToggleCampaign}/>
                            </TabPanel>
                            <TabPanel value={value} index={1} className={classes.tabPanel}>
                                <CampaignTable campaigns={previousCampaigns} toggleCampaign={handleToggleCampaign}/>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>





        </Fragment>
    );
};

export default connect(mapStateToProps, actions) (Index);