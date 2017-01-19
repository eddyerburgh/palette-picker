import colorString from 'color-string';
import shortId from 'shortid';

export default class Swatch {
  constructor(color) {
    this.rgbArray = colorString.get.rgb(color);
    this.rgb = colorString.to.rgb(this.rgbArray);
    this.hex = colorString.to.hex(this.rgbArray);

    this.id = shortId.generate();
  }
}
