module.exports = ( api ) => {
	api.cache( true );

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					modules: false,
				},
			],
			"@babel/preset-react",
		],
		plugins: [
			"@babel/plugin-proposal-optional-chaining",
			"@babel/plugin-transform-runtime",
		],
		sourceType: "unambiguous",
	};
};
