import { shallow } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Swatches />', () => {
  let Swatches;
  let SwatchComponentStub;
  let props;

  beforeEach(() => {
    SwatchComponentStub = () => <div />;

    Swatches = proxyquire('../../../../src/components/swatches/Swatches', {
      './SwatchComponent': SwatchComponentStub
    }).default;

    props = {
      swatches: [{}, {}, {}]
    };
  });

  it('renders SwatchType for each swatch object passed in props', () => {
    const wrapper = shallow(<Swatches {...props} />);
    expect(wrapper.find(SwatchComponentStub)).to.have.length(props.swatches.length);
  });
});
