module.exports = {
  pluginOptions: {
    storybook: {
      allowedPlugins: ['define'],
    },
  },

  configureWebpack: {
    performance: { hints: false },
    resolve: {
      alias: {
        '~': __dirname,
      },
      modules: ['node_modules', 'src'],
    },
  }
}