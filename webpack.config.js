var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var nodeModules = {};

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',

    path.resolve(__dirname, './src/app/main.js'),

  ],
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    // 开启服务器的模块热替换(HMR)

    contentBase: path.resolve(__dirname, 'build'),
    // 输出文件的路径
    publicPath: '/'
    // 和上文 output 的“publicPath”值保持一致
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),

  ]
};
