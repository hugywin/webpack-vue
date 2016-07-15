var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: "./main.js",
  output: {
    path: path.join(__dirname, './dist'),
    filename: "bundle.js"
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: "style!css!less"
    }]
  }
}
