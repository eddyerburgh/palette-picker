import { shallow, mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Modal />', () => {
  let Modal;
  let ModalMessageStub;
  let CloseButtonStub;
  let props;

  beforeEach(() => {
    ModalMessageStub = () => <div />;
    CloseButtonStub = () => <div />;

    Modal = proxyquire('../../../../src/components/modal/Modal', {
      './ModalMessage': ModalMessageStub,
      './CloseButton': CloseButtonStub
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

  it('renders CloseButton', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButtonStub)).to.have.length(1);
  });

  it('renders CloseButton with value Close', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButtonStub)).to.have.prop('value').equal('Close');
  });

  it('passes props.closeModal to CloseButton as clickHandler', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find(CloseButtonStub)).to.have.prop('clickHandler').equal(props.closeModal);
  });
});
