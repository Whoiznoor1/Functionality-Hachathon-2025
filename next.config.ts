import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.sanity.io"], 
  },
  typescript:{
    ignoreBuildErrors: true
  }
  };
  

export default nextConfig;

// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.sanity.io', // Yeh aapka image source ka domain hai.
//       },
//     ],
//   },
// };

// export default nextConfig;



// next.config.ts
// import { NextConfig } from 'next';

// const nextConfig: NextConfig = {

// export default nextConfig;
