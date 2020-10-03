import React, { Component } from "react";
import App from "next/app";
import Head from "next/head";
import Store from "../context/store";

class HackerNewsClone extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <Store>
          <Component {...pageProps} />
        </Store>
      </div>
    );
  }
}

export default HackerNewsClone;
