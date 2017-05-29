import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import CloseButton from '../../../../src/components/modal/CloseButton';


describe('<CloseButton />', () => {
  let props;

  beforeEach(() => {
    props = {
      clickHandler: sinon.spy(),
      value: 'test value',
    };
  });

  it('renders', () => {
    const wrapper = mount(<CloseButton {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('renders an input with type button', () => {
    const wrapper = mount(<CloseButton {...props} />);
    const input = wrapper.find('input');
    expect(input).to.have.length(1);
    expect(input).to.have.prop('type').equal('button');
  });

  it('renders an input that calls props.closeModal on click', () => {
    const wrapper = mount(<CloseButton {...props} />);
    const input = wrapper.find('input');
    input.simulate('click');
    expect(props.clickHandler).to.have.been.calledOnce;
  });

  it('renders an input with value equal to props.value', () => {
    const wrapper = mount(<CloseButton {...props} />);
    const input = wrapper.find('input');
    expect(input).to.have.prop('value').equal(props.value);
  });
});
