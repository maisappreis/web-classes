const { defineConfig } = require('@vue/cli-service')

module.exports = {
	"transpileDependencies": [
		"vuetify"
	],
	pluginOptions: {
		electronBuilder: {
			nodeIntegration: true
		}
	}    
}

// module.exports = defineConfig({
//   transpileDependencies: ["vuetify"],
//   pluginOptions: { electronBuilder: { nodeIntegration: true } },
// })

// module.exports = {
//   transpileDependencies: ["vuetify"],
//   pluginOptions: { electronBuilder: { nodeIntegration: true } },
// };


// ORIGINAL

// module.exports = defineConfig({
//   transpileDependencies: [
//     'vuetify'
//   ]
// })
