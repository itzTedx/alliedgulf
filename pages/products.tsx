import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import ProductHeader from "../components/ProductHeader";

import { sanityClient, urlFor } from "../sanity";
import { Product } from "../typings";

interface Props {
  products: [Product];
}

export default function Products({ products }: Props) {
  return (
    <>
      <Head>
        <title>Products of Allied Gulf Construction Services</title>
        <meta
          name="description"
          content="We offer a wide range of products and provide complete client satisfaction. Our Products Expansion Joints, Movement Joints, Tile trims, Carpet Trims, Manhole Covers, Channels, Metal Doors, Acoustic panels"
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@agcsbahrain" />
        <meta name="twitter:creator" content="@agcsbahrain" />
        <meta property="og:url" content="https://www.alliedgulf.me/products" />
        <meta
          property="og:title"
          content="Products of Allied Gulf Construction Services"
        />
        <meta
          property="og:description"
          content="We offer a wide range of products and provide complete client satisfaction. Our Products Expansion Joints, Movement Joints, Tile trims, Carpet Trims, Manhole Covers, Channels, Metal Doors, Acoustic panels"
        />
        <meta property="og:image" content="/latest-project.jpg" />
      </Head>
      <div className="overflow-hidden">
        <ProductHeader />
      </div>
      <div className="container mx-auto bg-white p-4 md:p-12">
        <div className="md:py-6">
          <h2 className="font-bold text-3xl hidden md:inline-block text-sky-700">
            Products from us
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-6">
          {products.map((products) => (
            <div key={products._id}>
              <div className="hover:scale-105 transition ease-in-out duration-500 grid grid-cols-3 gap-3 cursor-pointer">
                <div className="h-full">
                  {products.image && (
                    <Image
                      className="rounded-md"
                      src={urlFor(products.image).url()!}
                      alt={products.title}
                      width={180}
                      height={180}
                    />
                  )}
                </div>
                <div className="flex flex-col gap-2 bg-white col-span-2">
                  <Link href={`/products/${products.slug.current}`} passHref>
                    <div className="">
                      <h5 className="text-lg md:text-xl font-bold text-sky-800 hover:text-sky-600">
                        {products.title}
                      </h5>
                      <p className="line-clamp-2 md:line-clamp-4 text-sm">
                        {products.description}
                      </p>
                    </div>
                  </Link>
                  <div className="">
                    <Link
                      href={`mailto:info@alliedgulf.me?subject=${products.title}%20-%20Order%20&body=Hi sir, I'm interested in this product can we discuss more about it%0D%0A%0D%0AName: [Your name here]%0D%0AContact: [Your contact details]%0D%0A%0D%0AProduct: ${products.title}%0D%0AQuantity:%0D%0AProject Details:%0D%0A`}
                    >
                      <a className="py-2 px-3 text-sm md:text-base bg-sky-700 hover:bg-sky-400 transition hover:text-neutral-800 text-white">
                        Order Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
    slug
    }`;

  const products = await sanityClient.fetch(query);

  return {
    props: { products },
  };
};
