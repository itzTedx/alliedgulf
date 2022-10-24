import * as fs from "fs";

import { sanityClient } from "../sanity";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = process.env.NEXT_PUBLIC_DOMAIN_URL; //For changing domain

  const staticPaths = fs
    .filter((staticPage) => {
      return !["sitemap.xml.js", "_app.js", "_document.js", "api"].includes(
        staticPage
      );
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath.replace("tsx", "")}`;
    });

  const productQuery = `*[_type == "products"] | order(_createdAt asc) {
      _id,
      title,
      image,
      description,
      slug,
      metaTagTitle
      }`;

  const serviceQuery = `*[_type == "services"] | order(_createdAt asc) {
    _id,
    servicesImage,
    servicesTitle,
    servicesSlug,
  }`;

  const products = await sanityClient.fetch(productQuery);
  const services = await sanityClient.fetch(serviceQuery);

  const dynamicProductsPaths = products.map((products) => {
    return `${BASE_URL}/products/${products.slug.current}`;
  });
  const dynamicServicesPaths = services.map((services) => {
    return `${BASE_URL}/services/${services.slug.current}`;
  });

  const allPaths = [
    ...staticPaths,
    ...dynamicProductsPaths,
    ...dynamicServicesPaths,
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `<url>
            <loc>${url}</loc>
          </url>`;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
