import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import siteConfig from "configs/site-config";
import "../styles/globals.scss";
import FontFace from "components/FontFace";
import Script from "next/script";
import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }) => {
  const { seo } = siteConfig;
  return (
    <>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </Head>
      <DefaultSeo {...seo} />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <FontFace />
    </>
  );
};

export default App;
