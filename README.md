# webpack-vue

webpack-vue 入坑之旅

#demo1
npm install webpack --save-dev

输出打包
webpack ./demo1/index1.js ./demo1/dist/bundle.js
似乎很顺利！！！！

#demo2
loader 资源转换

npm install css-loader style-loader --save-dev

资源转换器 style -> css -> less
require("!style!css!less!./style.css")
#####
此处有疑问： style -> css -> less  这个顺序的原因？
#####

#demo3
webpack.config.js 配置
entry
就是模块的入口 值可以是字符串， 数组， json( key为bundle产出文件名)
entry: '' 或 [] 或 {}
module.exports = {
  entry: {
    bundle: './main.js',
    bundle2: './main2.js'
  },
  output: {
    filename: '[name].js',
    publicPath: '/dits'
  }
};

output
生成文件配置
path 对应文件路径
filename 配置生成文件名
publicPath 公共资源输出路径， 图片类

module
主要配置loaders

resolve
设置文件后缀（extensions）
resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extension: ['', '.js'],
    //别名
    alias: {
        filter: path.join(__dirname, 'src/filters')
    }
},

plugins
强大的webpack插件 （编译, 导出 Hash 的表, 导出 CSS 等等）
