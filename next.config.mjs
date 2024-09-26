/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: 'export',
    // Ensure rewrites/redirects aren't breaking dynamic routes
    async redirects() {
      return [];
    },
};

export default nextConfig;
