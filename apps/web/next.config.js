module.exports = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        port: "",
        pathname: "/id/**",
      },
    ],
  },
};
