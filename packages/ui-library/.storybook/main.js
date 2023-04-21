module.exports = {
	stories: [
		"../src/**/*.stories.@(js|mdx)",
		"../src/**/stories.@(js|mdx)",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-a11y",
		{
			name: "@storybook/addon-styling",
			options: {
				postCss: {
					// Provide our own copy of PostCSS.
					implementation: require( "postcss" ),
				},
			},
		},
	],
	framework: {
		name: "@storybook/react-webpack5",
		options: {},
	},
	core: {
		disableTelemetry: true,
	},
	docs: {
		autodocs: true,
	},
};
