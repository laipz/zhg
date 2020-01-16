# 一： vue-cli3初始化项目

* 1：node -v        查看node版本        要求node >= 8.9 （推荐 8.11.0+）

* 2：vue --version  查看vue-cli 版本    要求3.x（卸载：npm uninstall vue-cli -g  安装：npm install -g @vue/cli）

* 3： vue create zhg(zhg为要新建项目名称，执行这条命令之前要先cd到要放项目文件的地址)

* 4: 选择 Manually select features   （自定义配置）

* 5： 安装需要的功能（空格选择使不使用）

  > ? Check the features needed for your project:
  >
  > (*)Babel                                                                              
  >
  > ()TypeScript                                                                        
  >
  > ()Progressive Web App (PWA) Support                             渐进式web应用（这个貌似挺不错的，不会用）
  >
  > (*)Router
  >
  > (*) Vuex
  >
  > (*)CSS Pre-processors                                                          css预处理器（sass.less等）
  >
  > (*)Linter / Formatter
  >
  > ( ) Unit Testing                                                测试
  >
  > ( ) E2E Testing                                                 测试

* 6： 路由模式选择history？选择 **n** 时是  **hash** 模式

  > Use history mode for router? (Requires proper server setup for index fallback in production) (Y/n)：y

  **history和hash的区别**

  * 1: hash 地址栏多了一个#
  * 2：两种模式都需要后台配合，hash模式下只有#号之前的内容包含在请求内。history模式 前端的 URL 必须和实际向后端发起请求的 URL 一致，所以需要后端（Apache 或 Nginx）进行简单的路由配置，同时搭配前端路由的 404 页面支持。

* 7： 选择css预处理器（我习惯性用的都是SCSS，scss有两个node和dart，区别可以百度看一下，因为官网推荐dart,所以我选择dart）

  >Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): (Use arrow keys)
  >
  >Sass/SCSS (with dart-sass)
  >Sass/SCSS (with node-sass)
  >Less
  >Stylus                                                                                                                            

* 8:选择 ESLint 的校验规则:(我选第一个：ESLint with error prevention only）

  > Pick a linter / formatter config: (Use arrow keys)
  >
  >ESLint with error prevention only             (只在错误预防）
  >ESLint + Airbnb config                    
  >ESLint + Standard config            翻译：标准
  >ESLint + Prettier                             翻译：更优雅            

* 9：语法校验时机：（保存时校验：Lint on save）

  >Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)
  >
  > Lint on save                  保存时校验
  > Lint and fix on commit (requires Git)      提交时校验

* 10：想把配置放在什么地方：（In package.json  ）

  > In dedicated config files      单独放在一个文件里面
  >
  > In package.json                   放在package.json文件内

* 11：是否保存刚才的设置：n

  >  Save this as a preset for future projects

* 12:根目录新建**vue.config.js**文件

  ```javascript
  const path = require('path');
  function resolve (dir) {
    return path.join(__dirname, './', dir)
  }
  
  module.exports = {
    //baseUrl: '/',    //vue cLi 3.3弃用后改用publicPath
    publicPath: './',
    outputDir: 'dist', // 打包的目录
    assetsDir: 'assets',//静态资源目录
    lintOnSave: true, // 是否开启编译时是否不符合eslint提示
    productionSourceMap: false, // 生产环境是否生成 SourceMap
    devServer: {
      host: '0.0.0.0',
      port: 8000,
      https: false,
      hotOnly: false,
      proxy: { // 设置代理
        '/api': {
          target: 'http://127.0.0.1:8080',
          changeOrigin: true
        }
      }
    },
    // 配置别名
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
    /*css: { // 配置高于chainWebpack中关于css loader的配置
      sourceMap: false, // 是否在构建样式地图，false将提高构建速度
      loaderOptions: {
        // pass options to sass-loader
        sass: {
          // @/ is an alias to src/
          // so this assumes you have a file named `src/variables.scss`
            data:`
                 @import "@/assets/css/variable.scss"; 
                 @import "@/assets/css/common.scss";
                 @import "@/assets/css/mixin.scss";
                `
        }
      }
    },*/
  }
  
  ```

  





