import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Link from "next/link";

import BrochureVertical from "../../components/BrochureVertical";
import Header from "../../components/ProductHeader";

import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Product } from "../../typings";
import { motion } from "framer-motion";

interface Props {
  product: Product;
  productsList: [Product];
}

function Product({ product, productsList }: Props) {
  return (
    <>
      <Head>
        <title>{product.metaTagTitle}</title>
        <meta name="description" content={product.description} />
        <link
          rel="canonical"
          href={`https://www.alliedgulf.me/products/${product.slug.current}`}
        />

        <meta name="twitter:title" content={product.metaTagTitle} />
        <meta name="twitter:description" content={product.description} />
        <meta name="twitter:image" content={urlFor(product.image).url()!} />

        <meta
          property="og:url"
          content={`https://www.alliedgulf.me/products/${product.slug.current}`}
        />
        <meta property="og:title" content={product.metaTagTitle} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={urlFor(product.image).url()!} />
      </Head>
      <div className="overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <main className="">
            <div className="md:h-[95vh] w-full grid grid-cols-1 md:grid-cols-2 grid-flow-row  md:items-center md:justify-items-center md:justify-center">
              {product.image && (
                <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: [10, 0, 0] }}
                  exit={{ x: 0 }}
                >
                  <Image
                    src={urlFor(product.image).url()!}
                    alt={product.title}
                    width={200}
                    height={262}
                    priority
                    className="w-6/12 rounded-lg hidden md:block"
                  />
                </motion.div>
              )}

              <div className="md:h-[95vh] w-full bg-white flex items-center justify-center px-3 md:px-0">
                <div className="space-y-3 py-12 md:py-0">
                  <Link href="/products-test">
                    <a className="text-sm flex items-center gap-2 hover:gap-3 transition-all duration-300 text-neutral-500 hov">
                      <div className="h-4 w-4 fill-neutral-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path d="M360 224L272 224v-56c0-9.531-5.656-18.16-14.38-22C248.9 142.2 238.7 143.9 231.7 150.4l-96 88.75C130.8 243.7 128 250.1 128 256.8c.3125 7.781 2.875 13.25 7.844 17.75l96 87.25c7.031 6.406 17.19 8.031 25.88 4.188s14.28-12.44 14.28-21.94l-.002-56L360 288C373.3 288 384 277.3 384 264v-16C384 234.8 373.3 224 360 224zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z" />
                        </svg>
                      </div>
                      Back to products
                    </a>
                  </Link>
                  {product.image && (
                    <Image
                      src={urlFor(product.image).url()!}
                      alt={product.title}
                      width={200}
                      height={262}
                      priority
                      className="w-6/12 rounded-lg border border-white md:hidden"
                    />
                  )}
                  <h1 className="text-2xl md:text-3xl font-bold text-sky-900 pt-8">
                    {product.title}
                  </h1>
                  <div className="max-w-lg text-justify">
                    <p className="mb-12">{product.description}</p>
                    <div className="flex items-center flex-col md:flex-row gap-1 md:gap-3">
                      <Link
                        href={`mailto:info@alliedgulf.me?subject=${product.title}%20-%20Order%20&body=Hi sir, I'm interested in this product can we discuss more about it%0D%0A%0D%0AName: [Your name here]%0D%0AContact: [Your contact details]%0D%0A%0D%0AProduct: ${product.title}%0D%0AQuantity:%0D%0AProject Details:%0D%0A`}
                      >
                        <a className="py-2 px-5 rounded-lg text-sm md:text-base bg-sky-500 hover:bg-neutral-700 transition text-white">
                          Order Now
                        </a>
                      </Link>
                      <h6 className="font-light text-sm">or</h6>
                      <div className="">
                        <Link
                          href="/Company-profile-agcs.pdf"
                          rel="noopener noreferrer"
                        >
                          <a
                            target="_blank"
                            className=" text-sky-600 hover:text-sky-500 font-light"
                          >
                            Download our brochure
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </>
  );
}

export default Product;

export const getStaticPaths = async () => {
  const query = `*[_type == "products"] {
    _id,
    slug {
      current
    }
  }`;

  const products = await sanityClient.fetch(query);

  const paths = products.map((product: Product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "products" && slug.current == $slug][0] {
    _id,
    title,
    description,
    image,
    slug,
    metaTagTitle,
    metaTagKeywords
     
    }`;

  const productsQuery = `*[_type == "products"][0..5] | order(_createdAt desc) {
      _id,
      title,
      image,
      description,
      metaTagTitle,
      slug
      }`;

  const productsList = await sanityClient.fetch(productsQuery);

  const product = await sanityClient.fetch(query, {
    slug: params?.slug,
  });

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      productsList,
    },
    revalidate: 60,
  };
};
