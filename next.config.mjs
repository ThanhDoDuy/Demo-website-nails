/** @type {import('next').NextConfig} */

// --------------------------------------------------
// Build-time environment variable validation
// Ensures required env vars are set before building.
// --------------------------------------------------
const requiredEnvVars = /** @type {const} */ ([
  'SALON_ID',
  'BACKEND_API_URL',
]);

for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(
      `\n❌ Missing required environment variable: ${envVar}\n` +
      `   Please set it in .env.local before building.\n`
    );
  }
}

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
