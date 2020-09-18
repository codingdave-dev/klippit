import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Footer from "../../../src/ui/Footer";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.grey.A100,
    marginTop: "-80px",
    paddingTop: "6em",
    paddingBottom: "4em",
  },
  inputWrapper: {
    marginTop: "2em",
    marginBottom: "2em",
    width: "50%",
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.6em",
    },
  },
  subTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
      textAlign: "center",
    },
  },
  searchInput: {
    borderRadius: "999px",
    backgroundColor: theme.palette.common.inputGrey,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.common.white,
        borderRadius: "999px",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-focused fieldset": {
        display: "none",
        borderColor: theme.palette.primary.main,
      },
    },
    "& .MuiFormLabel-root": {
      "&.Mui-focused": {
        display: "none",
      },
    },
  },
  resultsWrapper: {
    width: "70%",
    marginTop: "2em",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  columnHeader: {
    color: theme.palette.primary.main,
  },
  faqLink: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  faqAnswer: {
    color: theme.palette.grey.A200,
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.9em",
    },
  },
  resultsTitle: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  columnWrapper: {
    padding: '3em',
    [theme.breakpoints.down('md')]: {
      padding: '2em'
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0
    }
  }
}));

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const searchFAQ = [
  {
    id: 1,
    category: "general",
    name: "How many influencers do you have on your platform?",
    link: "#",
    description:
      "The current number of influencers that we have on our platform can be found on the home page of your dashboard!",
  },
  {
    id: 2,
    category: "general",
    name: "How does Klippit help me get more customers?",
    link: "#",
    description:
      "Klippit turns all of your existing customers into advocates for your business by making them talk about your deal/business with their network. They are willing to this more aggressively because they will be incentivized whenever their friends buy from you using their promo code. ",
  },
  {
    id: 3,
    category: "general",
    name: "How do I get more information about Klippit?",
    link: "#",
    description:
      'You can send an email to support@klippitapp.com and a representative will reach out to you.',
  },
  {
    id: 4,
    category: "general",
    name: "How much does Klippit cost?",
    link: "#",
    description:
      "Unlike other influencer marketing platforms, you will only be charged once people buy from you. We take a transaction fee whenever someone purchases your deal from our platform.",
  },

  {
    id: 5,
    category: "theApp",
    name: "How can we ensure that influencers will create appropriate content for my business?",
    link: "#",
    description:
        "In the full feature merchant portal, you will have the ability to flag content that influencers create for your business. You also have the option to approve or reject content for your deal before they post it to redeem their deal.",
  },
  {
    id: 6,
    category: "theApp",
    name: "How long does my deal last?",
    link: "#",
    description:
        "You will have the ability to set the duration of your deal when it is live.",
  },
  {
    id: 7,
    category: "theApp",
    name: "When will my deal be available?",
    link: "#",
    description:
        'Your deal will be available when we launch. However, we will contact you prior to our launch to make go over your deal with you and make sure that you are prepared for your Klippit customers.',
  },

];

const Index = ({ auth, profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();
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

  // SEARCH FUNCTION
  const handleSearch = (event) => {
    setSearch(event.target.value);
    const searchData = searchFAQ.map((faq) =>
      Object.values(faq).filter((option) => option !== true && option !== false)
    );
    const matches = searchData.map((faw) =>
      faw.map((option) =>
        option
          .toString()
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
    const searchFaqData = [...searchFAQ];
    matches.map((faq, index) =>
      faq.includes(true)
        ? (searchFaqData[index].search = true)
        : (searchFaqData[index].search = false)
    );
    setSearchResults(searchFaqData);
    if (event.target.value === "") {
      setSearchResults([]);
    }
  };

  return (
    <Fragment>
      <DashboardHeader />
      <Grid
        item
        container
        direction={"column"}
        alignItems={"center"}
        className={classes.wrapper}
      >
        <Grid item>
          <Typography variant={"h4"} className={classes.title}>
            How can we help you?
          </Typography>
        </Grid>

        {/*SERACH INPUT*/}
        <Grid item container justify={"center"}>
          <Grid item className={classes.inputWrapper}>
            <TextField
              autoComplete={"off"}
              fullWidth
              value={search}
              onChange={handleSearch}
              id={"search-box"}
              label={"Search"}
              variant={"outlined"}
              className={classes.searchInput}
            />
          </Grid>
        </Grid>
        <Grid item container justify={"center"}>
          <Grid item>
            <Typography variant={"subtitle1"} className={classes.subTitle}>
              You can also browse the topics below to find what you are looking
              for.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {/*STATIC RESULTS*/}
      {searchResults.length < 1 && (
        <Grid item container alignItems={"center"} justify={"center"}>
          <Grid
            item
            container
            direction={"column"}
            className={classes.resultsWrapper}
          >
            <Grid item>
              <Typography variant={"h5"} className={classes.resultsTitle}>
                Frequently Asked Questions
              </Typography>
            </Grid>


            <Grid item container>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.columnWrapper}>
                <Grid item style={{ marginTop: "2em", marginBottom: "0.8em" }}>
                  <Typography variant={"h6"} className={classes.columnHeader}>
                    General
                  </Typography>
                </Grid>

                {searchFAQ
                    .filter((category) => category.category === "general")
                    .map((option) => (
                        <Grid item container direction={'column'} key={option.id} style={{marginTop: '1em', marginBottom: '1em'}}>
                          <Grid item >
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqLink}
                            >
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item style={{paddingLeft: '1.5em'}}>
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqAnswer}
                            >
                              {option.description}
                            </Typography>
                          </Grid>
                        </Grid>

                    ))}
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.columnWrapper}>
                <Grid item style={{ marginTop: "2em", marginBottom: "0.8em" }}>
                  <Typography variant={"h6"} className={classes.columnHeader}>
                    The App
                  </Typography>
                </Grid>

                {searchFAQ
                    .filter((category) => category.category === "theApp")
                    .map((option) => (
                        <Grid item container direction={'column'} key={option.id} style={{marginTop: '1em', marginBottom: '1em'}}>
                          <Grid item >
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqLink}
                            >
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item style={{paddingLeft: '1.5em'}}>
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqAnswer}
                            >
                              {option.description}
                            </Typography>
                          </Grid>
                        </Grid>

                    ))}
              </Grid>
            </Grid>




          </Grid>
        </Grid>
      )}

      {/*DYNAMIC RESULTS*/}
      {searchResults.length > 0 && (
        <Grid item container alignItems={"center"} justify={"center"}>
          <Grid
            item
            container
            direction={"column"}
            className={classes.resultsWrapper}
          >
            <Grid item>
              <Typography variant={"h5"} className={classes.resultsTitle}>
                Search Results
              </Typography>
            </Grid>

            <Grid item container>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.columnWrapper}>
                <Grid item style={{ marginTop: "2em", marginBottom: "1em" }}>
                  <Typography variant={"h6"} className={classes.columnHeader}>
                    General
                  </Typography>
                </Grid>

                {searchResults &&
                searchResults
                    .filter((result) => result.search).filter((category) => category.category === "general")
                    .map((option) => (
                        <Grid item container direction={'column'} key={option.id} style={{marginTop: '1em', marginBottom: '1em'}}>
                          <Grid item >
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqLink}
                            >
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item style={{paddingLeft: '3em'}}>
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqAnswer}
                            >
                              {option.description}
                            </Typography>
                          </Grid>
                        </Grid>
                    ))}
              </Grid>
              <Grid item lg={6} md={6} sm={12} xs={12} className={classes.columnWrapper}>
                <Grid item style={{ marginTop: "2em", marginBottom: "1em" }}>
                  <Typography variant={"h6"} className={classes.columnHeader}>
                    The App
                  </Typography>
                </Grid>

                {searchResults &&
                searchResults
                    .filter((result) => result.search).filter((category) => category.category === "theApp")
                    .map((option) => (
                        <Grid item container direction={'column'} key={option.id} style={{marginTop: '1em', marginBottom: '1em'}}>
                          <Grid item >
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqLink}
                            >
                              {option.name}
                            </Typography>
                          </Grid>
                          <Grid item style={{paddingLeft: '3em'}}>
                            <Typography
                                variant={"subtitle1"}
                                className={classes.faqAnswer}
                            >
                              {option.description}
                            </Typography>
                          </Grid>
                        </Grid>
                    ))}
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      )}
      <Footer/>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Index);
