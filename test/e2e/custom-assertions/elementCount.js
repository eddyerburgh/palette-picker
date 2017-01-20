/* eslint-disable no-shadow */

exports.assertion = function elementCount(selector, count) {
  this.message = `Testing if element <${selector}> has count: ${count}`;
  this.expected = count;
  this.pass = val => val === this.expected;
  this.value = res => res.value;
  this.command = (cb) => {
    const self = this;
    return this.api.execute(
      selector => document.querySelectorAll(selector).length, [selector], (res) => {
        cb.call(self, res);
      });
  };
};
