import colorString from 'color-string';

export default class Swatch {
  constructor(color) {
    this.rgbArray = colorString.get.rgb(color);
    this.rgb = colorString.to.rgb(this.rgbArray);
    this.hex = colorString.to.hex(this.rgbArray);
  }
}
