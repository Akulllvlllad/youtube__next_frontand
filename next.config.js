/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		externalDir: true,
	},
	

	poweredByHeader: false,
	optimizeFonts: false,
	reactStrictMode: false,
	swcMinify: true,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		domains: ['localhost'],
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: 'http://loacalhost:3333/api/:path*',
			},
			{
				source: '/uploads/:path*',
				destination: 'http://loacalhost:3333/uploads/:path*',
			},
		]
	},
}

module.exports = nextConfig
