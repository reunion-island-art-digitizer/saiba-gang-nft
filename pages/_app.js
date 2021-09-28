import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ParallaxProvider } from "react-scroll-parallax";
import siteConfig from "configs/site-config";
import "../styles/globals.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import FontFace from "components/FontFace";

function MyApp({ Component, pageProps }) {
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
      <ParallaxProvider>
        <div className="app-wrapper">
          <div className="body">
            <Header />
            <main>
              <Component {...pageProps} />
            </main>
          </div>
          <Footer />
        </div>
      </ParallaxProvider>
      <FontFace />
    </>
  );
}

export default MyApp;
