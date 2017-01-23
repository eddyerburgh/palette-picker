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
      swatches: [{ rgb: '', hex: '', id: 1 }, { rgb: '', hex: '', id: 2 }, { rgb: '', hex: '', id: 3 }],
      displayNewModal: sinon.stub(),
      replaceSwatch: sinon.stub(),
      removeSwatch: sinon.stub()
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

  it('passes props.removeSwatch to each Swatch component', () => {
    const wrapper = mount(<Swatches {...props} />);
    const Swatch = wrapper.find(SwatchStub).first();
    Swatch.props().removeSwatch();

    expect(props.removeSwatch).to.have.been.calledOnce;
  });

  it('passes props.replaceSwatch to each Swatch component', () => {
    const wrapper = mount(<Swatches {...props} />);
    const Swatch = wrapper.find(SwatchStub).first();
    Swatch.props().replaceSwatch();

    expect(props.replaceSwatch).to.have.been.calledOnce;
  });

  it('passes props.displayNewModal to each Swatch component', () => {
    const wrapper = mount(<Swatches {...props} />);
    const Swatch = wrapper.find(SwatchStub).first();
    Swatch.props().displayNewModal();

    expect(props.displayNewModal).to.have.been.calledOnce;
  });
});
