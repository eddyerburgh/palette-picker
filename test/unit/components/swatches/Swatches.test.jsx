import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('Swatches', () => {
  let Swatches;
  let SwatchDragContainerStub;

  beforeEach(() => {
    SwatchDragContainerStub = () => <div />;
    Swatches = proxyquire('../../../../src/components/swatches/Swatches', {
      './SwatchDragContainer': SwatchDragContainerStub
    }).default;
  });

  it('renders a <Swatch /> for each object in state.swatches.swatches', () => {
    const swatches = [{}];
    const wrapper = mount(<Swatches swatches={swatches} />);
    expect(wrapper.find(SwatchDragContainerStub).length).to.equal(swatches.length);
  });

  it('passes height=full if number of swatches is less than 5', () => {
    const swatches = [{}, {}, {}, {}];
    const wrapper = mount(<Swatches swatches={swatches} />);
    const Swatch = wrapper.find(SwatchDragContainerStub).first();
    expect(Swatch.props().height).to.equal('whole');
  });

  it('passes height=half if number of swatches is greater than 4 but less than 9', () => {
    const swatches = [{}, {}, {}, {}, {}, {}];
    const wrapper = mount(<Swatches swatches={swatches} />);
    const Swatch = wrapper.find(SwatchDragContainerStub).first();
    expect(Swatch.props().height).to.equal('half');
  });

  it('passes height=third if number of swatches is greater than 9', () => {
    const swatches = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}];
    const wrapper = mount(<Swatches swatches={swatches} />);
    const Swatch = wrapper.find(SwatchDragContainerStub).first();
    expect(Swatch.props().height).to.equal('third');
  });
});

