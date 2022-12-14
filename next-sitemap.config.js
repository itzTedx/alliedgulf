/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_DOMAIN_URL || "https://localhost:3000",
  generateRobotsTxt: true, // (optional)
  exclude: ["/api/*", "privacypolicy.tsx"],
};
