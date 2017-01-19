import colorString from 'color-string';
import shortId from 'shortid';
import contrast from 'contrast';

export default class Swatch {
  constructor(color) {
    this.rgbArray = colorString.get.rgb(color);
    this.rgb = colorString.to.rgb(this.rgbArray);
    this.hex = colorString.to.hex(this.rgbArray);
    this.lightness = contrast(this.hex);
    this.id = shortId.generate();
  }


}
