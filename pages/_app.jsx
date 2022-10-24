import Head from "next/head";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

import "../styles/globals.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
