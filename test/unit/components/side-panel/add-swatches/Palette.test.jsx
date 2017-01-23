import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

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
      colors: ['#555', '#666']
    };
    Palette = proxyquire('../../../../../src/components/side-panel/add-swatches/Palette', {
      './PaletteColor': PaletteColorStub
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

  it('renders props.name in .palette__name', () => {
    const wrapper = shallow(<Palette {...props} />);
    expect(wrapper.find('.palette__name').text()).to.equal(props.name);
  });

  it('calls addNewSwatch with each colorfor each props.color when .palette__name is clicked', () => {
    const wrapper = shallow(<Palette {...props} />);
    wrapper.find('.palette__name').simulate('click');
    expect(props.addNewSwatch.args[0][0]).to.equal(props.colors[0]);
    expect(props.addNewSwatch).to.have.callCount(props.colors.length);
  });
});
