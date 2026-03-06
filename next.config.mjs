/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    compress: true,

    // Optimize production images
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year cache
    },

    // Enable experimental package-level tree shaking for icon / animation libs
    experimental: {
        optimizePackageImports: [
            "lucide-react",
            "framer-motion",
        ],
    },

    // Aggressive bundle splitting
    webpack(config) {
        config.optimization.splitChunks = {
            chunks: "all",
            cacheGroups: {
                framerMotion: {
                    test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
                    name: "framer-motion",
                    priority: 20,
                    chunks: "all",
                },
                lucide: {
                    test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
                    name: "lucide",
                    priority: 20,
                    chunks: "all",
                },
            },
        };
        return config;
    },
};

export default nextConfig;
