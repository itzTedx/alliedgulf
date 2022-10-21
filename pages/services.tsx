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
  return (
    <>
      <Head>
        <title>Services we providing in Bahrain</title>
        <meta
          name="description"
          content="We're providing various services for your projects such as Building Construction, Wall protection system, Interior Decorations, Portable & Modular Cabins, Structural Fabrications."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@agcsbahrain" />
        <meta name="twitter:creator" content="@agcsbahrain" />
        <meta property="og:url" content="https://www.alliedgulf.me/services" />
        <meta property="og:title" content="Services we providing in Bahrain" />
        <meta
          property="og:description"
          content="We're providing various services for your projects such as Building Construction, Wall protection system, Interior Decorations, Portable & Modular Cabins, Structural Fabrications."
        />
        <meta property="og:image" content="/latest-project.jpg" />
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
