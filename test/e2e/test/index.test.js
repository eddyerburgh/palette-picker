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
  },

  'renders swatches that are closed when clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .click('.swatch:nth-of-type(1) .remove-swatch')
      .assert.elementCount('.swatch', 3)
      .end();
  }

};
