import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

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

  it('passes props.removeSwatch to each Swatch component', () => {
    const removeSwatch = sinon.stub();
    props.removeSwatch = removeSwatch;
    const wrapper = mount(<Swatches {...props} />);
    const Swatch = wrapper.find(SwatchStub).first();
    Swatch.props().removeSwatch();

    expect(removeSwatch).to.have.been.calledOnce;
  });
});
