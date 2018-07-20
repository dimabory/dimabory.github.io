module.exports = {
  css: {
    // modules: true,
    loaderOptions: {
      css: {},
      sass: {
        data: `@import "@/assets/scss/_variables.scss";`
      }
    }
  },
  chainWebpack: config => {
    config.module.rule('vue').use('vue-loader')
      .tap(options => {
        options.transformToRequire = {
          audio: 'src'
        }
        options.transformAssetUrls = {
          video: ['src', 'poster'],
          source: 'src',
          img: 'src',
          image: 'xlink:href',
          audio: 'src'
        }
        options.loaders = {
          js: {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          }
        }

        return options
      })
  },

}
