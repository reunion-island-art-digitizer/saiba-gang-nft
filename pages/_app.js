import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import siteConfig from "configs/site-config";
import "../styles/globals.scss";
import FontFace from "components/FontFace";
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <script
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
      </Head>
      <DefaultSeo {...seo} />
      <ParallaxProvider>
        <Component {...pageProps} />
      </ParallaxProvider>
      <FontFace />
    </>
  );
};

export default App;
