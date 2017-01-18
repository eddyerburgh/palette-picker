const spawn = require('cross-spawn');
const server = require('../../build/dev-server.js');

let opts = process.argv.slice(2);
if (opts.indexOf('--config') === -1) {
  opts = opts.concat(['--config', 'test/e2e/setup/nightwatch.conf.js']);
}

if (opts.indexOf('--env') === -1) {
  opts = opts.concat(['--env', 'chrome']);
}

const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

runner.on('exit', (code) => {
  server.close();
  process.exit(code);
});

runner.on('error', (err) => {
  server.close();
  throw err;
});
