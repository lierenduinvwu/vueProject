const path = require('path')

module.exports = {
  publicPath: './',
  outputDir: path.resolve(__dirname, '../build_master/demo'),
  assetsDir: 'assets',
  lintOnSave: false,
  devServer: {
    open: true,
    // host: 'localhost',
    host: '0.0.0.0',
    port: '8500',
//  proxy: {
//    '/api': {
//      target: process.env.VUE_APP_baseURL,
//      changeOrigin: true,
//      ws: true
//    }
//  }
  }
}