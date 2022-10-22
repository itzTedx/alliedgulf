import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import { sanityClient, urlFor } from "../sanity";
import { Product } from "../typings";

interface Props {
  products: [Product];
}

export default function Products({ products }: Props) {
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

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto  p-4 md:py-12 md:px-24"
      >
        <div className="md:py-6">
          <p className="font-thin text-xl">Looking for Specialty Materials?</p>
          <h2 className="font-light text-4xl hidden md:inline-block">
            Our <span className="font-medium text-sky-700">Products</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-flow-row gap-6">
          {products.map((products) => (
            <Link
              key={products._id}
              href={`/products/${products.slug.current}`}
              passHref
            >
              <div className="group grid gap-3 cursor-pointer p-4 rounded-md bg-white">
                <div className="h-full">
                  {products.image && (
                    <Image
                      className="rounded-md w-full group-hover:scale-105 transition ease-in-out duration-500 "
                      src={urlFor(products.image).url()!}
                      alt={products.title}
                      width={220}
                      height={220}
                    />
                  )}
                </div>

                <div className="">
                  <h5 className="text-lg md:text-xl font-medium text-sky-800 hover:text-sky-600">
                    {products.title}
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "products"] | order(_createdAt asc) {
    _id,
    title,
    image,
    description,
    slug
    }`;

  const products = await sanityClient.fetch(query);

  return {
    props: { products },
  };
};
