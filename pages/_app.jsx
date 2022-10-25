import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

import Layout from "../components/Layout";

import "../styles/globals.css";
import "swiper/css/bundle";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <NextNProgress
          color="linear-gradient(90deg, #00b4d8 0%, #219ebc 100%);"
          startPosition={0.2}
          stopDelayMs={100}
          height={3}
          options={{ easing: "ease-in-out", speed: 200 }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </Layout>
    </>
  );
}

export default MyApp;
