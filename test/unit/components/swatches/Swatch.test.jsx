import { shallow } from 'enzyme';
import React from 'react';
import SwatchComponent from '../../../../src/components/swatches/Swatch';

describe('<Swatch />', () => {
  let props;

  beforeEach(() => {
    props = {
      rgb: 'rgb(4,5,6)',
      lightness: 'light'
    };
  });

  it('sets background to props.rgb', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('div')).to.have.style('background', props.rgb);
  });

  it('renders div with class color-light if props.lightness is light', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('div').hasClass('color-light')).to.equal(true);
  });

  it('renders div with class color-dark if props.lightness is dark', () => {
    props.lightness = 'dark';
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('div').hasClass('color-dark')).to.equal(true);
  });
});
