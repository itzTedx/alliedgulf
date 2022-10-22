import Head from "next/head";
import Image from "next/future/image";
import React from "react";
import Banner from "../../components/Banner";
import BrochureVertical from "../../components/BrochureVertical";

import { sanityClient, urlFor } from "../../sanity";
import { GetStaticProps } from "next";
import { Service } from "../../typings";
import Header from "../../components/ServiceHeader";

interface Props {
  service: Service;
}

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
      <Header />
      <main className="container mx-auto grid md:grid-cols-4 bg-white">
        <div className="md:col-span-3 flex">
          <article className=" mx-5 pt-4 md:p-12">
            <h1 className="text-2xl md:text-3xl font-bold text-sky-700 pb-5">
              {service.servicesTitle}
            </h1>
            <div className="flex md:gap-12 flex-col md:flex-row">
              <div>
                {service.servicesImage && (
                  <Image
                    src={urlFor(service.servicesImage).url()!}
                    alt={service.servicesTitle}
                    width={534}
                    height={262}
                    priority
                  />
                )}
              </div>
              <div className="pt-4 max-w-md text-justify">
                <p>{service.servicesDescription}</p>
              </div>
            </div>
            <Banner />
          </article>
        </div>
        <BrochureVertical />
      </main>
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
