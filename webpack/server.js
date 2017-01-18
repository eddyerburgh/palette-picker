var webpack = require('webpack');
var express = require('express');
var config = require('config');

var PORT = config.get('server.port');

var webpackConfig = require('./webpack.dev.config');

var app = express();
var compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

app.use(devMiddleware);

app.use(hotMiddleware);

var uri = 'http://localhost:' + PORT;

devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
});

module.exports = app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return
  }
});
