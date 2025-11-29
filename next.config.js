/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/RoomByRoom-website',
    assetPrefix: '/RoomByRoom-website/',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
}

module.exports = nextConfig
