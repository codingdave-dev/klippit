import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme";

import { Provider } from "react-redux";
import { useStore } from "../src/store/store";
import Footer from "../src/ui/Footer";

// FONTS
import '../public/assets/fonts/whitney/style.css'
import '../public/assets/fonts/grotesque/style.css'
import '../public/assets/fonts/helvetica/style.css'
import '../public/assets/fonts/arial/style.css'
import '../public/assets/fonts/droid/style.css'

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const store = useStore(pageProps.initialReduxState);



  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }


  }, []);


  return (
      <Fragment>
        <Head>
          <title>Klippit App</title>
          <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <ThemeProvider theme={theme}>
          <Provider store={store}>



              <Component {...pageProps} />

              <Footer/>



          </Provider>

        </ThemeProvider>
      </Fragment>
  );
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;