import { shallow } from 'enzyme';
import React from 'react';
import Modal from '../../../../src/components/modal/Modal';
import CloseButton from '../../../../src/components/modal/CloseButton';

describe('<Modal />', () => {
  let props;

  beforeEach(() => {
    props = {
      modal: { message: 'test message', heading: 'heading' },
      closeModal: () => {},
    };
  });

  it('renders props.modal.message', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.text()).to.contain(props.modal.message);
  });

  it('passes props.modal.message to ModalMessage', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.text()).to.contain(props.modal.heading);
  });

  it('renders CloseButton', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButton)).to.have.length(1);
  });

  it('renders CloseButton with value Close', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButton)).to.have.prop('value').equal('Close');
  });

  it('passes props.closeModal to CloseButton as clickHandler', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButton)).to.have.prop('clickHandler').equal(props.closeModal);
  });
});
