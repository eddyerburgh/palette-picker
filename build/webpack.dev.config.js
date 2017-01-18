const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('config');
const PORT = config.get('server.port');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${PORT}/`,
    'webpack/hot/only-dev-server',
    '../src/index.jsx',
  ],

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, '../dist'),
    publicPath: '/',
  },



  context: resolve(__dirname, '../src'),

  resolve: {
    extensions: ['.', '.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.json?$/,
        loader: 'json'
      },
    ],
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template:  resolve(__dirname, '../src/index.tpl.html'),
      inject: 'body',
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],
};