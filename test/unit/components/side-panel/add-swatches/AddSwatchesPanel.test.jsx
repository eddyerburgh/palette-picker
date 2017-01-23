import { shallow } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<AddSwatchesPanel />', () => {
  let props;
  let AddSwatchFormStub;
  let AddSwatchesPanel;
  let PaletteStub;

  beforeEach(() => {
    AddSwatchFormStub = () => <div />;
    PaletteStub = () => <div />;
    AddSwatchesPanel = proxyquire('../../../../../src/components/side-panel/add-swatches/AddSwatchesPanel', {
      './AddSwatchForm': AddSwatchFormStub,
      './Palette': PaletteStub
    }).default;

    props = {
      addNewSwatch: () => {},
      palettes: [
        { color: '', name: '' }, { color: '', name: '' }
      ]
    };
  });

  it('renders AddSwatchFrom', () => {
    const wrapper = shallow(<AddSwatchesPanel {...props} />);
    expect(wrapper.find(AddSwatchFormStub)).to.have.length(1);
  });

  it('passes addNewSwatch to AddSwatchFrom', () => {
    const wrapper = shallow(<AddSwatchesPanel {...props} />);
    const addNewSwatch = wrapper.find(AddSwatchFormStub).props().addNewSwatch;
    expect(typeof addNewSwatch).to.equal('function');
  });

  it('renders Palette for each props.palette object', () => {
    const wrapper = shallow(<AddSwatchesPanel {...props} />);
    expect(wrapper.find(PaletteStub).length).to.equal(props.palettes.length);
  });

  it('passes props.palette[i] to each Palette', () => {
    const wrapper = shallow(<AddSwatchesPanel {...props} />);
    expect(wrapper.find(PaletteStub).first().props()).to.shallowDeepEqual(props.palettes[0]);
  });

  it('passes addNewSwatch to each Palette', () => {
    const wrapper = shallow(<AddSwatchesPanel {...props} />);
    const addNewSwatch = wrapper.find(PaletteStub).first().props().addNewSwatch;
    expect(typeof addNewSwatch).to.equal('function');
  });
});
