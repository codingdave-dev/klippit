import React, { Fragment, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import DashboardHeader from "../../../src/ui/DashboardHeader";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import cuid from "cuid/index";

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

  textWrapperIndent: {
    paddingLeft: "5em",
    marginTop: "0.6em",
    marginBottom: "0.6em",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.4em",
      marginBottom: "0.4em",
      paddingLeft: "4em",
    },
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "3em",
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

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                5. Mobile Services; Special Terms Regarding Apple-Enabled
                Software Applications
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                We may offer Services that are available via a mobile device,
                including the ability to access certain features through the App
                (collectively, the “
                <span className={classes.spanTag}>Mobile Services</span>”). To
                the extent you access our Services, or send or receive any
                communications with us through a mobile device, your wireless
                service carrier’s standard charges, data rates, and other fees
                may apply. In addition, downloading, installing, or using
                certain Mobile Services may be prohibited or restricted by your
                carrier, and not all Mobile Services may work with all carriers
                or devices. By using our Mobile Services, you agree that we may
                communicate with you by SMS, MMS, text message, or other
                electronic means to your mobile device and, as a result, that
                certain information about your usage of our Mobile Services may
                be communicated to us.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                The App and other Software (defined below in Section 11(a)) may
                be made available through the Apple, Inc. (“
                <span className={classes.spanTag}>Apple</span>”) App Store,
                Android Marketplace or other distribution channels (“
                <span className={classes.spanTag}>Distribution Channels</span>
                ”). If you obtain such Software through a Distribution Channel,
                you may be subject to additional terms of the Distribution
                Channel. These Terms are between you and us only, and not with
                the Distribution Channel. To the extent that you use any other
                third party products and services in connection with your use of
                our Services, you agree to comply with all applicable terms of
                any agreement for such third-party products and services. With
                respect to Software that is made available for your use in
                connection with an Apple-branded product (such Software, “
                <span className={classes.spanTag}>Apple-Enabled Software</span>
                ”), in addition to the other terms and conditions set forth in
                these Terms, the following terms and conditions apply:
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                a. Klippit and you acknowledge that these Terms are between
                Klippit and you only, and not with Apple, and that as between
                Klippit and Apple, Klippit, not Apple, is solely responsible for
                the Apple-Enabled Software and its content.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                b. You may not use the Apple-Enabled Software in any manner that
                is in violation of or inconsistent with the Usage Rules set
                forth for Apple-Enabled Software in, or otherwise be in conflict
                with, the Apple App Store Terms of Service.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                c. Any license we may give you to use the Apple-Enabled Software
                is limited to a non-transferable license to use the
                Apple-Enabled Software on an iOS product that you own or
                control, as permitted by the Usage Rules set forth in the Apple
                App Store Terms of Service.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                d. Apple has no obligation whatsoever to provide any maintenance
                or support services with respect to the Apple-Enabled Software.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                e. Apple is not responsible for any product warranties, whether
                express or implied by law. In the event of any failure of the
                Apple-Enabled Software to conform to any applicable warranty,
                you may notify Apple, and Apple will refund the purchase price
                for the Apple-Enabled Software to you, if any; to the maximum
                extent permitted by applicable law, Apple will have no other
                warranty obligation whatsoever with respect to the Apple-Enabled
                Software, or any other claims, losses, liabilities, damages,
                costs, or expenses attributable to any failure to conform to any
                warranty, which will be Klippit’s sole responsibility, to the
                extent it cannot be disclaimed under applicable law.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                f. Klippit and you acknowledge that Klippit, not Apple, is
                responsible for addressing any claims of you or any third party
                relating to the Apple-Enabled Software or your possession and/or
                use of that Apple-Enabled Software, including: (i) product
                liability claims; (ii) any claim that the Apple-Enabled Software
                fails to conform to any applicable legal or regulatory
                requirement; and (iii) claims arising under consumer protection
                or similar legislation.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                g. In the event of any third party claim that the Apple-Enabled
                Software or the end-user’s possession and use of that
                Apple-Enabled Software infringes that third party’s intellectual
                property rights, as between Klippit and Apple, Klippit, not
                Apple, will be solely responsible for the investigation,
                defense, settlement, and discharge of any such intellectual
                property infringement claim.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                h. You represent and warrant that (i) you are not located in a
                country that is subject to a U.S. Government embargo, or that
                has been designated by the U.S. Government as a “terrorist
                supporting” country; and (ii) you are not listed on any U.S.
                Government list of prohibited or restricted parties.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                i. If you have any questions, complaints or claims with respect
                to the Apple-Enabled Software, they should be directed to
                Klippit as follows:
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                By e-mail: support@klippitapp.com
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                By mail: Klippit Ltd. Company 1065 Liberty parkway NW, Atlanta
                GA. 30318
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Klippit and you acknowledge and agree that Apple, and Apple’s
                subsidiaries, are third party beneficiaries of these Terms with
                respect to the Apple-Enabled Software, and that, upon your
                acceptance of these Terms, Apple will have the right (and will
                be deemed to have accepted the right) to enforce these Terms
                against you with respect to the Apple-Enabled Software as a
                third party beneficiary.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                If you obtain a Klippit Account, we may permit you to add a card
                or other access device associated with your Klippit Account
                (“Card”) to a digital wallet, such as Apple Pay or Google Pay
                (each a “Digital Wallet”) to make transactions using an eligible
                mobile device in lieu of your Card at all merchants and
                terminals where your Card and the Digital Wallet are accepted.
                The use of a Digital Wallet is subject to the [Digital Wallet
                Supplemental Terms and Conditions] (“Digital Wallet Terms”),
                which are incorporated herein by reference, and any violation of
                or non-compliance with the Digital Wallet Terms is also a
                violation of these Terms.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                6. Prohibited Activities
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You are solely responsible for all code, video, images,
                information, data, text, software, music, sound, photographs,
                graphics, messages, or other materials (“Content”) that you
                upload, post, publish, or display (hereinafter, “Upload”),
                email, or otherwise use via our Services. The following are
                examples of the kind of Content and/or use that is illegal or
                prohibited. We reserve the right to investigate and take
                appropriate legal action against anyone who, in our sole
                discretion, violates this section, including removing the
                offending Content from our Services, suspending or terminating
                the Online Account(s) and/or Klippit Account(s) of such
                violators, and reporting such violators to law enforcement
                authorities. You agree to not use our Services to:
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                a. Email or otherwise Upload any Content that (i) infringes any
                intellectual property or other proprietary rights of any party;
                (ii) you do not have a right to Upload under any law or under
                contractual or fiduciary relationships; (iii) contains software
                viruses or any other computer code, files, or programs designed
                to interrupt, destroy, or limit the functionality of any
                computer software or hardware or telecommunications equipment;
                (iv) poses or creates a privacy or security risk to any person;
                (v) constitutes unsolicited or unauthorized advertising,
                promotional materials, commercial activities and/or sales, “junk
                mail,” “spam,” “chain letters,” “pyramid schemes,” “contests,”
                “sweepstakes,” or any other form of solicitation; (vi) is
                unlawful, harmful, threatening, abusive, harassing, tortious,
                excessively violent, defamatory, vulgar, obscene, pornographic,
                libelous, invasive of another’s privacy, hateful racially,
                ethnically, or otherwise objectionable; or (vii) in our sole
                judgment, is objectionable or which restricts or inhibits any
                other person from using or enjoying our Services, or which may
                expose us or our users to any harm or liability of any type;
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                b. Interfere with or disrupt our Services, servers, or networks
                connected to our Services, or disobey any requirements,
                procedures, policies, or regulations of networks connected to
                our Services;
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                c. Violate any applicable local, state, national, or
                international law, or any regulations having the force of law;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                d. Create or control more than one Online Account or Klippit
                Account for yourself;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                e. Send or receive what we or Bank Partner reasonably believe
                may be fraudulent or unauthorized transactions;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                f. Engage in activity that may result in complaints, disputes,
                chargebacks, reversals, fees, fines, penalties or other
                liability or losses to you, us, Bank Partner, other Klippit
                users, or third parties;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                g. Impersonate any person or entity, or falsely state or
                otherwise misrepresent your affiliation with a person or entity;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                h. Solicit personal information from anyone under the age of 18;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                i. Harvest or collect email addresses or other contact
                information of other users from our Services by electronic or
                other means for the purposes of sending unsolicited emails or
                other unsolicited communications;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                j. Advertise or offer to sell or buy any goods or services for
                any business purpose that is not specifically authorized;
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                k. Further or promote any criminal activity or enterprise or
                provide instructional information about illegal activities; or
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                l. Obtain, or otherwise attempt to access or obtain, any
                materials or information through any means not intentionally
                made available or provided for through our Services.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                7. Territorial Restrictions.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Software available in connection with our Services and the
                transmission of applicable data, if any, is subject to United
                States export controls. No Software may be downloaded from our
                Services or otherwise exported or re-exported in violation of
                U.S. export laws. Downloading or using our Services is at your
                sole risk. Recognizing the global nature of the Internet, you
                agree to comply with all domestic and foreign laws regarding
                your use of our Services, including as it concerns online
                conduct and acceptable Content.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                8. Commercial Use Prohibited.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                All Services we offer are intended solely for your personal use.
                Unless otherwise expressly authorized in these Terms or in our
                Services, you agree not to use, display, distribute, license,
                perform, publish, reproduce, duplicate, copy, create derivative
                works from, modify, sell, resell, exploit, transfer, or upload
                for any commercial purposes our Services or any part of our
                Services, including use of or access to our Services, or those
                of third parties.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                9. Illegal Transactions and Internet Gambling
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You must not use our Services, including the Mobile Services,
                Services accessed through our Site, and your Klippit Account,
                for any illegal purpose or internet gambling. You must not use
                your Klippit Account to fund any account that is set up to
                facilitate internet gambling. We, Bank Partner or any service
                provider may deny transactions or authorizations from merchants
                that are apparently engaged in or are identified as engaged in
                the internet gambling business.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                10. Intellectual Property Rights
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                a.{" "}
                <span className={classes.spanTag}>
                  Services Content, Software, and Trademarks.
                </span>{" "}
                You acknowledge and agree that our Services may contain Content
                or features (“
                <span className={classes.spanTag}>Services Content</span>”) that
                are protected by copyright, patent, trademark, trade secret, or
                other proprietary rights and laws. Except as expressly
                authorized by us, you agree not to modify, copy, frame, scrape,
                rent, lease, loan, sell, distribute, or create derivative works
                based on our Services or the Services Content, in whole or in
                part, except that the foregoing does not apply to your own User
                Content (as defined below in Section 11(c)) that you legally
                Upload to our Services. In connection with your use of our
                Services you will not engage in or use any data mining, robots,
                scraping, or similar data gathering or extraction methods. If
                you are blocked by us from accessing our Services (including by
                blocking your IP address), you agree not to implement any
                measures to circumvent such blocking (e.g., by masking your IP
                address or using a proxy IP address). Any use of our Services or
                the Services Content other than as specifically authorized in
                these Terms is strictly prohibited. The technology and software
                underlying our Services or distributed in connection with our
                Services are the property of Klippit, our affiliates, and our
                partners (the “<span className={classes.spanTag}>Software</span>
                ”). You agree not to copy, modify, create a derivative work of,
                reverse engineer, reverse assemble or otherwise attempt to
                discover any source code, sell, assign, sublicense, or otherwise
                transfer any right in the Software. Any rights not expressly
                granted in these Terms are reserved by us.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                The Klippit name and logos are our trademarks and service marks
                (collectively the “
                <span className={classes.spanTag}>Klippit Trademarks</span>”).
                Other product and service names and logos used and displayed via
                our Services may be trademarks or service marks of their
                respective owners who may or may not endorse or be affiliated
                with or connected to us. Nothing in these Terms, any Additional
                Terms or our Services should be construed as granting, by
                implication, estoppel, or otherwise, any license or right to use
                any of the Klippit Trademarks displayed on our Services, without
                our prior written permission in each instance. All goodwill
                generated from the use of Klippit Trademarks will inure to our
                exclusive benefit.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                b.{" "}
                <span className={classes.spanTag}>Third Party Material.</span>{" "}
                Under no circumstances will we be liable in any way for any
                Content or materials of any third parties (including users),
                including for any errors or omissions in any Content, or for any
                loss or damage of any kind incurred as a result of the use of
                any Content. You acknowledge that we do not pre-screen Content,
                but that we and our designees will have the right (but not the
                obligation) in our and their sole discretion to refuse or remove
                any Content that is available via our Services. Without limiting
                the foregoing, we and our designees will have the right to
                remove any Content that violates these Terms or is deemed by us,
                in our sole discretion, to be otherwise objectionable. You agree
                that you must evaluate, and bear all risks associated with, the
                use of any Content, including any reliance on the accuracy,
                completeness, or usefulness of such Content.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                c.{" "}
                <span className={classes.spanTag}>
                  User Content Transmitted Through our Services.
                </span>{" "}
                With respect to the Content or other materials you Upload
                through our Services or share with other users or recipients
                (collectively, “
                <span className={classes.spanTag}>User Content</span>”), you
                represent and warrant that you own all right, title, and
                interest in and to such User Content, including all copyrights
                and rights of publicity. By Uploading any User Content you grant
                us and our affiliates a nonexclusive, worldwide, royalty free,
                fully paid up, transferable, sublicensable, perpetual, and
                irrevocable license to copy, display, upload, perform,
                distribute, store, modify, and otherwise use your User Content
                solely in connection with the operation of our Services in any
                form, medium, or technology now known or later developed. You
                acknowledge and agree that any questions, comments, suggestions,
                ideas, feedback, or other information about our Services,
                submitted by you to us are non-confidential, and we will be
                entitled to the unrestricted use and dissemination of these
                submissions for any purpose, commercial or otherwise, without
                acknowledgment or compensation to you. You understand that the
                technical processing and transmission of our Services, including
                your User Content, may involve transmissions over various
                networks and changes to conform and adapt to technical
                requirements of connecting networks or devices.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                11. Referral Program
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                1. <span className={classes.spanTag}>Referral Program.</span> We
                may offer users the opportunity to participate in a program that
                rewards users for referring their friends and family members to
                Klippit (“Referral Program”).
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                2. <span className={classes.spanTag}>Earning Rewards.</span>{" "}
                Eligible users will have the opportunity to receive a
                promotional reward each time you refer a friend to Klippit using
                a referral code issued to you by Klippit when you create an
                Online Account. In order to earn rewards, you must provide your
                unique referral code to your friend, your friend must enter your
                unique referral code when he or she signs up for an Online
                Account, and both you and the friend you referred must open, or
                become Authorized Users of, separate Klippit Accounts. When this
                occurs, Klippit will credit one U.S. Dollar ($1.00) to your
                Klippit Account and one U.S. Dollar ($1.00) to the Klippit
                Account of the friend you referred. You may only earn one U.S.
                Dollar ($1.00) per Klippit Account opened by a friend you
                referred, even if you referred two or more friends who each
                become owners or Authorized Users of the same Klippit Account.
                You may not earn rewards for referring an individual who becomes
                an Authorized User of your Klippit Account, or for referring an
                individual that opens a Klippit Account on which you are or
                become an Authorized User.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You may not earn any rewards if your Klippit Account is past
                due, canceled, has a returned payment outstanding, or is
                otherwise in default.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Rewards are issued solely for loyalty, awards, and promotional
                purposes. You may not use your rewards for a business or
                commercial purpose. Rewards have no cash value until and unless
                Klippit credits your Klippit Account, as described above.
                Rewards are not your property and you can’t transfer rewards to
                any other person. Rewards can’t be transferred by operation of
                law, such as by inheritance, bankruptcy, or in connection with a
                divorce. Rewards remain the property of Klippit until Klippit
                credits them to your Klippit Account. Klippit reserves the right
                to decline to credit your account for rewards earned at any time
                and for any reason, subject to applicable law.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                If we, in our sole discretion, determine that you have engaged
                in abuse, misuse, or fraud in connection with earning rewards or
                that you attempt to do so, we may take any action, including:
                (i) take away any rewards in your Klippit Account; (ii)
                temporarily suspend your ability to earn rewards or receive a
                credit to your Klippit Account for rewards previously earned;
                (iii) terminate your participation in the Rewards Program;
                and/or (v) cancel your Online Account and/or Klippit Account.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                3.{" "}
                <span className={classes.spanTag}>
                  Amendments, Restrictions, Termination.
                </span>{" "}
                We may add to, terminate, and/or change the Referral Program at
                any time with or without notice to you. For example, we could
                change the amount of rewards you can earn for referrals, impose
                caps and/or fees on earning and/or using rewards, place
                restrictions on or terminate your ability to earn or redeem
                rewards, terminate your membership in the Referral Program, or
                terminate all or parts of the Referral Program. You acknowledge
                that in the event we make these changes, you may no longer be
                able to earn rewards.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                If you or we close one or more of your Klippit Account(s) for
                any reason, we may immediately require you to forfeit all of
                your ability to earn rewards.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapperIndent}>
              <Typography variant={"body2"} className={classes.sectionText}>
                4. <span className={classes.spanTag}>Fees, Taxes.</span> There
                is no fee to participate in the Referral Program. It is your
                responsibility to find out if you are liable for any federal,
                state, or local taxes as a result of earning rewards.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                12. Third Party Websites
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Our Services may provide, or third parties may provide, links or
                other access to other sites and resources on the Internet. We
                have no control over such sites and resources, and we are not
                responsible for and do not endorse such sites and resources. You
                further acknowledge and agree that we will not be responsible or
                liable, directly or indirectly, for any damage or loss caused or
                alleged to be caused by or in connection with use of or reliance
                on any Content, events, goods, or services available on or
                through any such site or resource. Any dealings you have with
                third parties found while using our Services are between you and
                the third party, and you agree that we are not liable for any
                loss or claim that you may have against any such third party.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You may enable or log in to certain Services via various online
                third-party services, such as social media and social networking
                services like Facebook or Twitter (“Social Networking
                Services”). To take advantage of this feature and capabilities,
                we may ask you to authenticate, register for, or log into Social
                Networking Services on the websites of their respective
                providers. As part of such integration, the Social Networking
                Services will provide us with access to certain information that
                you have provided to such Social Networking Services, and we
                will use, store, and disclose such information in accordance
                with our Privacy Policy. For more information about the
                implications of activating these Social Networking Services and
                our use, storage, and disclosure of information related to you
                and your use of such Social Networking Services in connection
                with the Services (including your friend lists and the like),
                please see our Privacy Policy at
                join.klippitapp.com/privacyppolicy/. However, please remember
                that the manner in which Social Networking Services use, store,
                and disclose your information is governed solely by the policies
                of such third parties, and we have no liability or
                responsibility for the privacy practices or other actions of any
                third-party site or service that may be enabled within the
                Service. In addition, we are not responsible for the accuracy,
                availability, or reliability of any information, Content, goods,
                data, opinions, advice, or statements made available in
                connection with Social Networking Services. As such, we are not
                liable for any damage or loss caused or alleged to be caused by
                or in connection with use of or reliance on any such Social
                Networking Services. We enable these features merely as a
                convenience and the integration or inclusion of such features
                does not imply an endorsement or recommendation.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                13. Indemnity and Release
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You agree to release, indemnify, and hold us, our third party
                product providers, our and their affiliates, officers,
                employees, directors, and agents harmless from any and all
                losses, damages, fines, penalties, fees, costs and expenses,
                including reasonable attorneys’ fees, claims, actions of any
                kind, and injury (including death) arising out of or relating to
                your use of our Services, any Content, your connection to our
                Services, your violation of these Terms, or your violation of
                any rights of another. If you are a California resident, you
                waive California Civil Code Section 1542, which says: “A general
                release does not extend to claims which the creditor does not
                know or suspect to exist in his favor at the time of executing
                the release, which if known by him must have materially affected
                his settlement with the debtor.” If you are a resident of
                another jurisdiction, you waive any comparable statute or
                doctrine.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                14. Disclaimer of Warranties
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                YOUR USE OF OUR SERVICES IS AT YOUR SOLE RISK. OUR SERVICES ARE
                PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS. WE EXPRESSLY
                DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED,
                OR STATUTORY, INCLUDING THE IMPLIED WARRANTIES OF
                MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
                NON-INFRINGEMENT. WE MAKE NO WARRANTY THAT OUR SERVICES WILL
                MEET YOUR REQUIREMENTS, THAT OUR SERVICES WILL BE UNINTERRUPTED,
                TIMELY, SECURE, OR ERROR-FREE, THAT THE RESULTS THAT MAY BE
                OBTAINED FROM THE USE OF OUR SERVICES WILL BE ACCURATE OR
                RELIABLE, OR THAT THE QUALITY OF ANY PRODUCTS, SERVICES,
                INFORMATION, OR OTHER MATERIAL OBTAINED BY YOU THROUGH OUR
                SERVICES WILL MEET YOUR EXPECTATIONS.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                15. Limitation of Liability
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                YOU EXPRESSLY UNDERSTAND AND AGREE THAT KLIPPIT AND ANY THIRD
                PARTY PRODUCT PROVIDERS WILL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR
                DAMAGES FOR LOSS OF PROFITS, INCLUDING DAMAGES FOR LOSS OF
                GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES (EVEN IF KLIPPIT
                HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER
                BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR
                OTHERWISE, RESULTING FROM: (a) THE USE OR THE INABILITY TO USE
                OUR SERVICES; (b) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS
                AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION, OR
                SERVICES PURCHASED OR OBTAINED, OR MESSAGES RECEIVED OR
                TRANSACTIONS ENTERED INTO THROUGH OR FROM OUR SERVICES; (c)
                UNAUTHORIZED ACCESS TO, OR ALTERATION OF, YOUR TRANSMISSIONS OR
                DATA; (d) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON OUR
                SERVICES; OR (e) ANY OTHER MATTER RELATING TO OUR SERVICES. IN
                NO EVENT WILL KLIPPIT’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES,
                LOSSES, OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID
                KLIPPIT IN THE LAST SIX (6) MONTHS OR, IF GREATER, $100. SOME
                JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN WARRANTIES
                OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR
                CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE
                LIMITATIONS MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH
                ANY PORTION OF OUR SERVICES OR WITH THESE TERMS, YOUR SOLE AND
                EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF OUR SERVICES.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                16. Termination
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You agree that we, in our sole discretion, may suspend, restrict
                access to, or terminate your Online Account (or any or all of
                your Klippit Account(s)) or use of our Services and remove and
                discard any Content within our Services, for any reason,
                including for lack of use or if we believe that you have
                violated or acted inconsistently with the letter or spirit of
                these Terms. Any suspected fraudulent, abusive, or illegal
                activity that may be grounds for termination of your use of our
                Services may be referred to appropriate law enforcement
                authorities. You agree that any termination of your access to
                our Services under any provision of these Terms may be effected
                without prior notice, and acknowledge and agree that we may
                immediately deactivate or delete your Online Account and all
                related information and files in your Online Account and/or bar
                any further access to such files or our Services, subject to
                applicable law. Further, you agree that we will not be liable to
                you or any third party for any termination of your access to our
                Services.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                17. General
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                These Terms constitute the entire agreement between you and us
                and govern your use of our Services, superseding any prior
                agreements between you and us with respect to our Services. You
                also may be subject to additional terms and conditions that may
                apply when you use affiliate or third-party services,
                third-party Content, or third-party software. These Terms will
                be governed by the laws of the State of Georgia without regard
                to its conflict of law provisions. With respect to any disputes
                or claims not subject to arbitration, as set forth below, you
                and we agree to submit to the personal and Fulton County
                Georgia. Our failure to exercise or enforce any right or
                provision of these Terms will not constitute a waiver of such
                right or provision. If any provision of these Terms is found by
                a court of competent jurisdiction to be invalid, the parties
                nevertheless agree that the court should endeavor to give effect
                to the parties’ intentions as reflected in the provision, and
                the other provisions of these Terms remain in full force and
                effect. You agree that regardless of any statute or law to the
                contrary, any claim or cause of action arising out of or related
                to use of our Services or these Terms must be filed within one
                (1) year after such claim or cause of action arose or be forever
                barred. A printed version of these Terms and of any notice given
                in electronic form will be admissible in judicial or
                administrative proceedings based upon or relating to these Terms
                to the same extent and subject to the same conditions as other
                business documents and records originally generated and
                maintained in printed form. You may not assign these Terms
                without our prior written consent, but we may assign or transfer
                these Terms, in whole or in part, without restriction.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                18. Dispute Resolution by Binding Arbitration
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                <span className={classes.spanTag}>
                  PLEASE READ THIS SECTION CAREFULLY AS IT AFFECTS YOUR RIGHTS.
                </span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Agreement to Arbitrate</span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                This Dispute Resolution by Binding Arbitration Section is
                referred to in these Terms as the “
                <span className={classes.spanTag}>Arbitration Agreement.</span>”
                You agree that any and all disputes or claims that have arisen
                or may arise between you and Klippit, whether arising out of or
                relating to these Terms (including any alleged breach), our
                Services, any advertising, any aspect of the relationship, or
                transactions between us, will be resolved exclusively through
                final and binding arbitration, rather than a court, in
                accordance with the terms of this Arbitration Agreement, except
                that you may assert individual claims in small claims court, if
                your claims qualify. Further, this Arbitration Agreement does
                not preclude you from bringing issues to the attention of
                federal, state, or local agencies, and such agencies can, if the
                law allows, seek relief against us on your behalf. You agree
                that, by entering into these Terms, you and Klippit are each
                waiving the right to a trial by jury or to participate in a
                class action. Your rights will be determined by a neutral
                arbitrator, not by a judge or jury. The Federal Arbitration Act
                governs the interpretation and enforcement of this Arbitration
                Agreement.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  Prohibition of Class and Representative Actions and
                  Non-Individualized Relief
                </span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  YOU AND KLIPPIT AGREE THAT EACH OF US MAY BRING CLAIMS AGAINST
                  THE OTHER ONLY ON AN INDIVIDUAL BASIS AND NOT AS A PLAINTIFF
                  OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE
                  ACTION OR PROCEEDING. UNLESS BOTH YOU AND KLIPPIT AGREE
                  OTHERWISE, THE ARBITRATOR MAY NOT CONSOLIDATE OR JOIN MORE
                  THAN ONE PERSON’S OR PARTY’S CLAIMS AND MAY NOT OTHERWISE
                  PRESIDE OVER ANY FORM OF A CONSOLIDATED, REPRESENTATIVE, OR
                  CLASS PROCEEDING. ALSO, THE ARBITRATOR MAY AWARD RELIEF
                  (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ONLY
                  IN FAVOR OF THE INDIVIDUAL PARTY SEEKING RELIEF AND ONLY TO
                  THE EXTENT NECESSARY TO PROVIDE RELIEF NECESSITATED BY THAT
                  PARTY’S INDIVIDUAL CLAIMS.
                </span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  Pre-Arbitration Dispute Resolution
                </span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Klippit is always interested in resolving disputes amicably and
                efficiently, and most user concerns can be resolved quickly and
                to the user’s satisfaction by emailing customer support at
                support@klippitapp.com. If such efforts prove unsuccessful, a
                party who intends to seek arbitration must first send to the
                other, by certified mail, a written Notice of Dispute (“
                <span className={classes.spanTag}>Notice</span>”). The Notice to
                Klippit should be sent to 1065 Liberty Parkway NW, Atlanta GA,
                303018. (“
                <span className={classes.spanTag}>Notice Address</span>”). The
                Notice must (i) describe the nature and basis of the claim or
                dispute and (ii) set forth the specific relief sought. If
                Klippit and you do not resolve the claim within sixty (60)
                calendar days after the Notice is received, you or Klippit may
                commence an arbitration proceeding. During the arbitration, the
                amount of any settlement offer made by Klippit or you shall not
                be disclosed to the arbitrator until after the arbitrator
                determines the amount, if any, to which you are or Klippit is
                entitled.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Arbitration Procedures</span>
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Arbitration will be conducted by a neutral arbitrator in
                accordance with the American Arbitration Association’s (“
                <span className={classes.spanTag}>AAA</span>”) rules and
                procedures, including the AAA’s Consumer Arbitration Rules
                (collectively, the “
                <span className={classes.spanTag}>AAA Rules</span>”), as
                modified by this Arbitration Agreement. For information on the
                AAA, please visit its website, http://www.adr.org. Information
                about the AAA Rules and fees for consumer disputes can be found
                at the AAA’s consumer arbitration page,
                http://www.adr.org/consumer. If there is any inconsistency
                between any term of the AAA Rules and any term of this
                Arbitration Agreement, the terms of this Arbitration Agreement
                will control unless the arbitrator determines that the
                application of the inconsistent Arbitration Agreement terms
                would not result in a fundamentally fair arbitration. The
                arbitrator must also follow the provisions of these Terms as a
                court would. All issues are for the arbitrator to decide,
                including issues relating to the scope, enforceability, and
                arbitrability of this Arbitration Agreement. Although
                arbitration proceedings are usually simpler and more streamlined
                than trials and other judicial proceedings, the arbitrator can
                award the same damages and relief on an individual basis that a
                court can award to an individual under these Terms and
                applicable law. Decisions by the arbitrator are enforceable in
                court and may be overturned by a court only for very limited
                reasons.
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Unless Klippit and you agree otherwise, any arbitration hearings
                will take place in a reasonably convenient location for both
                parties with due consideration of each’s ability to travel and
                other pertinent circumstances. If the parties are unable to
                agree on a location, the determination will be made by AAA. If
                your claim is for $10,000 or less, Klippit agrees that you may
                choose whether the arbitration will be conducted solely on the
                basis of documents submitted to the arbitrator, through a
                telephonic hearing, or by an in-person hearing as established by
                the AAA Rules. If your claim exceeds $10,000, the right to a
                hearing will be determined by the AAA Rules. Regardless of the
                manner in which the arbitration is conducted, the arbitrator
                will issue a reasoned written decision sufficient to explain the
                essential findings and conclusions on which the award is based.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Costs of Arbitration</span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Payment of all filing, administration, and arbitrator fees
                (collectively, the “Arbitration Fees”) will be governed by the
                AAA Rules, unless otherwise provided in this Arbitration
                Agreement. If the value of the relief sought is $75,000 or less,
                at your request, Klippit will pay all Arbitration Fees. If the
                value of relief sought is more than $75,000 and you are able to
                demonstrate to the arbitrator that you are economically unable
                to pay your portion of the Arbitration Fees or if the arbitrator
                otherwise determines for any reason that you should not be
                required to pay your portion of the Arbitration Fees, Klippit
                will pay your portion of such fees. In addition, if you
                demonstrate to the arbitrator that the costs of arbitration will
                be prohibitive as compared to the costs of litigation, Klippit
                will pay as much of the Arbitration Fees as the arbitrator deems
                necessary to prevent the arbitration from being
                cost-prohibitive. Any payment of attorneys’ fees will be
                governed by the AAA Rules.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Confidentiality</span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                All aspects of the arbitration proceeding, and any ruling,
                decision, or award by the arbitrator will be strictly
                confidential for the benefit of all parties.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>Severability</span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                If a court or the arbitrator decides that any term or provision
                of this Arbitration Agreement (other than the Subsection titled
                “Prohibition of Class and Representative Actions and
                Non-Individualized Relief” above) is invalid or unenforceable,
                the parties agree to replace such term or provision with a term
                or provision that is valid and enforceable and that comes
                closest to expressing the intention of the invalid or
                unenforceable term or provision, and this Arbitration Agreement
                will be enforceable as so modified. If a court or the arbitrator
                decides that any of the provisions of Subsection above titled
                “Prohibition of Class and Representative Actions and
                Non-Individualized Relief” are invalid or unenforceable, then
                the entirety of this Arbitration Agreement will be null and
                void, unless such provisions are deemed to be invalid or
                unenforceable solely with respect to claims for public
                injunctive relief. The remainder of these Terms will continue to
                apply.
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                <span className={classes.spanTag}>
                  Future Changes to Arbitration Agreement
                </span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                Notwithstanding any provision in these Terms to the contrary,
                Klippit agrees that if it makes any future change to this
                Arbitration Agreement (other than a change to the Notice
                Address) while you are a user of our Services, you may reject
                any such change by sending Klippit written notice within thirty
                (30) calendar days of the change to the Notice Address provided
                above. By rejecting any future change, you are agreeing that you
                will arbitrate any dispute between us in accordance with the
                language of this Arbitration Agreement as of the date you first
                accepted these Terms (or accepted any subsequent changes to
                these Terms).
              </Typography>
            </Grid>

            <Grid item className={classes.textWrapper}>
              <Typography
                variant={"body2"}
                className={classes.sectionTextHeader}
              >
                <span className={classes.spanTag}>19. Contact us</span>
              </Typography>
            </Grid>
            <Grid item className={classes.textWrapper}>
              <Typography variant={"body2"} className={classes.sectionText}>
                You may contact us by email at support@klippitapp.com or by mail
                at Klippit ltd Company, 1065 Liberty Parkway Nw, Atlanta GA.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default connect(mapStateToProps)(Index);
