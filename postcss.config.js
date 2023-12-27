const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
	plugins: {
		'postcss-px-to-viewport': {
			unitToConvert: 'px',
			viewportWidth: 1920,
			unitPrecision: 5,
			viewportUnit: 'vw',
			fontViewportUnit: 'vw',
			selectorBlackList: ['keep-px'], 
			propList: [
				'*',
			]
		}
	}
});