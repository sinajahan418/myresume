import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* لینک به manifest.json */}
          <link rel="manifest" href="/manifest.json" />
          {/* ios supourted */}
          <link rel="appe-touch-icon" href="/assets/images/apple.svg" />
          <meta name="apple-mobile-web-app-status-bar" content="#000000" />
          <meta name="them-color" content="#000000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
