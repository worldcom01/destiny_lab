import type { NextConfig } from "next";

/**
 * Birth Designer is a separate Next.js application (its own repository and Vercel project) served as the
 * `/birth` zone of this domain (Next.js multi-zones). It is built with `basePath: '/birth'`, so its pages
 * AND its build assets (`/birth/_next/...`) live under /birth and never collide with this site.
 * Links from this site to /birth must be plain <a> elements (cross-zone: hard navigation).
 *
 * BIRTH_DESIGNER_ORIGIN: the Birth Designer deployment to serve (no trailing slash). Rewrite
 * destinations are fixed at BUILD time, so it must be set before the deployment builds.
 *   - Production: defaults to the Birth Designer production deployment.
 *   - Any other environment (Preview, local): NO default. Without an explicit origin there is no /birth
 *     rewrite at all, so a Preview can never silently serve Birth Designer Production.
 */
const BIRTH_DESIGNER_PRODUCTION = "https://destiny-lab-birth-designer.vercel.app";
const BIRTH_DESIGNER_ORIGIN =
  process.env.BIRTH_DESIGNER_ORIGIN ?? (process.env.VERCEL_ENV === "production" ? BIRTH_DESIGNER_PRODUCTION : undefined);

const nextConfig: NextConfig = {
  async rewrites() {
    if (!BIRTH_DESIGNER_ORIGIN) return [];
    return [
      { source: "/birth", destination: `${BIRTH_DESIGNER_ORIGIN}/birth` },
      { source: "/birth/:path+", destination: `${BIRTH_DESIGNER_ORIGIN}/birth/:path+` },
    ];
  },
};

export default nextConfig;
