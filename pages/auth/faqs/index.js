import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

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
    name: "How do referral rewards work?",
    link: "#",
    description:
      "When you refer friends to join Klippit and they use your referral link or code to sign up, you earn $1. The more friends that sign up with your code or link, the more money you earn.",
  },
  {
    id: 2,
    category: "general",
    name: "When do I get the rewards money I have earned for referrals?",
    link: "#",
    description:
      "You can see your referral rewards balance by logging in to the Klippit mobile app. Your rewards money will be deposited into your Klippit wallet once we launch the full app in the Spring. Klippit will notify you once we launch the Klippit Daily Deals app in the Spring. From there, you can withdraw your funds from the wallet within the app.",
  },
  {
    id: 3,
    category: "general",
    name: "How can I spend the rewards I earn?",
    link: "#",
    description:
      'After Klippit launches the "Klippit Daily Deals" app, you will be able to deposit your funds to a spending account of your choice.',
  },
  {
    id: 4,
    category: "general",
    name: "How do I login after creating an account?",
    link: "#",
    description:
      "To login after creating an account you must re-verify the phone number used to set up your account and confirm your birthday. This will allow you to log back in and access your account.",
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
    console.log(searchData);
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

            <Grid item>
              <Grid item style={{ marginTop: "2em", marginBottom: "0.8em" }}>
                <Typography variant={"h6"} className={classes.columnHeader}>
                  General
                </Typography>
              </Grid>

              {searchFAQ
                .filter((category) => category.category === "general")
                .map((option) => (
                  <Grid item key={option.id}>
                    <Typography
                      variant={"subtitle1"}
                      className={classes.faqLink}
                    >
                      <a
                        href={option.link}
                        style={{
                          textDecoration: "none",
                          color: theme.palette.grey.A200,
                        }}
                      >
                        {option.name}
                      </a>
                    </Typography>
                  </Grid>
                ))}
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

            <Grid item lg={6}>
              <Grid item style={{ marginTop: "2em", marginBottom: "1em" }}>
                <Typography variant={"h6"} className={classes.columnHeader}>
                  General
                </Typography>
              </Grid>

              {searchResults &&
                searchResults
                  .filter((result) => result.search)
                  .map((option) => (
                    <Grid item key={option.id}>
                      <Typography
                        variant={"subtitle1"}
                        className={classes.faqLink}
                      >
                        <a
                          href={option.link}
                          style={{
                            textDecoration: "none",
                            color: theme.palette.grey.A200,
                          }}
                        >
                          {option.name}
                        </a>
                      </Typography>
                    </Grid>
                  ))}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Fragment>
  );
};

export default connect(mapStateToProps)(Index);
