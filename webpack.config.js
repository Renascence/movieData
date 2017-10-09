var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + "/src/main.js",
  output: {
    path: __dirname + "/build",
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    contentBase: './build',
    port: "7000",
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My App',
      filename: 'assets/admin.html'
    }),
  ]
};
