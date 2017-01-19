import { shallow } from 'enzyme';
import React from 'react';
import SwatchComponent from '../../../../src/components/swatches/Swatch';

describe('<Swatch />', () => {
  let props;

  beforeEach(() => {
    props = {
      rgb: 'rgb(4,5,6)'
    };
  });

  it('renders SwatchType for each swatch object passed in props', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('div')).to.have.style('background', props.rgb);
  });
});
