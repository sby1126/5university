/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "https://mwzuvsuhvsggcpgwznlm.supabase.co/storage/v1/object/public/ART_STORAGE/",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
