import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import CampaignTable from "../../../src/ui/campaigns/CampaignTable";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { fetchUserCampaigns } from "../../../src/store/actions/campaignActions/campaignActions";
import Footer from "../../../src/ui/Footer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "60%",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8em",
      textAlign: "center",
    },
  },
  subTitle: {
    color: "grey",
    textAlign: "center",
  },

  tabPanel: {
    border: "1px solid lightgrey",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      "& .MuiBox-root": {
        padding: "0.2em",
      },
    },
  },
}));

const actions = {
  fetchUserCampaigns,
};

const mapStateToProps = (state) => {
  let currentCampaigns = [];

  if (state.campaigns.campaigns && state.campaigns.campaigns.length > 0) {
    currentCampaigns = state.campaigns.campaigns
  }

  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    currentCampaigns: currentCampaigns,
  };
};

const Index = ({ auth, profile, fetchUserCampaigns, currentCampaigns }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const userId = auth.uid;

  const [value, setValue] = useState(0);

  // TAB PANEL
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
        {value === index && <Box p={3}>{children}</Box>}
      </div>
    );
  };

  useEffect(() => {
    fetchUserCampaigns(userId);
  }, [fetchUserCampaigns, userId]);

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
      <DashboardHeader />

      <Grid
        item
        container
        justify={"center"}
        style={matchesSM ? { marginTop: "3em" } : { marginTop: "6em" }}
      >
        <Grid item className={classes.wrapper}>
          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
          >
            <Grid item>
              <Typography variant={"h4"} className={classes.title}>
                Campaigns
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justify={"center"}
            alignItems={"center"}
            direction={matchesSM ? "column" : "row"}
            style={{ marginTop: "2em" }}
          >
            <Grid item>
              <Typography variant={"body1"} className={classes.subTitle}>
                Here is a list of the deals that you have created. These deals
                are pending and will be available at launch.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            item
            container
            style={matchesSM ? { marginTop: "3em" } : { marginTop: "3em" }}
          >
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <TabPanel value={value} index={0} className={classes.tabPanel}>
                <CampaignTable campaigns={currentCampaigns} />
              </TabPanel>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Footer />
    </Fragment>
  );
};

export default connect(mapStateToProps, actions)(Index);
