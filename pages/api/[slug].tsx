import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Link from "next/link";

import BrochureVertical from "../../components/BrochureVertical";
import Header from "../../components/ProductHeader";

import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Product } from "../../typings";
import WebBanner from "../../components/WebBanner";

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
      <main className="container mx-auto grid md:grid-cols-4 bg-white">
        <div className="md:col-span-3 flex">
          <article className="mx-5 pt-4 md:pt-12 md:px-6 lg:px-36">
            <h1 className="text-2xl md:text-3xl font-bold text-sky-700 pb-5">
              {product.title}
            </h1>
            <div className="flex md:gap-12 flex-col lg:flex-row pb-12">
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
                <p className="mb-5">{product.description}</p>
                <div className="flex items-center flex-col md:flex-row gap-1 md:gap-3">
                  <Link
                    href={`mailto:info@alliedgulf.me?subject=${product.title}%20-%20Order%20&body=Hi sir, I'm interested in this product can we discuss more about it%0D%0A%0D%0AName: [Your name here]%0D%0AContact: [Your contact details]%0D%0A%0D%0AProduct: ${product.title}%0D%0AQuantity:%0D%0AProject Details:%0D%0A`}
                  >
                    <a className="py-1 px-[0.6em] text-sm md:text-base bg-sky-700 hover:bg-sky-600 transition text-white">
                      Order Now
                    </a>
                  </Link>
                  <h6>or</h6>
                  <div className="">
                    <Link href="/products">
                      <a className="underline text-sky-700 hover:text-sky-500 font-medium text-sm">
                        Take a look at our other products.
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <WebBanner />
            <div className="relative rounded-lg mx-auto max-w-3xl text-white md:shadow-xl duration-500 ease-in-out radial-gradient py-7 px-10 md:mb-12 mt-6">
              <h5 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Looking for specialty materials for your project?
              </h5>
              <p className=" mb-3 md:mb-8 font-light">
                Just give us your projects details and we{`'`}ll get back to you
                soon
              </p>
              <div className="mb-3">
                <Link href="/contact">
                  <a className="text-white bg-neutral-800 py-3 px-4 hover:bg-neutral-300 hover:text-black transition duration-200 ease-in">
                    Let{`'`}s talk
                  </a>
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div className="mt-12 md:mt-0 pt-6 bg-neutral-200">
          <div className="py-6 px-6">
            <h2 className="text-2xl font-medium text-sky-500">
              Related Products:
            </h2>
            {productsList.map((productsList) => (
              <div key={productsList._id} className="py-2 mr-4">
                <div className="grid grid-cols-5 gap-2">
                  {productsList.image && (
                    <Image
                      src={urlFor(productsList.image).url()!}
                      width={180}
                      height={180}
                      alt={productsList.title}
                    />
                  )}
                  <div className="col-span-4">
                    <h4 className="text-sky-700">{productsList.title}</h4>
                    <p className="line-clamp-2 text-sm">
                      {productsList.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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
