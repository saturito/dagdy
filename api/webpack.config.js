const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const validator = require('webpack-validator');
const htmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, 'client/client.js'),
  build: path.join(__dirname, 'public')
}

const common = {
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    PATHS.app
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

var config;

switch (process.env.npm_lifecycle_event) {
  case 'build':
    conf = merge(common, {});
    break;
  default:
    conf = merge(common, {});
}

module.exports = validator(config);
