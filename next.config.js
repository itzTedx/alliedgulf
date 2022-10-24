/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  async redirects() {
    return [
      {
        source: "/youtube",
        destination: "https://www.youtube.com/channel/UCkb5kHLLC_Ntqt8p7ZIKliA",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination:
          "https://www.linkedin.com/in/allied-gulf-construction-services-a4477324a/",
        permanent: true,
      },
      {
        source: "/facebook",
        destination: "https://www.facebook.com/agcs.bahrain/",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/agcs.bahrain/",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/agcsbahrain",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
