/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mwzuvsuhvsggcpgwznlm.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/**",
      },
    ],
    // domains: [
    //   "https://mwzuvsuhvsggcpgwznlm.supabase.co/storage/v1/object/public/ART_STORAGE/",
    // ],
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
