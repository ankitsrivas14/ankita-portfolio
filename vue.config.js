const { defineConfig } = require('@vue/cli-service')
const path = require('path')

// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
	chainWebpack: config => {
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');

		const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
		types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
	},
	filenameHashing: true,
	productionSourceMap: true
}

function addStyleResource(rule) {
	rule.use('style-resource')
		.loader('style-resources-loader')
		.options({
			patterns: [
				path.resolve(__dirname, './src/assets/css/variables.scss')
			],
		})
}