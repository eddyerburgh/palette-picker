const webpack = require('webpack');
const express = require('express');
const config = require('config');
const webpackDevServer = require('webpack-dev-server');
const {resolve} = require('path');

const PORT = config.get('server.port');

const webpackConfig = require('./webpack.dev.config');

const compiler = webpack(webpackConfig);

var server = new webpackDevServer(compiler, {
  hot: true,
  port: PORT,
  contentBase: resolve(__dirname, '../dist'),
  publicPath: '/',
  inline: true
});

module.exports = server.listen(PORT);