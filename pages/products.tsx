import React, { useState } from "react";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faSquareTwitter,
  faLinkedin,
  faSquareInstagram,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import { sanityClient, urlFor } from "../sanity";
import { Product } from "../typings";

interface Props {
  products: [Product];
}

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

// Image Component auto height and 100% width
const css = { maxWidth: "100%", height: "auto" };

export default function Products({ products }: Props) {
  //Search Function
  const [searchTerm, setSearchTerm] = useState("");

  const meta = {
    title: "Products of Allied Gulf Construction Services",
    description:
      "We offer a wide range of products and provide complete client satisfaction and fulfils you with best quality products. Take a look.",
    keywords:
      "allied, gulf, agcs, construction, service, materials, movement joints, expansion joints, interior, tile, trims, carpet, manhole, cover, house, steel",
    url: "https://www.alliedgulf.me/products",
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
          <div className="p-4 md:py-12 md:px-20 bg-sky-400">
            <div className="grid md:grid-cols-12 items-center">
              <div className="col-span-8 mx-auto">
                <motion.h1
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="font-light text-2xl md:leading-10 text-neutral-800"
                >
                  Get the best products at <br />{" "}
                  <span className="font-medium text-2xl md:text-4xl ">
                    Allied Gulf Construction Services
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
                      label="Search products"
                      placeholder="Search Products"
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
                        <div className="relative">
                          <div className="absolute mt-1 w-full">
                            <p className="text-[10px] bg-neutral-200 text-neutral-500 min-w-full px-3 py-1 rounded-md rounded-b-none border border-b-0 border-neutral-300">
                              Search Results...
                            </p>
                          </div>
                          <div className="mt-6 absolute min-h-fit max-h-64 overflow-hidden overflow-y-auto bg-neutral-100 w-full pb-2 rounded-md rounded-t-none border-neutral-300 border border-t-0">
                            {products
                              .filter((val) => {
                                if (searchTerm == "") {
                                  return val;
                                } else if (
                                  val.title
                                    .toLowerCase()
                                    .includes(searchTerm.toLowerCase())
                                ) {
                                  return products;
                                }
                              })
                              .map((products) => {
                                return (
                                  <div key={products._id}>
                                    <Link
                                      href={`/products/${products.slug.current}`}
                                      aria-label={products.metaTagTitle}
                                    >
                                      <a aria-label={products.title}>
                                        <div className="py-3 px-3 hover:bg-white transition duration-200 flex gap-2 items-center">
                                          <div className="">
                                            <Image
                                              src={
                                                urlFor(products.image).url()!
                                              }
                                              width={32}
                                              height={32}
                                              alt={products.title}
                                            />
                                          </div>
                                          <h5>{products.title}</h5>
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
                  src="/products-img.jpg"
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
                  <Link
                    href="https://www.linkedin.com/in/allied-gulf-construction-services-a4477324a/"
                    passHref
                  >
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
                  <Link href="https://www.facebook.com/agcs.bahrain/" passHref>
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
                  <Link
                    href="https://www.instagram.com/agcs.bahrain/?hl=en"
                    passHref
                  >
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
                  <Link href="https://twitter.com/agcsbahrain" passHref>
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
                  <Link
                    href="https://www.youtube.com/channel/UCkb5kHLLC_Ntqt8p7ZIKliA"
                    passHref
                  >
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

          <div className="container mx-auto p-4 md:py-12 md:px-24">
            <div className="py-3 md:py-6">
              <p className="font-thin text-xl">
                Looking for Specialty Materials?
              </p>
              <h2 className="font-light text-4xl ">
                Our <span className="font-medium text-sky-700">Products</span>
              </h2>
            </div>
            <motion.div
              variants={stagger1}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-3 md:gap-6"
            >
              {products.map((products) => (
                <Link
                  key={products._id}
                  href={`/products/${products.slug.current}`}
                  passHref
                  aria-label={products.metaTagTitle}
                >
                  <a aria-label={products.metaTagTitle}>
                    <motion.div
                      variants={fadeInUp}
                      whileHover={{ scale: 1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="hover:scale-105 grid gap-3 cursor-pointer p-4 bg-white hover:shadow-2xl hover:shadow-slate-300 transition-all">
                        <motion.div
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.3 }}
                          className="h-full"
                        >
                          {products.image && (
                            <Image
                              className="rounded-md w-full  transition ease-in-out duration-500 "
                              src={urlFor(products.image).url()!}
                              alt={products.title}
                              width={220}
                              height={220}
                            />
                          )}
                        </motion.div>

                        <div className="">
                          <h5 className="text-lg md:text-xl font-medium text-sky-800 hover:text-sky-600">
                            {products.title}
                          </h5>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <FloatingWhatsApp
            phoneNumber="919025625794"
            accountName="Allied Gulf Constructions"
            allowEsc
            allowClickAway
            notification
            notificationSound
            notificationDelay={2}
            buttonStyle={{ backgroundColor: "#1A6EA6" }}
            avatar="/apple-touch-icon.png"
          />
        </motion.div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "products"] | order(_createdAt asc) {
    _id,
    title,
    image,
    description,
    slug,
    metaTagTitle
    }`;

  const products = await sanityClient.fetch(query);

  return {
    props: { products },
  };
};
