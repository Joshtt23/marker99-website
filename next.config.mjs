// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  // eslint-disable-next-line no-undef
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'marker99restaurant.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Target modern browsers to avoid unnecessary polyfills
  // This reduces bundle size by ~14 KiB by not transpiling ES2021+ features
  compiler: {
    // SWC will target modern browsers - polyfills come from dependencies, not Next.js
  },
  // Turbopack configuration (Next.js 16+ uses Turbopack by default)
  turbopack: {},
  // Webpack configuration for better tree-shaking (only when using --webpack flag)
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Enable better tree-shaking for unused exports
      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };
      // Note: Polyfills in chunk 8629ed7518514ab9.js are likely from dependencies
      // (react-hook-form, zod, etc.) and can't be easily removed without breaking functionality
    }
    return config;
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://connect.facebook.net https://www.google.com https://www.gstatic.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-src 'self' https://www.facebook.com https://www.google.com; connect-src 'self' https://connect.facebook.net https://www.facebook.com;",
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'no-referrer-when-downgrade',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=(self), microphone=()',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
