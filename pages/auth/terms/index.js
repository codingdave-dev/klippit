import React, { Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useRouter } from "next/router";

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
  sectionTextHeader: {
    color: "grey",
    fontSize: "1.2em",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
  spanTag: {
    fontWeight: "900",
  },
}));

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const Index = ({ auth, profile }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

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
  return (
    <Fragment>
      <DashboardHeader />
      <Grid
        item
        container
        direction={"column"}
        style={{ backgroundColor: "lightgrey", paddingBottom: "3em" }}
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
                Terms & Conditions
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                July 12, 2020
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Welcome to Klippit Ltd. Company
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                1. Our Terms of Service
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                These Terms of Service (“
                <span className={classes.spanTag}>Terms</span>”) between Klippit
                Ltd. Company., its subsidiaries, affiliates, agents, service
                providers, and assigns (“
                <span className={classes.spanTag}>Klippit</span>,” “
                <span className={classes.spanTag}>us</span>,” “
                <span className={classes.spanTag}>we</span>,” “
                <span className={classes.spanTag}>our</span>”) and you (“
                <span className={classes.spanTag}>you</span>,” “
                <span className={classes.spanTag}>your</span>”), the end user of
                our website (https://join.klippitapp.com/prelaunchapp/) (the “
                <span className={classes.spanTag}>Site</span>”) and mobile app
                (the “<span className={classes.spanTag}>App</span>”), govern
                your use of our products and services we may offer through this
                Site and the App from time to time, which we refer to
                collectively as our “Services”. You can use our Services only if
                you can lawfully enter into and form contracts under applicable
                law. However, we may permit you to designate another person as
                an authorized user (“
                <span className={classes.spanTag}>Authorized</span>
                User”) of your Klippit Account(s) and our Services, as described
                below. If you use our Services, you must do so in compliance
                with these Terms and with applicable law and are responsible for
                ensuring any Authorized User does the same. If you do not want
                these Terms to apply, please do not use our Services.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  PLEASE READ THESE TERMS CAREFULLY, AS THEY CONTAIN AN
                  AGREEMENT TO ARBITRATE AND OTHER IMPORTANT INFORMATION
                  REGARDING YOUR LEGAL RIGHTS, REMEDIES, AND OBLIGATIONS. THE
                  AGREEMENT TO ARBITRATE REQUIRES (WITH LIMITED EXCEPTIONS) THAT
                  YOU SUBMIT CLAIMS YOU HAVE AGAINST US TO BINDING AND FINAL
                  ARBITRATION, AND FURTHER (1) YOU WILL ONLY BE PERMITTED TO
                  PURSUE CLAIMS AGAINST KLIPPIT ON AN INDIVIDUAL BASIS, NOT AS A
                  PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE
                  ACTION OR PROCEEDING, (2) YOU WILL ONLY BE PERMITTED TO SEEK
                  RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY
                  RELIEF) ON AN INDIVIDUAL BASIS, AND (3) YOU MAY NOT BE ABLE TO
                  HAVE ANY CLAIMS YOU HAVE AGAINST US RESOLVED BY A JURY OR IN A
                  COURT OF LAW.
                </span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Some of the Services may be subject to our additional terms,
                conditions, agreements, policies, guidelines, rules and
                schedules, which will be posted or made available separately
                from these Terms when the Service is offered (“
                <span className={classes.spanTag}>Additional Terms</span>
                ”), including, without limitation, our Privacy Policy, located
                at https://join.klippitapp.com/privacyppolicy/, and the AAA
                Rules (described below). Such Additional Terms are incorporated
                into and form a part of these Terms. If there is a conflict
                between these Terms and the Additional Terms, the Additional
                Terms will control.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                For purposes of these Terms, our business days are Monday
                through Friday. Holidays are not included.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                2. Changes to These Terms; Modifications to Services
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                We may change provisions of these Terms at any time, including
                when there are changes in our Services, technology, or laws, or
                for other reasons. If we do, we will provide notice by posting
                the updated Terms on the Site or App. Any changed Terms will
                become effective immediately after they are posted and will
                apply prospectively to your use of our Services after the
                changes become effective, except that changes addressing
                modifications to our Services or new functions or changes made
                for legal reasons may be effective immediately, with or without
                notice to you. Your continued use following the effective date
                of any changes will constitute your acceptance of those changes.
                If you do not agree to any changed Terms, you must discontinue
                using our Services. We may discontinue, temporarily or
                permanently, our Services, or any part of our Services, or
                otherwise change the Services we offer with or without notice.
                You agree that we will not be liable to you or to any third
                party for any modification, suspension, or discontinuance of our
                Services.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                3. Consent to Doing Business Electronically; Communications
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Because our platform operates on the Internet, you consent to
                transact business with us electronically. You agree that we may
                provide notices to you by electronic means, for example, by
                posting it on our Site or App, sending you an in-App message,
                emailing it to an email address that you have provided us,
                mailing it to any postal address that you have provided us, or
                by sending it as a text message to any mobile phone number that
                you have provided us. All notices by any of these methods will
                be deemed received by you no later than the earlier of when
                received or 24 hours after sent to the contact information you
                provided, except for notice by postal mail, which will be deemed
                received by you no later than the earlier of when received or 3
                business days after it is mailed to the most recent address we
                have on file for you.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You consent to be contacted by us, our agents, representatives,
                affiliates, or anyone calling on our behalf for any purpose, at
                any telephone number or physical or electronic address you
                provide or at which you may be reached. You represent that the
                telephone numbers that you have provided to us are your contact
                numbers. You represent that you are permitted to receive calls
                at each of the telephone numbers you have provided to us. You
                agree to promptly alert us whenever you stop using a particular
                telephone number, including a mobile telephone number.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You consent to receive SMS messages (including text messages),
                calls, and messages (including pre-recorded, artificial voice,
                and autodialed or automatically texted) from us, our agents,
                representatives, affiliates, or anyone calling or texting on our
                behalf at the specific numbers you have provided to us, or
                numbers we can reasonably associate with you or an Authorized
                User (through skip trace, caller ID capture, or other means),
                with information or questions relating to you or our Services.
                Automated messages may be played when the telephone is answered,
                whether by you or someone else. In the event that an agent or
                representative calls, he or she may also leave a message on your
                answering machine or voicemail, or send a message by text. Calls
                may be recorded.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                To unsubscribe from text messages at any time, reply STOP to any
                text message you receive from us. If you unsubscribe, we may
                restrict your access to your Online Account (defined below)
                and/or Klippit Account and we may terminate your use of our
                Services. You consent that following such a request to
                unsubscribe, you may receive one final text message from us
                confirming your request and/or providing an alternative to
                access your Online Account and/or Klippit Account.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You also agree to receive alerts about your activity, balances,
                payments, suspicious activities, and other matters involving
                your use of the Site or App or the Services through push
                notifications to your smartphone or other device. Receipt of
                push notifications may be delayed or prevented by factors beyond
                our control, including those affecting your internet/phone
                provider. We are not liable for losses or damages arising from
                non-delivery, delayed delivery, or the erroneous delivery of any
                push notification; inaccurate push notification content; or your
                use or reliance on the content of any push notification for any
                purposes. Each push notification may not be encrypted, and may
                include your name and information pertaining to your Online
                Account or use of the Site or App. We may terminate your use of
                push notifications at any time without notice. You may choose to
                discontinue receiving push notifications by updating your
                preferences on your smartphone or device. You acknowledge and
                agree that standard call, message, and data rates charged by
                your carrier apply to all communications by or with us.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                In the event you change or deactivate your mobile telephone
                number, e-mail address, mailing address, or any other contact
                information you have provided, you agree to promptly update your
                contact information.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                4. Accessing and Using Our Services
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  Provision of Certain Services; Account Application.
                </span>{" "}
                In the future, our Services may include access to and
                maintenance of certain consumer financial products and accounts
                (each, a “
                <span className={classes.spanTag}>Klippit Account</span>”)
                offered by a bank partner (“<span>Bank Partner</span>”). You
                understand that the Bank Partner has sole discretion to approve
                or deny your application for a Klippit Account, or discontinue
                your Klippit Account, for any reason, subject to applicable law.
                We or the Bank Partner may limit or deny your access to any
                other aspect of the Service for any reason, subject to
                applicable law.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  Account Registration; Security.
                </span>{" "}
                You may be presented with the opportunity or requirement to
                create an online account to use certain parts of the Site or App
                (“Online Account”) or to apply for or open a Klippit Account.
                When you create an Online Account, you may be required to pick a
                user name, password, and/or other access credentials.
                Registration data and certain other information about you are
                governed by our Privacy Policy. You are responsible for
                maintaining the confidentiality of your Online Account and
                access credentials and for restricting access to your computer
                and any other devices you use to access your Online Account, and
                you agree to accept responsibility for all activities that occur
                under your Online Account or access credentials. You may not
                assign or otherwise transfer your Online Account to any other
                person, except to the extent that applicable Additional Terms
                permit you to add an Authorized User. You acknowledge that we
                are not responsible for third party access to your Online
                Account, including access by an Authorized User and access that
                results from theft or misappropriation of your Online Account or
                access credentials. We reserve the right, in our sole
                discretion, to refuse or cancel Services, terminate Online
                Accounts, or remove or edit Content (as defined in Section 7
                below). You agree to (a) immediately notify us of any
                unauthorized use of your access credentials or Online Account or
                any other breach of security and (b) ensure that you exit from
                your Online Account at the end of each session when accessing
                our Services. We will not be liable for any loss or damage
                arising from your failure to comply with this provision.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Authorized Users.</span> You
                may be permitted to add one or more Authorized Users to your
                Klippit Account(s) or permit an Authorized User to use the
                Services. Subject to approval, this may include your minor
                child(ren). Any minor who uses the Services must do so only as
                authorized by their parent or legal guardian, who must
                themselves be of majority age. You acknowledge that these Terms
                will apply to you and each Authorized User, and you hereby
                expressly accept these Terms on behalf of yourself and each
                Authorized User. You further agree to and accept full
                responsibility for any Authorized User’s use our Services,
                including but not limited to (a) any transactions made by an
                Authorized User on your Klippit Account; (b) any transaction
                made by an Authorized user even if the post date shown on your
                statement for that transaction occurs after the date you ask us
                to remove the Authorized User from your Klippit Account; (c) any
                transaction made by others if an Authorized User allows them to
                use your Klippit Account; (d) Fees and charges resulting from
                any transaction made by an Authorized User or others if an
                Authorized User allows them to use your Account; and (e) any
                other financial charges and legal liability that an Authorized
                User may incur in connection with their use of your Klippit
                Account or an Online Account. You allow us to discuss your
                Klippit Account with an Authorized User, which includes giving
                him or her access to your transaction history and Klippit
                Account information. You also agree that an Authorized User may
                use and receive information about the Klippit Account the same
                way you do. By adding an Authorized User, you represent that you
                have permission from each one to allow us to share information
                about him or her as allowed by applicable law. This includes
                information we may get from you, any Authorized User, and
                information about their transactions and use of the Services.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Index);
