import { shallow, mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Modal />', () => {
  let Modal;
  let ModalMessageStub;
  let CloseModalButtonStub;
  let props;

  beforeEach(() => {
    ModalMessageStub = () => <div />;
    CloseModalButtonStub = () => <div />;

    Modal = proxyquire('../../../../src/components/modal/Modal', {
      './ModalMessage': ModalMessageStub,
      './CloseModalButton': CloseModalButtonStub
    }).default;

    props = {
      modal: { message: 'test message', heading: 'heading' },
      closeModal: () => {}
    };
  });

  it('is rendered', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).to.have.length(1);
  });

  it('renders ModalMessage', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(ModalMessageStub)).to.have.length(1);
  });

  it('passes props.modal.message to ModalMessage', () => {
    const wrapper = mount(<Modal {...props} />);
    expect(wrapper.find(ModalMessageStub)).to.have.prop('message').equal(props.modal.message);
  });

  it('passes props.modal.message to ModalMessage', () => {
    const wrapper = mount(<Modal {...props} />);
    expect(wrapper.find(ModalMessageStub)).to.have.prop('heading').equal(props.modal.heading);
  });

  it('renders CloseModalButton', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseModalButtonStub)).to.have.length(1);
  });

  it('passes props.closeModal to CloseModalButton', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseModalButtonStub)).to.have.prop('closeModal').equal(props.closeModal);
  });
});
