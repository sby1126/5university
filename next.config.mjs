/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/5university',
    assetPrefix:
        "https://sby1126.github.io/5university/"
    ,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
