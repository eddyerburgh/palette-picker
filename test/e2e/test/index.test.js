// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'renders a modal that closes when clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal', 10000)
      .assert.containsText('.modal', 'This app lets you store swatches of color. Click them to copy to clipboard.')
      .click('.modal input[type=button]')
      .assert.elementNotPresent('.modal')
      .end();
  },

  'deletes a swatch when delete button is pressed': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal', 10000)
      .click('.modal input[type=button]')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .moveToElement('.swatch:nth-of-type(1)', 10, 10)
      .click('.swatch:nth-of-type(1) .swatch__remove')
      .assert.elementCount('.swatch', 3)
      .end();
  },

  'deletes all swatches when delete all button is pressed': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
          .url(devServer)
          .waitForElementVisible('.modal', 10000)
          .click('.modal input[type=button]')
          .waitForElementVisible('.swatch', 10000)
          .click('[href="#options"]')
          .click('#delete-all')
          .assert.elementCount('.swatch', 0)
          .end();
  },

  'renders a swatch with correct background color when valid color is submitted in the add swatch form': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal', 10000)
      .click('.modal input[type=button]')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .setValue('.add-swatch-form [type="text"]', '#000')
      .click('.add-swatch-form [type="submit"]')
      .assert.elementCount('.swatch', 5)
      .assert.cssProperty('.swatch:nth-of-type(5) .swatch__inner', 'background-color', 'rgba(0, 0, 0, 1)')
      .end();
  },

  'renders 5 swatches when .palette is clicked': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal', 10000)
      .click('.modal input[type=button]')
      .waitForElementVisible('.swatch', 10000)
      .assert.elementCount('.swatch', 4)
      .click('.palette:nth-of-type(1) .btn-action')
      .assert.elementCount('.swatch', 9)
      .end();
  },

  'replaces a swatch with a new one when the edit field is filled out': function test(browser) {
    const devServer = browser.globals.devServerURL;

    browser
      .url(devServer)
      .waitForElementVisible('.modal', 10000)
      .click('.modal input[type=button]')
      .moveToElement('.swatch:nth-of-type(1)', 10, 10)
      .click('.swatch:nth-of-type(1) .swatch__edit')
      .moveToElement('.swatch:nth-of-type(1)', 10, 10)
      .setValue('.swatch:nth-of-type(1) [type="text"]', '#000')
      .assert.cssProperty('.swatch:nth-of-type(1) .swatch__inner', 'background-color', 'rgba(0, 0, 0, 1)')
      .end();
  }
};
