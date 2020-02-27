const path = require('path');
function resolve (dir) {
  return path.join(__dirname, './', dir)
}
module.exports = {
    //baseUrl: '/',    //vue cLi 3.3弃用
    publicPath: '/',
    // publicPath: process.env.NODE_ENV === 'production'
    // ? '/production-sub-path/'
    // : '/',
    outputDir: 'dist', // 打包的目录
    lintOnSave: false, // 在保存时校验格式
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
      open: true, // 启动服务后是否打开浏览器
      host: '0.0.0.0',
      port: 8080, // 服务端口
      https: false,
      hotOnly: false,
      proxy: null, // 设置代理
      before: app => {}
    },
    chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('src'))
          .set('assets',resolve('src/assets'))
          .set('components',resolve('src/components'))
          .set('router',resolve('src/router'))
          .set('utils',resolve('src/utils'))
          .set('static',resolve('src/static'))
          .set('store',resolve('src/store'))
          .set('views',resolve('src/views'))
    },
    // css: {
    //   loaderOptions: {
    //     // pass options to sass-loader
    //     sass: {
    //       data: ''
    //     }
    //   }
    // },
  }