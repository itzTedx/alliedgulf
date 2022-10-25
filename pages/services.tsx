import React, { useState } from "react";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import ServiceHeader from "../components/ServiceHeader";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

import { sanityClient, urlFor } from "../sanity";
import { Service } from "../typings";
import Brochure from "../components/Brochure";

interface Props {
  services: [Service];
}

//Motion Framer
const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: { y: 60, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: easing } },
};

const fadeInUpScale = {
  initial: { scale: 0, y: 60, opacity: 0 },
  animate: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};

const stagger1 = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const stagger2 = {
  animate: {
    transition: {
      staggerChildren: 0.2,
      delay: 0.5,
    },
  },
};

export default function Services({ services }: Props) {
  //Search Function
  const [searchTerm, setSearchTerm] = useState("");
  const meta = {
    title: "Services we providing in Bahrain",
    description:
      "Agcs providing various services for your projects such as Building Construction, Interior Decorations, Portable & Modular Cabins, Structural Fabrications.",
    keywords:
      "allied gulf, agcs, construction, service, materials, movement joints, expansion joints, interior",
    url: "https://www.alliedgulf.me/services",
    image: "https://alliedgulf.vercel.app/og-img.jpg",
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="canonical" href={meta.url} />

        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <meta property="og:url" content={meta.url} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.description} />
      </Head>
      <div className="overflow-hidden">
        <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
          <div className="p-4 md:py-12 md:px-20 services-header bg-sky-500 z-50">
            <div className="grid md:grid-cols-12 items-center">
              <div className="col-span-8 mx-auto">
                <motion.h1
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-light text-2xl md:leading-10 text-neutral-800"
                >
                  List of services <br />{" "}
                  <span className="font-medium text-2xl md:text-4xl ">
                    We provide in Kingdom of Bahrain
                  </span>
                </motion.h1>
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <form
                    action=""
                    className="mt-3 items-center bg-sky-100 rounded-md "
                    autoComplete="off"
                  >
                    <TextField
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                      label="Search services"
                      type="text"
                      name="search"
                      variant="outlined"
                      size="small"
                      fullWidth
                      className=""
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <div className="h-4 w-4  ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                              >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                              </svg>
                            </div>
                          </InputAdornment>
                        ),
                      }}
                    />
                    {searchTerm.length == 0 ? (
                      ""
                    ) : (
                      <div className="border-neutral-400 ">
                        <div className="relative z-[1000]">
                          <div className="absolute mt-1 w-full">
                            <p className="text-[10px] bg-neutral-200 text-neutral-500 min-w-full px-3 py-1 rounded-md rounded-b-none border border-b-0 border-neutral-300">
                              Search Results...
                            </p>
                          </div>
                          <div className="mt-6 absolute min-h-fit max-h-64 overflow-hidden overflow-y-auto bg-neutral-100 w-full pb-2 rounded-md rounded-t-none border-neutral-300 border border-t-0">
                            {services
                              .filter((val) => {
                                if (searchTerm == "") {
                                  return val;
                                } else if (
                                  val.servicesTitle
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return services;
                                }
                              })
                              .map((products) => {
                                return (
                                  <div key={products._id}>
                                    <Link
                                      href={`/products/${products.servicesSlug.current}`}
                                      aria-label={products.metaTagTitle}
                                    >
                                      <a aria-label={products.servicesTitle}>
                                        <div className="py-3 px-3 hover:bg-white transition duration-200 flex gap-2 items-center">
                                          <div className="">
                                            <Image
                                              src={
                                                urlFor(
                                                  products.servicesImage
                                                ).url()!
                                              }
                                              width={32}
                                              height={32}
                                              alt={products.servicesTitle}
                                            />
                                          </div>
                                          <h5>{products.servicesTitle}</h5>
                                        </div>
                                      </a>
                                    </Link>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      </div>
                    )}
                  </form>
                </motion.div>
              </div>
              <motion.div
                variants={fadeInUpScale}
                className="col-span-3 hidden md:block"
              >
                <Image
                  src="/service-img.jpg"
                  width={634}
                  height={400}
                  alt="Interior Works done by Allied Gulf"
                  className="rounded-md"
                />
              </motion.div>
              <div className="px-6 mr-auto hidden md:block">
                <motion.div
                  variants={stagger2}
                  className="flex flex-col gap-2 justify-center text-2xl text-sky-200 "
                >
                  <Link href="/linkedin" passHref>
                    <motion.a
                      variants={fadeInUpScale}
                      target="_blank"
                      aria-label="Follow"
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-neutral-600 transition-all duration-300"
                        icon={faLinkedin}
                        height={18}
                      />
                    </motion.a>
                  </Link>
                  <Link href="/facebook" passHref>
                    <motion.a
                      variants={fadeInUpScale}
                      target="_blank"
                      aria-label="Follow"
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-neutral-600 transition-all duration-300"
                        icon={faSquareFacebook}
                        height={18}
                      />
                    </motion.a>
                  </Link>
                  <Link href="/instagram" passHref>
                    <motion.a
                      variants={fadeInUpScale}
                      target="_blank"
                      aria-label="Follow"
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-neutral-600 transition-all duration-300"
                        icon={faSquareInstagram}
                        height={18}
                      />
                    </motion.a>
                  </Link>
                  <Link href="/twitter" passHref>
                    <motion.a
                      variants={fadeInUpScale}
                      target="_blank"
                      aria-label="Follow"
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-neutral-600 transition-all duration-300"
                        icon={faSquareTwitter}
                        height={18}
                      />
                    </motion.a>
                  </Link>
                  <Link href="/youtube" passHref>
                    <motion.a
                      variants={fadeInUpScale}
                      target="_blank"
                      aria-label="Follow"
                    >
                      <FontAwesomeIcon
                        className="cursor-pointer hover:text-neutral-600 transition-all duration-300"
                        icon={faSquareYoutube}
                        height={18}
                      />
                    </motion.a>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="container mx-auto py-6 md:py-12 z-10 md:px-24">
            <div className="pt-3 md:pt-8 px-3 md:px-8">
              <p className="font-thin text-xl">
                Looking for Specialty Materials?
              </p>
              <h2 className="font-light text-4xl ">
                Our <span className="font-medium text-sky-700">Services</span>
              </h2>
            </div>
            <motion.div
              variants={stagger1}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-7 px-3 md:px-8 pt-6"
            >
              {services.map((services) => (
                <Link
                  key={services._id}
                  href={`/services/${services.servicesSlug.current}`}
                  passHref
                >
                  <a className="cursor-pointer group">
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="card relative group overflow-hidden  object-cover">
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {services.servicesImage && (
                            <Image
                              className="h-56 w-full group-hover:scale-105 transition ease-in-out duration-500 object-cover"
                              src={urlFor(services.servicesImage).url()!}
                              alt={services.servicesTitle}
                              width={400}
                              height={302}
                            />
                          )}
                        </motion.div>
                        <div className="absolute top-0 right-0 bottom-0 left-0 p-4 flex items-end">
                          <h2 className="bg-neutral-800 text-gray-200 py-2 px-3 text-sm group-hover:text-sky-400 transition duration-500">
                            {services.servicesTitle}
                          </h2>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </Link>
              ))}
            </motion.div>
          </div>
          <Brochure />
        </motion.div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "services"] | order(_createdAt asc) {
    _id,
    servicesImage,
    servicesTitle,
    servicesSlug,
  }`;

  const services = await sanityClient.fetch(query);

  return {
    props: {
      services,
    },
  };
};
