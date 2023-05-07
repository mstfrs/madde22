// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images:{
//     remotePatterns:[{protocol:"https", hostname:"biletix.com"}]
//   }
 
// }

// module.exports = nextConfig



module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.biletix.com',
        
      },
    ],
  },
}