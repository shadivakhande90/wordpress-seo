module.exports = ( api ) => {
	api.cache( true );

	return {
		presets: [
			"@babel/preset-env",
			"@babel/preset-react",
		],
		plugins: [
			"@babel/plugin-proposal-optional-chaining",
			"@babel/plugin-transform-runtime",
		],
		sourceType: "unambiguous",
	};
};
