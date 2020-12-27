require('dotenv').config({
	path: `environments/.env.${process.env.NODE_ENV || 'localhost'}`,
});
console.log(`Current Environment: ${process.env.NODE_ENV}`);
console.log(`Current Site URL: ${process.env.NEXT_PUBLIC_SITE_URL}`);

module.exports = {
	target: 'serverless',
	// Domains to allow remote image retrieval from.
	// When uploading images to s3, set this to the public s3 bucket url
	images: {
		domains: [process.env.NEXT_PUBLIC_SITE_URL],
	},
	webpack: (config, { isServer }) => {
		// Fixes npm packages that depend on `fs` module
		if (!isServer) {
		  config.node = {
			fs: 'empty'
		  }
		}
	
		return config
	}
};
