/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images:{
    formats:['image/avif','image/webp'],
    remotePatterns:[
      {
        protocol:'https',
        hostname:'images.unsplash.com',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'images.ctfassets.net',
        port:'',
        pathname:'/**'
      },
      {
        protocol:'https',
        hostname:'downloads.ctfassets.net',
        port:'',
        pathname:'/**'
      },
    ]
  }
};

export default nextConfig;
