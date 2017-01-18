// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'renders a modal': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal__message', 10000)
      .assert.elementPresent('.modal__message')
      .end();
  }
};
