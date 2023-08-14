const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {},
})

/** @type {import('next').NextConfig} */
const nextConfig = {
	headers: async () => [
		{
			source: '/:all*(svg|jpg|png|woff|woff2)',
			locale: false,
			headers: [
				{
					key: 'Cache-Control',
					value: 'public, max-age=31536000, stale-while-revalidate',
				},
			],
		},
	],
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig)
