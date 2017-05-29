import proxyquire from 'proxyquire';
import sinon from 'sinon';

describe('validate', () => {
  let validate;
  let isColorStub;

  beforeEach(() => {
    isColorStub = sinon.stub();

    validate = proxyquire('../../../src/lib/validate', {
      'is-color': isColorStub,
    }).default;
  });

  it('returns empty object if isColor returns true', () => {
    const color = 'color';
    isColorStub.withArgs(color).returns(true);
    expect(validate({ color })).to.deep.equal({});
  });

  it('returns object with Color required property if color is null', () => {
    const color = null;
    expect(validate({ color })).to.deep.equal({ color: 'Required' });
  });

  it('returns object with Not valid color if isColor returns false', () => {
    const color = 'color';
    isColorStub.withArgs(color).returns(false);
    expect(validate({ color })).to.deep.equal({ color: 'Not valid color' });
  });
});
