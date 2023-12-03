import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";
import { useEffect, useState, useContext } from "react";
import Layout from "../components/layout";
import { LanguageProvider } from "../config/LanguageChange/LanguageContext";
import "../styles/globals.scss";
import store from "./store";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <LanguageProvider>
          <Head>
            <title>Reward Loyalty</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="favicon.png" />
          </Head>
          <Component {...pageProps} />
        </LanguageProvider>
      </Provider>
    );
  }

  return (
    <Provider store={store}>
      <LanguageProvider>
        <Head>
          <title>Reward Loyalty</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="favicon.png" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </Provider>
  );
}
