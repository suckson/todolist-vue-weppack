const docsLoader = require.resolve('./doc-loader.js')

module.exports = (isDev) => {
  return {
    preserveWhiteoace: true, // template 空格是否显示
    extractCSS: !isDev, // 是否单独打包css
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true
    },
    // hotReload:false          根据环境变量生成
    loaders: {
      'docs': docsLoader // 增加文档描述  插件开发
    }
    // preLoader:{
    //     //预先定义的loader
    // },
    // postLoader
  }
}
