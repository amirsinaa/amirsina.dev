const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: 'out',
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
