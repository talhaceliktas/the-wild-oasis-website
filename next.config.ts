import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://bpyubtsaekdeshqoilek.supabase.co/storage/v1/object/public/cabin-images/**",
      ),
    ],
  },
};

export default nextConfig;
