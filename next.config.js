/**
 * Next.js config (CommonJS) — Next build doesn't support `next.config.ts` at runtime.
 * If you intentionally want a TypeScript config, switch to a Next version that supports it
 * or use a build-time transformation. For now we provide a simple JS config.
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
