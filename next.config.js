/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true
    },
    sassOptions: {
        includePaths: [ require("path").join(__dirname, "src", "style") ]
    }
}

module.exports = nextConfig
