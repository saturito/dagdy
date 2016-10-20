var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/client.js'
  ],
  output: {
    path: '/',
    filename: 'bundle.js'
  },
  publicPath: '/',
  noInfo: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new htmlWebpackPlugin({
      template: './client/index.ejs'
    })
  ]
}
