/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipwatting: true,
  }),
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
