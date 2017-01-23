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

  'deletes a swatch when delete button is pressed': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .click('.swatch:nth-of-type(1) .swatch__remove')
      .assert.elementCount('.swatch', 3)
      .end();
  },

  'renders a swatch with correct background color when valid color is submitted in the add swatch form': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.add-swatch-form', 10000)
      .assert.elementCount('.swatch', 4)
      .setValue('.add-swatch-form [type="text"]', '#000')
      .click('.add-swatch-form [type="submit"]')
      .assert.elementCount('.swatch', 5)
      .assert.cssProperty('.swatch:nth-of-type(5)', 'background-color', 'rgba(0, 0, 0, 1)')
      .end();
  },

  'renders 5 swatches when .palette is clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.add-swatch-form', 10000)
      .assert.elementCount('.swatch', 4)
      .click('.palette:nth-of-type(1) .palette__name')
      .assert.elementCount('.swatch', 9)
      .end();
  },

  'replaces a swatch with a new one when the edit field is filled out': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.add-swatch-form', 10000)
      .click('.swatch:nth-of-type(1) .swatch__edit')
      .setValue('.swatch:nth-of-type(1) [type="text"]', '#000')
      .assert.cssProperty('.swatch:nth-of-type(1)', 'background-color', 'rgba(0, 0, 0, 1)')
      .end();
  }
};
