var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./main.js",
  output: {
    path: path.join(__dirname, './dist'),
    filename: "bundle.js",
    publicPath: path.join(__dirname, './dist/')
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: "vue"
    }, {
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: "vue-html"
    }, {
      test: /\.css$/,
      loader: 'style!css!less!autoprefixer'
    },  {
      test: /\.(png|jpg)$/,
      loader: "url-loader?limit=8192" // 限制8k
    }]
  },
  vue: {
      loaders: {
          css: 'style!css!autoprefixer',
      }
  },
  // 转化成es5的语法
  babel: {
      presets: ['es2015'],
      plugins: ['transform-runtime']
  }
}
