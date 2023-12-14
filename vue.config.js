'use strict'
const path = require('path')
const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue3' // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 8080 // dev port

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   * process.env.NODE_ENV === 'development'
   */
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/bid': {
        target: 'https://192.168.70.190:8181/bid', //崔
        // target: 'http://192.168.60.159:8080/bid', //董
        // target: 'http://192.168.60.96:8888/bid', //尚
        // target: 'http://192.168.70.15:8094/bid', //徐 
        changeOrigin: true,
        pathRewrite: {
          '^/bid/': ''
        }
      },
      '/preview': {
        target: 'http://192.168.70.190:8012',
        changeOrigin: true,
        pathRewrite: {
          '^/preview/': ''
        }
      }
    }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // plugins: [
    //   new webpack.ProvidePlugin({
    //     $: 'jquery',
    //     jQuery: 'jquery',
    //     'windows.jQuery': 'jquery'
    //   })
    // ]
  },
}
