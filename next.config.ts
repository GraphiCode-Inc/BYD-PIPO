import type { NextConfig } from "next";
import { withNextVideo } from "next-video/process";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

export default withNextVideo(nextConfig);
