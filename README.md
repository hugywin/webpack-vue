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
