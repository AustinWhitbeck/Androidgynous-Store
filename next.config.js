/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images-api.printify.com',
      },
    ],
  },
};

module.exports = nextConfig;

/* 
Notes on remotePatterns syntax
https://nextjs.org/docs/app/api-reference/components/image#remotepatterns
*/
