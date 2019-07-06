module.exports = (api) => {
	api.cache(() => process.env.NODE_ENV);
	
	return {
		plugins: [
			"@babel/plugin-proposal-class-properties",
			"@babel/proposal-object-rest-spread"
		],
		presets: [
			["@babel/env", {
				"targets": {
					"node": "current"
				}}],
			"@babel/typescript"
		]
	}
}