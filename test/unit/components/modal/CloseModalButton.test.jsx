import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import CloseModalButton from '../../../../src/components/modal/CloseModalButton';


describe('<CloseModalButton />', () => {
  let props;

  beforeEach(() => {
    props = {
      closeModal: sinon.spy()
    };
  });

  it('renders', () => {
    const wrapper = mount(<CloseModalButton {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('renders an input with type button', () => {
    const wrapper = mount(<CloseModalButton {...props} />);
    const input = wrapper.find('input');
    expect(input).to.have.length(1);
    expect(input).to.have.prop('type').equal('button');
  });

  it('renders an input that calls props.closeModal on click', () => {
    const wrapper = mount(<CloseModalButton {...props} />);
    const input = wrapper.find('input');
    input.simulate('click');
    expect(props.closeModal).to.have.been.calledOnce;
  });
});
