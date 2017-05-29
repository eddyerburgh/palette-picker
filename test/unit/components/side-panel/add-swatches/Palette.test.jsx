import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import Swatch from '../../../../../src/lib/Swatch';

proxyquire.noCallThru();

describe('<Palette />', () => {
  let Palette;
  let PaletteColorStub;
  let props;

  beforeEach(() => {
    PaletteColorStub = () => <div />;
    props = {
      addNewSwatch: sinon.spy(),
      name: 'palette',
      colors: ['#555666', '#666666'],
    };
    Palette = proxyquire('../../../../../src/components/side-panel/add-swatches/Palette', {
      './PaletteColor': PaletteColorStub,
    }).default;
  });

  it('renders PaletteColor for each color in props.colors', () => {
    const wrapper = shallow(<Palette {...props} />);
    expect(wrapper.find(PaletteColorStub)).to.have.length(2);
  });

  it('passes addNewSwatch to each PaletteColor', () => {
    const wrapper = shallow(<Palette {...props} />);
    wrapper.find(PaletteColorStub).first().props().addNewSwatch();
    expect(props.addNewSwatch).to.have.been.calledOnce;
  });

  it('calls addNewSwatch with each colorfor each props.color when button is clicked and dispalyds full screen message', () => {
    props.displayNewFullScreenMessage = sinon.stub();
    const wrapper = shallow(<Palette {...props} />);
    wrapper.find('button').simulate('click');
    const argument = props.addNewSwatch.args[0][0];
    expect(argument).to.be.instanceOf(Swatch);
    expect(argument.hex).to.equal(props.colors[0]);
    expect(props.addNewSwatch).to.have.callCount(props.colors.length);
    expect(props.displayNewFullScreenMessage).to.be.calledWith('Palette added!');
  });
});
