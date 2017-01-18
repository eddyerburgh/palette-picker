require('babel-register');
const chromeDriver = require('chromedriver');
const config = require('config');

const PORT = config.get('server.port');
const SELENIUM_PORT = config.get('selenium.port');

module.exports = {
  src_folders: ['test/e2e/test'],
  output_folder: 'test/e2e/reports',

  selenium: {
    start_process: true,
    server_path: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-3.0.1.jar',
    host: '127.0.0.1',
    port: SELENIUM_PORT,
    cli_args: {
      'webdriver.chrome.driver': chromeDriver.path
    }
  },

  test_settings: {
    default: {
      selenium_port: SELENIUM_PORT,
      selenium_host: 'localhost',
      silent: true,
      globals: {
        devServerURL: `http://localhost:${PORT}`
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
};
