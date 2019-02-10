const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

const defaultPluins = [
  new webpack.DefinePlugin({
    'process.env': { NODE_ENV: '"development"' }
  }),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  })
]

const devServer = {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
    errors: true
  },
  // historyFallback:{
  //     //前段重定向
  // },
  hot: true
}

let config

// eslint-disable-next-line no-unused-vars
let cssMoudle = { // cssmoudle的配置
  loader: 'css-loader',
  options: {
    module: true,
    localIdentName: '[path]-[name]-[hash:base64:5]'
  }
}
config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl/,
        use: [
          'vue-style-loader',
          'css-loader',

          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          'stylus-loader'
        ]
      }
    ]
  },
  devServer,
  plugins: defaultPluins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ])
})
config.resolve = {
  alias: {
    'vue': path.join(__dirname, '../node_modules/vue/dist/vue.esm.js')
  }
}

module.exports = config
