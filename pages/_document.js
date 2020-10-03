import Document, { Head, Main, NextScript } from "next/document";

class NextHackerNewsClone extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="description"
            content="Hacker News Clone made using Next JS"
          />
          <meta charSet="utf-8" />

          <link rel="manifest" href="/static/manifest.json" />

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="N.J.H.N.C" />
          <meta name="apple-mobile-web-app-title" content="N.J.H.N.C" />
          <meta name="theme-color" content="#8a2846" />
          <meta name="msapplication-navbutton-color" content="#8a2846" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="512x512"
            href="/static/icons/icon-512x512.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/static/icons/icon-128x128.png"
          />
          <link
            rel="apple-touch-icon"
            type="image/png"
            sizes="128x128"
            href="/static/icons/icon-128x128.png"
          ></link>

          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;700;900&family=Work+Sans:wght@300;500;700&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>
          {`
            :root {
              --color-primary: #8a2846;
              --color-primary-light: #ff9ebb;
              --color-primary-dark: #602437;
              --color-primary-darker: #522e38;
              --color-white: #fff;
              --color-gray: #777;
              --color-black: #000;
              --font-primary: "Work Sans", sans-serif;
              --font-secondary: "Montserrat", sans-serif;
            }

            *,
            *::before,
            *::after {
              margin: 0;
              padding: 0;
              box-sizing: inherit;
            }

            html {
              font-size: 62.5%;
              font-family: var(--font-primary);
              box-sizing: border-box;
            }

            @media screen and (max-width: 25em) {
              html {
                font-size: 50%;
              }
            }
          `}
        </style>
      </html>
    );
  }
}

export default NextHackerNewsClone;
