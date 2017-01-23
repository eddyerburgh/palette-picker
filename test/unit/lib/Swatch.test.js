import shortId from 'shortid';
import Swatch from '../../../src/lib/Swatch';

describe('Swatch', () => {
  it('creates a Swatch object with the correct rgb and hex values when passed rgb to constructor', () => {
    const rgb = 'rgb(0, 0, 0)';
    const hex = '#000000';
    const swatch = new Swatch(rgb);

    expect(swatch.rgb).to.equal(rgb);
    expect(swatch.hex).to.equal(hex);
  });

  it('creates a Swatch object with the correct rgb and hex values when passed hex to constructor', () => {
    const rgb = 'rgb(0, 0, 0)';
    const hex = '#000000';
    const swatch = new Swatch(hex);

    expect(swatch.rgb).to.equal(rgb);
    expect(swatch.hex).to.equal(hex);
  });

  it('creates Swatch object with fontColor set to "light" if fontColor is > 50', () => {
    const hex = '#fff';
    const swatch = new Swatch(hex);

    expect(swatch.fontColor).to.equal('dark');
  });

  it('creates Swatch object with fontColor set to "dark" if fontColor is < 50', () => {
    const hex = '#000';
    const swatch = new Swatch(hex);

    expect(swatch.fontColor).to.equal('light');
  });

  it('generates an id string', () => {
    const hex = '#000000';
    const swatch = new Swatch(hex);

    expect(shortId.isValid(swatch.id)).to.equal(true);
  });
});
