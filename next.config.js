/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["page.ts", "page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: ["firebasestorage.googleapis.com"],
    dangerouslyAllowSVG: true,
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
});

module.exports = withPWA({
  ...nextConfig,
});
