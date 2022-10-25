import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Banner from "../../components/Banner";
import Link from "next/link";
import BrochureVertical from "../../components/BrochureVertical";

import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Service } from "../../typings";
import { motion } from "framer-motion";
import Services from "../services";

interface Props {
  service: Service;
}

//Animations
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: easing },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delay: 0.5,
    },
  },
};

function Service({ service }: Props) {
  return (
    <>
      <Head>
        <title>{service.metaTagTitle}</title>
        <meta name="description" content={service.servicesDescription} />
        <link
          rel="canonical"
          href={`https://www.alliedgulf.me/products/${service.servicesSlug.current}`}
        />
        <meta name="keywords" content={service.metaTagKeyword} />

        <meta name="twitter:title" content={service.metaTagTitle} />
        <meta
          name="twitter:description"
          content={service.servicesDescription}
        />
        <meta
          name="twitter:image"
          content={urlFor(service.servicesImage).url()!}
        />

        <meta
          property="og:url"
          content={`https://www.alliedgulf.me/services/${service.servicesSlug.current}`}
        />
        <meta property="og:title" content={service.metaTagTitle} />
        <meta property="og:description" content={service.servicesDescription} />
        <meta
          property="og:image"
          content={urlFor(service.servicesImage).url()!}
        />
      </Head>
      <motion.main initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <div className="md:h-[95vh] w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row  md:items-center md:justify-items-center md:justify-center">
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {service.servicesImage && (
                <Image
                  src={urlFor(service.servicesImage).url()!}
                  alt={service.servicesTitle}
                  width={400}
                  height={462}
                  priority
                  className="scale-100 w-full rounded-lg hidden md:block"
                />
              )}
            </motion.div>

            <motion.div
              variants={stagger}
              className="md:h-[95vh] w-full bg-white flex items-center justify-center px-3 md:px-0"
            >
              <div className="space-y-2 py-6 md:py-0">
                <motion.div variants={fadeInUp} className="mb-6">
                  <Link href="/services" passHref>
                    <a
                      className="text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 text-neutral-500 cursor-pointer py-1"
                      aria-label="Get back to services list"
                    >
                      <div className="h-4 w-4 fill-neutral-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M360 224L272 224v-56c0-9.531-5.656-18.16-14.38-22C248.9 142.2 238.7 143.9 231.7 150.4l-96 88.75C130.8 243.7 128 250.1 128 256.8c.3125 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288C373.3 288 384 277.3 384 264v-16C384 234.8 373.3 224 360 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
                        </svg>
                      </div>
                      Back to services
                    </a>
                  </Link>
                </motion.div>
                <div className="pb-4">
                  {service.servicesImage && (
                    <Image
                      src={urlFor(service.servicesImage).url()!}
                      alt={service.servicesTitle}
                      width={200}
                      height={262}
                      priority
                      className="w-full rounded-lg border border-white md:hidden"
                    />
                  )}
                </div>
                <h1 className="px-3 py-1 text-[9px] md:text-xs bg-sky-200 w-fit rounded-md">
                  {service.metaTagTitle}
                </h1>
                <motion.h2
                  variants={fadeInUp}
                  className="text-2xl md:text-5xl font-bold text-sky-900"
                >
                  {service.servicesTitle}
                </motion.h2>
                <div className="max-w-lg text-justify">
                  <motion.p variants={fadeInUp} className="mb-12">
                    {service.servicesDescription}
                  </motion.p>
                  <div className="flex items-center flex-col md:flex-row gap-1 md:gap-3">
                    <motion.div variants={fadeInUp}>
                      <Link href="/contact">
                        <a
                          className="py-2 px-5 rounded-lg text-sm md:text-base bg-sky-500 hover:bg-neutral-700 transition text-white uppercase font-medium"
                          aria-label="Enquire or Book products"
                        >
                          Enquire Now
                        </a>
                      </Link>
                    </motion.div>
                    <motion.h6
                      variants={fadeInUp}
                      className="font-light text-sm pt-3 md:pt-0"
                    >
                      or
                    </motion.h6>
                    <motion.div variants={fadeInUp}>
                      <Link
                        href="/Company-profile-agcs.pdf"
                        rel="noopener noreferrer"
                      >
                        <a
                          target="_blank"
                          className=" text-sky-600 hover:text-sky-500 font-light"
                          aria-label="Download our brochure"
                        >
                          Download our brochure
                        </a>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.main>
    </>
  );
}

export default Service;

export const getStaticPaths = async () => {
  const query = `*[_type == "services"] {
    _id,
    servicesSlug {
      current
    }
  }`;

  const services = await sanityClient.fetch(query);

  const paths = services.map((service: Service) => ({
    params: {
      servicesSlug: service.servicesSlug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "services" && servicesSlug.current == $servicesSlug][0] {
    _id,
    servicesTitle,
    servicesDescription,
    servicesImage,
    servicesSlug,
    metaTagTitle,
    metaTagKeyword
     
    }`;

  const service = await sanityClient.fetch(query, {
    servicesSlug: params?.servicesSlug,
  });

  if (!service) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      service,
    },
    revalidate: 60,
  };
};
