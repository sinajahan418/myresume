/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

const withVideos = require("next-videos");
const withPWA = require("next-pwa");
module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

module.exports = withVideos();
