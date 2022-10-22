import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

import "../styles/globals.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#2f2f2f" />
        <meta name="msapplication-TileColor" content="#2f2f2f" />
        <meta name="theme-color" content="#1a6ea6" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@agcsbahrain" />
        <meta name="twitter:creator" content="@agcsbahrain" />

        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:site_name" content="AlliedGulf.me" />
        <meta property="og:type" content="website" />
      </Head>

      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
