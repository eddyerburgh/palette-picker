import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import PaletteColor from '../../../../../src/components/side-panel/add-swatches/PaletteColor';

describe('<PaletteColor />', () => {
  let props;

  beforeEach(() => {
    props = {
      addNewSwatch: sinon.stub(),
      color: '#666'
    };
  });

  it('has a background-color equal to props.color', () => {
    const wrapper = shallow(<PaletteColor {...props} />);
    expect(wrapper.find('.palette__color')).to.have.to.have.style('background-color', props.color);
  });

  it('calls props.addNewSwatch with props.color when clicked', () => {
    const wrapper = shallow(<PaletteColor {...props} />);
    wrapper.simulate('click');
    expect(props.addNewSwatch).to.have.been.calledWith(props.color);
    expect(props.addNewSwatch).to.have.been.calledOnce;
  });
});
