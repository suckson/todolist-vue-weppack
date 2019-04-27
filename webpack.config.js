const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLplugin = require('html-webpack-plugin')
const webpack = require('webpack')
const ExtractPlugin = require('extract-text-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      ,{
          test: /\.css$/,
          use: [
              'style-loader',
              'css-loader'
          ]
      },
      {
        test: /\.(gif|jpg|jpeg>png|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: '[name]-aaa.[ext]'
            }
          }
        ]
      },

      {
        test: /\.jsx$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin(),
    new HTMLplugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isDev ? '"development"' : '"production"'
      }
    })
  ]
}
if (isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.devtool = '#cheap-module-eval-source-map'
  config.devServer = {
    port: 8080,
    host: '0.0.0.0',
    overlay: {
      errors: true
    },
    // historyFallback:{
    //     //前段重定向
    // },
    hot: true
  }
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
} else {
  config.entry = {
    app: path.join(__dirname, 'src/index.js'),
    vendor: ['vue']
  }
  config.module.rules.push({
    test: /\.styl/,
    use: ExtractPlugin.extract({
      fallback: 'style-loader',
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    })
  })

  config.output.filename = '[name].[chunkhash:8].js',
  config.plugins.push(
    new ExtractPlugin('styles.[contentHash:8].css'),
    new webpack.optimize.CommonsChunklPlugin({
        name:'vendor'
    }),
    new webpack.optimize.CommonsChunklPlugin({
        name:'runtime'
    }),
    // 将类库文件单独打包出来
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // webpack相关的代码单独打包
    new webpack.optimize.CommonsChunkPlugin({
      name: 'runtime'
    })
  )
}
module.exports = config
