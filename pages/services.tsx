import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import React from "react";
import ServiceHeader from "../components/ServiceHeader";

import { sanityClient, urlFor } from "../sanity";
import { Service } from "../typings";
import Brochure from "../components/Brochure";

interface Props {
  services: [Service];
}

export default function Services({ services }: Props) {
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
        <ServiceHeader />
      </div>
      <div className="container mx-auto bg-white shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3 p-3 md:p-8">
          {services.map((services) => (
            <Link
              key={services._id}
              href={`/services/${services.servicesSlug.current}`}
              passHref
            >
              <a className="cursor-pointer group">
                <div className="card relative group overflow-hidden">
                  {services.servicesImage && (
                    <Image
                      className="w-full max-w-full h-auto block group-hover:scale-105 transition ease-in-out duration-500"
                      src={urlFor(services.servicesImage).url()!}
                      alt={services.servicesTitle}
                      width={534}
                      height={262}
                    />
                  )}

                  <div className="absolute top-0 right-0 bottom-0 left-0 px-5 py-6 flex items-end">
                    <h2 className="bg-neutral-800 text-gray-200 py-2 px-3 text-sm group-hover:text-sky-400 transition duration-500">
                      {services.servicesTitle}
                    </h2>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Brochure />
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
