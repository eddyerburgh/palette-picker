import Swatch from '../../../src/lib/Swatch';

describe('Swatch', () => {
  it('creates a Swatch object with the correct rgb and hex values when passed rgb to constructor', () => {
    const rgb = 'rgb(0, 0, 0)';
    const hex = '#000000';
    const swatch = new Swatch(rgb);

    expect(swatch.rgb).to.equal(rgb);
    expect(swatch.hex).to.equal(hex);
  });
});
