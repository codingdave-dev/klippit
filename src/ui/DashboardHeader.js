import React, {Fragment, useEffect, useState} from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import Link from "../ui/Link";

import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import SettingsIcon from "@material-ui/icons/Settings";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AddIcon from "@material-ui/icons/Add";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import {logout} from "../store/actions/authActions/authActions";
import {connect} from "react-redux";

import {useRouter} from "next/router";


const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  appBar: {
    backgroundColor: "black",
    zIndex: theme.zIndex.modal + 2,
  },
  menuIcon: {
    color: theme.palette.common.white,
    fontSize: "1.5em",
  },
  logo: {
    width: "150px",
    [theme.breakpoints.down('sm')]: {
      width: '120px'
    },
    [theme.breakpoints.down('xs')]: {
      width: '70px'
    }
  },
  icon: {
    color: theme.palette.common.white,
    padding: "0.5em",
    fontSize: "2.1em",
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      padding: "0.3em",
      fontSize: "1.6em",
    },
    [theme.breakpoints.down('xs')]: {
      padding: "0.2em",
      fontSize: "1.4em",
    }
  },
  avatar: {
    marginLeft: "0.8em",
    marginRight: "0.8em",
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }


  },
  username: {
    color: theme.palette.primary.main,
    fontSize: "1.1em",
    fontWeight: 600,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  logoutText: {
    color: theme.palette.common.white,
    fontSize: "1.1em",
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },

  drawer: {
    backgroundColor: theme.palette.common.navDrawer,
    width: "300px",
    [theme.breakpoints.down('xs')]: {
      width: "250px",
    }
  },
  button: {
    borderRadius: "100px",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down('xs')]: {
      fontSize: "0.8em",
    }
  },
  drawerIcon: {
    marginRight: "1em",
    color: "white",
  },
  drawerLink: {
    color: theme.palette.common.white,
    fontSize: "1.5em",
    cursor: "pointer",
    [theme.breakpoints.down('xs')]: {
      fontSize: "1em",
    }
  },
}));

const drawerLinks = [
  {
    id: "campaigns",
    name: "Campaigns",
    icon: <NotificationsIcon />,
    link: "/auth/campaigns",
  },
  {
    id: "faqs",
    name: `FAQ's`,
    icon: <NotificationsIcon />,
    link: "/auth/faqs",
  },
  {
    id: "invites",
    name: "Invites",
    icon: <NotificationsIcon />,
    link: "/auth/invites",
  },
  {
    id: "privacyPolicy",
    name: "Privacy Policy",
    icon: <NotificationsIcon />,
    link: "/auth/privacy",
  },
  {
    id: "termsConditions",
    name: "Terms & Conditions",
    icon: <NotificationsIcon />,
    link: "/auth/terms",
  },
];

const actions = {
  logout
}

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
})

const DashboardHeader = ({logout, profile}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const router = useRouter()

  const [openDrawer, setOpenDrawer] = useState(false);




  const handleLogout = () => {
    logout()
  }
  return (
    <Fragment>
      <AppBar position={"fixed"} className={classes.appBar}>
        <Toolbar disableGutters>
          <Grid item container alignItems={"center"}>
            <Grid item>
              <IconButton
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
                // className={classes.drawerIconContainer}
              >
                <MenuIcon className={classes.menuIcon} />
              </IconButton>
            </Grid>
            <Grid item>
              <img
                className={classes.logo}
                src="/assets/logo/logo.png"
                alt="logo"
              />
            </Grid>

            <Grid item style={{ marginLeft: "auto", paddingRight: "2em" }}>
              <Grid item container alignItems={"center"}>
                <Grid item>
                  <IconButton size={'small'} onClick={() => router.push({pathname: '/auth/dashboard'})}>
                    <HomeIcon className={classes.icon}  />
                  </IconButton>

                </Grid>
                <Grid item>
                  <IconButton size={'small'} onClick={() => router.push({pathname: '/auth/settings'})}>
                    <SettingsIcon className={classes.icon} />
                  </IconButton>

                </Grid>
                <Grid item>
                  <IconButton size={'small'} >
                    <NotificationsIcon className={classes.icon} />
                  </IconButton>

                </Grid>

                {profile && profile.isLoaded && (
                    <Fragment>
                      <Grid item>
                        <Avatar className={classes.avatar} src={profile.imageURL } />
                      </Grid>

                      <Grid item>
                        <Typography className={classes.username} variant={"h6"}>
                          {profile.firstName + ' ' +  profile.lastName}
                        </Typography>
                      </Grid>
                    </Fragment>
                )}


                <Grid item>
                  <Grid item container alignItems={"center"}>
                    <Grid item>
                      <IconButton size={'small'} onClick={() => handleLogout()}>
                        <ExitToAppIcon className={classes.icon} />
                      </IconButton>

                    </Grid>
                    <Grid item>
                      <Typography className={classes.logoutText} variant={"h6"} onClick={() => handleLogout()}>
                        Log out
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/*DRAWER*/}
          <Fragment>
            <SwipeableDrawer
              // disableBackdropTransition={!iOS}
              // disableDiscovery={iOS}
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
              onOpen={() => setOpenDrawer(true)}
              classes={{ paper: classes.drawer }}
            >
              <div className={classes.toolbarMargin} />
              <List disablePadding>
                <ListItem>
                  <ListItemText>
                    <Button
                      variant="contained"
                      size={"large"}
                      className={classes.button}
                      startIcon={<AddIcon />}
                      onClick={() => router.push({pathname: '/auth/createCampaign'})}
                    >
                      New Campaign
                    </Button>
                  </ListItemText>
                </ListItem>

                {drawerLinks.map((link) => (

                  <ListItem key={link.id}>
                    <ListItemText>
                      {/*<Grid item container alignItems={"center"} onClick={() => router.push({pathname: `${link.link}`})}>*/}

                      <Grid item container alignItems={"center"} component={Link} href={link.link}>
                        <Grid item className={classes.drawerIcon}>
                          {link.icon}
                        </Grid>
                        <Grid item>
                          <Typography
                            className={classes.drawerLink}
                            variant={"h6"}
                          >
                            {link.name}
                          </Typography>
                        </Grid>
                      </Grid>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </SwipeableDrawer>
          </Fragment>
        </Toolbar>
      </AppBar>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default connect(mapStateToProps, actions) (DashboardHeader);
