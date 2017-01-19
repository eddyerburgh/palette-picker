import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Swatches />', () => {
  let Swatches;
  let SwatchStub;
  let props;

  beforeEach(() => {
    SwatchStub = () => <div />;

    Swatches = proxyquire('../../../../src/components/swatches/Swatches', {
      './Swatch': SwatchStub
    }).default;

    props = {
      swatches: [{ rgb: '', hex: '', id: 1 }, { rgb: '', hex: '', id: 2 }, { rgb: '', hex: '', id: 3 }]
    };
  });

  it('renders SwatchType for each swatch object passed in props', () => {
    const wrapper = mount(<Swatches {...props} />);
    expect(wrapper.find(SwatchStub)).to.have.length(props.swatches.length);
  });
});
