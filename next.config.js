/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imagedelivery.net',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'klar.gg',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'lethalcheats.net',
        pathname: '**'
      }
    ]
  }
}

module.exports = nextConfig
