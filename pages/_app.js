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
        </Head>
        <Store>
          <Component {...pageProps} />
        </Store>
      </div>
    );
  }
}

export default HackerNewsClone;
