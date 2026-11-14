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

    // championsofhopeseries.com (the email domain) is also attached to this Vercel
    // project and was serving a full duplicate of the site. Send it to the one
    // canonical host, path intact, so old links keep working. Email (MX) is untouched.
    async redirects() {
      return ['championsofhopeseries.com', 'www.championsofhopeseries.com'].map((host) => ({
        source: '/:path*',
        has: [{ type: 'host', value: host }],
        destination: 'https://www.championsofhope.io/:path*',
        permanent: true,
      }));
    },
};


// module.exports = nextConfig

export default nextConfig;
