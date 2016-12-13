import mocha from 'mocha';
import chai from 'chai';
import { jsdom } from 'jsdom';
import chaiEnzyme from 'chai-enzyme';

// use chai plugins
chai.use(chaiEnzyme());

// add testing globals
global.mocha = mocha;
global.expect = chai.expect;

// setup jsdom
const exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};
