module.exports = ( api ) => {
	api.cache.using( () => process.env.NODE_ENV === "test" );

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					modules: api.env( "test" ) ? "auto" : false,
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
