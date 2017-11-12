/* eslint-disable */
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/App.js",
  output: {
    path: __dirname + "/build",
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: "7000",
    contentBase: __dirname + "/build",
    inline: true,
    historyApiFallback: true,
    proxy: {
      '*': {
        target: 'http://api.douban.com',
        changeOrigin: true,
        secure: false
      }
    },
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [
          ['import', [{ libraryName: "antd", style: true }]],
        ]
      }
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CopyWebpackPlugin([
      { from: __dirname + '/src/assets' }
    ])
  ]
};
