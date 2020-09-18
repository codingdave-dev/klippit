import React, { Fragment } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "8em",
    marginBottom: "3em",
  },
  title: {
    fontWeight: 600,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
  option: {
    color: theme.palette.grey.A200,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
  link: {
    textDecoration: "none",
    color: theme.palette.grey.A200,
    "&:hover": {
      textDecoration: "underline",
    },
  },
  icon: {
    width: "20px",
    height: "20px",
    padding: "0.3em",
    [theme.breakpoints.down("md")]: {
      width: "18px",
      height: "18px",
      padding: "0.25em",
    },
  },
  copyright: {
    color: theme.palette.grey.A200,
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8em",
    },
  },
}));

const footerLinks = [
  {
    learnMore: [
      {
        id: "influencers",
        name: "Influencers",
        link: "https://join.klippitapp.com/prelaunchapp/",
      },
    ],
  },
  {
    support: [
      {
        id: "helpCenter",
        name: "Help Center",
        link: "/auth/faqs",
      },
      {
        id: "contactUs",
        name: "Contact Us",
        link: "mailto: support@klippitapp.com?subject=Merchant Help",
      },
      {
        id: "productTour",
        name: "Product Tour",
        link: "/auth/howItWorks",
      },
    ],
  },
  {
    legal: [
      {
        id: "termsOfUs",
        name: "Terms of Use",
        link: "/terms",
      },
      {
        id: "privacyNotice",
        name: "Privacy Notice",
        link: "/privacy",
      },
    ],
  },
  {
    address: [
      {
        id: "addr1",
        name: "1065 Liberty Pkwy nw,",
      },
      {
        id: "addr2",
        name: "Atlanta, GA, 30318",
      },
    ],
  },
];

const socialIcons = [
  {
    id: "facebook",
    name: "Facebook",
    image: "/assets/icon/social/facebook.png",
    link: "https://www.facebook.com/klippitapp",
  },
  {
    id: "twitter",
    name: "Twitter",
    image: "/assets/icon/social/twitter.png",
    link: "https://twitter.com/OfficialKlippit",
  },
  {
    id: "linkedin",
    name: "Linkedin",
    image: "/assets/icon/social/linkedin.png",
    link: "https://www.linkedin.com/company/klippit-ltd-company/",
  },
  {
    id: "instagram",
    name: "Instagram",
    image: "/assets/icon/social/instagram.png",
    link: "https://www.instagram.com/klippitcash/",
  },
];

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const Footer = ({ auth, profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const authenticated = auth.isLoaded === true && auth.isEmpty === false;
  return (
    <div className={classes.wrapper}>
      <Grid container justify={'center'}>
        {/*LEARN MORE*/}
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Grid item container justify={"center"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"subtitle1"} className={classes.title}>
                    LEARN MORE
                  </Typography>
                </Grid>
                {footerLinks[0].learnMore.map((footer) => (
                  <Grid item key={footer.id}>
                    <a
                      href={footer.link}
                      target={"_blank"}
                      className={classes.link}
                    >
                      <Typography
                        variant={"subtitle1"}
                        className={classes.option}
                      >
                        {footer.name}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*SUPPORT*/}
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Grid item container justify={"center"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"subtitle1"} className={classes.title}>
                    SUPPORT
                  </Typography>
                </Grid>
                {footerLinks[1].support.map((footer) => (
                  <Grid item key={footer.id}>
                    <a href={footer.link} className={classes.link}>
                      <Typography
                        variant={"subtitle1"}
                        className={classes.option}
                      >
                        {footer.name}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*LEGAL*/}
        <Grid item lg={2} md={2} sm={4} xs={4}>
          <Grid item container justify={"center"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"subtitle1"} className={classes.title}>
                    LEGAL
                  </Typography>
                </Grid>
                {footerLinks[2].legal.map((footer) => (
                  <Grid item key={footer.id}>
                    <a
                      href={authenticated ? `/auth${footer.link}` : footer.link}
                      className={classes.link}
                    >
                      <Typography
                        variant={"subtitle1"}
                        className={classes.option}
                      >
                        {footer.name}
                      </Typography>
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*ADDRESS*/}
        <Grid
          item
          lg={2}
          md={2}
          sm={6}
          xs={6}
          style={matchesSM ? { marginTop: "1em" } : null}
        >
          <Grid item container justify={"center"}>
            <Grid item>
              <Grid item container direction={"column"}>
                <Grid item>
                  <Typography variant={"subtitle1"} className={classes.title}>
                    ADDRESS
                  </Typography>
                </Grid>
                {footerLinks[3].address.map((footer) => (
                  <Grid item key={footer.id}>
                    <Typography
                      variant={"subtitle1"}
                      className={classes.option}
                    >
                      {footer.name}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*SOCIAL*/}
        <Grid
          item
          lg={2}
          md={2}
          sm={6}
          xs={6}
          style={matchesSM ? { marginTop: "1em" } : null}
        >
          <Grid item container justify={"center"}>
            <Grid item>
              <Grid item container>
                {socialIcons.map((social) => (
                  <Grid item key={social.id}>
                    <a
                      href={social.link}
                      target={"_blank"}
                      className={classes.socialLink}
                    >
                      <img
                        className={classes.icon}
                        src={social.image}
                        alt={`${social.name} link`}
                      />
                    </a>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item container justify={matchesSM ? "center" : null}>
        <Grid
          item
          style={
            matchesSM
              ? { marginTop: "2em" }
              : { marginLeft: "auto", marginTop: "2em", paddingRight: "2em" }
          }
        >
          <Typography variant={"body2"} className={classes.copyright}>
            © Klippit 2020
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps)(Footer);
