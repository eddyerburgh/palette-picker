var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('config');
var PORT = config.get('server.port');

var webpackConfig = require('./webpack.dev.config');

new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true,
    // It suppress error shown in console, so it has to be set to false.
    quiet: false,
    // It suppress everything except error, so it has to be set to false as well
    // to see success build.
    noInfo: false,
    stats: {
        // Config for minimal console.log mess.
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
    }
}).listen(PORT, 'localhost', function (err) {
    if (err) {
        console.log(err);
    }

    console.log(`Listening at localhost:${PORT}`);
});