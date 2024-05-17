/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.spacexdata.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.imgur.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'imgur.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.imgbox.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.staticflickr.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: '*.marinetraffic.com',
        port: '',
        pathname: '/**'
      }
    ]
  }
};

export default nextConfig;
