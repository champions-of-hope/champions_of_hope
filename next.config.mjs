/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            search: '',
          },
        ],
      },
};


// module.exports = nextConfig

export default nextConfig;

