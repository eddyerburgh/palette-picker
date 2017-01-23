import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import PaletteColor from '../../../../../src/components/side-panel/add-swatches/PaletteColor';
import Swatch from '../../../../../src/lib/Swatch';

describe('<PaletteColor />', () => {
  let props;

  beforeEach(() => {
    props = {
      addNewSwatch: sinon.stub(),
      color: '#666111'
    };
  });

  it('has a background-color equal to props.color', () => {
    const wrapper = shallow(<PaletteColor {...props} />);
    expect(wrapper.find('.palette__color')).to.have.to.have.style('background-color', props.color);
  });

  it('calls props.addNewSwatch with Swatch instance when clicked', () => {
    const wrapper = shallow(<PaletteColor {...props} />);
    wrapper.simulate('click');
    const argument = props.addNewSwatch.args[0][0];
    expect(argument).to.be.instanceOf(Swatch);
    expect(argument.hex).to.equal(props.color);
    expect(props.addNewSwatch).to.have.been.calledOnce;
  });
});
