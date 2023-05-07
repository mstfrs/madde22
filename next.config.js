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
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tiyatronline.com'     
        
      },
      {
        protocol: 'https',
        hostname: 'kdaidggt0f3v.merlincdn.net'     
        
      },
      {
        protocol: 'https',
        hostname: 'www.biletix.com'     
        
      },
      {
        protocol: 'https',
        hostname: 'www.samsunetkinlik.com'     
        
      },
    ],
   
   
  },
}