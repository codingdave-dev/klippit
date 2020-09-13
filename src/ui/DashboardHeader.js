import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import { logout } from "../store/actions/authActions/authActions";
import { connect } from "react-redux";

import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "black",
    zIndex: theme.zIndex.modal + 2,
  },

  menuIcon: {
    color: theme.palette.common.white,
    fontSize: "1.5em",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },

  },

  logoWrapper: {
    marginTop: "10px",
  },

  logo: {
    cursor: 'pointer',
    width: "100px",
    [theme.breakpoints.down("xs")]: {
      width: "80px",
    },
  },

  rightNavWrapper: {
    marginLeft: "auto",
    paddingRight: "2em",
    [theme.breakpoints.down("xs")]: {
      paddingRight: "1em",
    },
  },

  icon: {
    color: theme.palette.common.white,
    paddingLeft: "0.3em",
    paddingRight: "0.3em",
    fontSize: "1.8em",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      padding: "0.3em",
      fontSize: "1.6em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "0.2em",
      fontSize: "1.2em",
    },
  },
  avatar: {
    marginLeft: "0.8em",
    marginRight: "0.8em",
    [theme.breakpoints.down("sm")]: {
      width: '30px',
      height: '30px',
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  username: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  logoutText: {
    color: theme.palette.common.white,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },

  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em",
    },
  },
  drawer: {
    backgroundColor: theme.palette.common.navDrawer,
    width: "300px",
    [theme.breakpoints.down("xs")]: {
      width: "250px",
    },
  },
  button: {
    borderRadius: "100px",
    backgroundColor: theme.palette.common.white,
    color: theme.palette.primary.main,
    fontSize: "1.1em",
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  drawerIconWrapper: {
    marginRight: "1.5em",
  },

  drawerIcon: {
    width: "25px",
  },

  drawerLink: {
    color: theme.palette.common.white,
    cursor: "pointer",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
}));

const drawerLinks = [
  {
    id: "campaigns",
    name: "Campaigns",
    icon: "/assets/icon/nav/rocket.png",
    link: "/auth/campaigns",
  },
  {
    id: "faqs",
    name: `FAQ's`,
    icon: "/assets/icon/nav/question.png",
    link: "/auth/faqs",
  },
  {
    id: "invites",
    name: "Invites",
    icon: "/assets/icon/nav/question.png",
    link: "/auth/invites",
  },
  {
    id: "privacyPolicy",
    name: "Privacy Policy",
    icon: "/assets/icon/nav/trusted.png",
    link: "/auth/privacy",
  },
  {
    id: "termsConditions",
    name: "Terms & Conditions",
    icon: "/assets/icon/nav/clipboard.png",
    link: "/auth/terms",
  },
];

const actions = {
  logout,
};

const mapStateToProps = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

const DashboardHeader = ({ logout, profile }) => {
  const classes = useStyles();
  const theme = useTheme();

  const router = useRouter();

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleLogout = () => {
    logout();
  };
  return (
    <Fragment>
      <AppBar position={"fixed"} className={classes.appBar}>
        <Toolbar disableGutters>
          <Grid item container alignItems={"center"}>
            {/*MENU LOGO CONTAINER*/}
            <Grid item>
              <Grid item container alignItems={"center"}>
                <Grid item>
                  <IconButton
                      aria-label={'menu button'}
                    onClick={() => setOpenDrawer(!openDrawer)}
                    disableRipple
                  >
                    <MenuIcon className={classes.menuIcon} />
                  </IconButton>
                </Grid>
                <Grid item className={classes.logoWrapper}>
                  <img
                      aria-label={'klippit logo'}
                      onClick={() => router.push({pathname: '/auth/dashboard'})}
                    className={classes.logo}
                    src="/assets/logo/dashboardLogo.png"
                    alt="dashboard logo"
                  />
                </Grid>
              </Grid>
            </Grid>

            {/*RIGHT NAV CONTAINER*/}
            <Grid item className={classes.rightNavWrapper}>
              <Grid item container alignItems={"center"}>
                <Grid item>
                  <IconButton
                      aria-label={'dashboard'}
                    size={"small"}
                    onClick={() => router.push({ pathname: "/auth/dashboard" })}
                  >
                    <HomeIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton
                      aria-label={'settings dashboard'}
                    size={"small"}
                    onClick={() => router.push({ pathname: "/auth/settings" })}
                  >
                    <SettingsIcon className={classes.icon} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton aria-label={'notifications'} size={"small"}>
                    <NotificationsIcon className={classes.icon} />
                  </IconButton>
                </Grid>

                {profile && profile.isLoaded && (
                  <Fragment>
                    <Grid item>
                      <Avatar
                          aria-label={'avatar'}
                        className={classes.avatar}
                        src={profile.imageURL}
                      />
                    </Grid>

                    <Grid item>
                      <Typography className={classes.username} variant={"h6"} aria-label={`${profile.firstName + " " + profile.lastName}`}>
                        {profile.firstName + " " + profile.lastName}
                      </Typography>
                    </Grid>
                  </Fragment>
                )}

                <Grid item>
                  <Grid item container alignItems={"center"}>
                    <Grid item>
                      <IconButton size={"small"} onClick={() => handleLogout()}>
                        <ExitToAppIcon className={classes.icon} aria-label={'logout'} />
                      </IconButton>
                    </Grid>
                    <Grid item>
                      <Typography
                        className={classes.logoutText}
                        variant={"h6"}
                        onClick={() => handleLogout()}
                      >
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
                      onClick={() =>
                        router.push({ pathname: "/auth/createCampaign" })
                      }
                    >
                      New Campaign
                    </Button>
                  </ListItemText>
                </ListItem>

                {drawerLinks.map((link) => (
                  <ListItem key={link.id}>
                    <ListItemText>
                      <Grid
                        item
                        container
                        alignItems={"center"}
                        component={Link}
                        href={link.link}
                      >
                        <Grid item className={classes.drawerIconWrapper}>
                          <img
                            src={link.icon}
                            alt={`${link.name} icon`}
                            className={classes.drawerIcon}
                          />
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

export default connect(mapStateToProps, actions)(DashboardHeader);
