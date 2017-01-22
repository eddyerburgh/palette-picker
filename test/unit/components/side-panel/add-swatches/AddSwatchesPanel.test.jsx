import { shallow } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<AddSwatchesPanel />', () => {
  let props;
  let AddSwatchFormStub;
  let AddSwatchesPanel;

  beforeEach(() => {
    AddSwatchFormStub = () => <div />;
    AddSwatchesPanel = proxyquire('../../../../../src/components/side-panel/add-swatches/AddSwatchesPanel', {
      './AddSwatchForm': AddSwatchFormStub
    }).default;

    props = {
      addNewSwatch: () => {}
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
});
