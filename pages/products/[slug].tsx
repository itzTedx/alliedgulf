import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Link from "next/link";

import BrochureVertical from "../../components/BrochureVertical";
import Header from "../../components/ProductHeader";

import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Product } from "../../typings";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  return (
    <>
      <Head>
        <title>{product.metaTagTitle}</title>
        <meta name="description" content={product.description} />
      </Head>
      <Header />
      <main className="container mx-auto grid md:grid-cols-4 bg-white">
        <div className="md:col-span-3 flex">
          <article className="mx-5 pt-4 md:pt-12 md:px-36">
            <h1 className="text-2xl md:text-3xl font-bold text-sky-700 pb-5">
              {product.title}
            </h1>
            <div className="flex md:gap-12 flex-col md:flex-row pb-12">
              <div>
                {product.image && (
                  <Image
                    src={urlFor(product.image).url()!}
                    alt={product.title}
                    width={200}
                    height={262}
                    priority
                  />
                )}
              </div>
              <div className="pt-4 max-w-lg text-justify">
                <p>{product.description}</p>
              </div>
            </div>
            <div className="relative rounded-lg mx-auto max-w-3xl text-white md:shadow-xl duration-500 ease-in-out radial-gradient py-7 px-10">
              <h5 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Looking for specialty materials for your project?
              </h5>
              <p className=" mb-3 md:mb-8 font-light">
                Just give us your projects details and we{`'`}ll get back to you
                soon
              </p>
              <div className="mb-3">
                <Link
                  href={`mailto:info@alliedgulf.com?subject=${product.title}%20-%20Order%20&body=Hi sir, Im interested in this product can we discuss more about it%0D%0A%0D%0AProduct: ${product.title}%0D%0AQuantity:%0D%0AProject Details:%0D%0APhone:%0D%0A `}
                >
                  <a className="text-white bg-neutral-800 py-3 px-4 ">
                    Let{`'`}s talk
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-12 md:mt-0">
          <BrochureVertical />
        </div>
      </main>
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
    },
    revalidate: 60,
  };
};
