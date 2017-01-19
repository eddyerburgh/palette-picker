// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'renders a modal that closes when clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal__message', 10000)
      .assert.containsText('.modal__message', 'This app lets you store swatches of color. Click them to copy to clipboard.')
      .click('.modal input[type=button]')
      .assert.elementNotPresent('.modal__message')
      .end();
  }
};
