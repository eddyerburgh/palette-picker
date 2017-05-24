import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<ModalContainer />', () => {
  let ModalContainer;
  let modalStub;
  let modalActionsStub;
  let store;
  let state;

  beforeEach(() => {
    modalStub = () => <div />;
    state = { modal: { display: true } };
    store = storeMock(state);
    modalActionsStub = {
      closeModal: sinon.spy()
    };

    ModalContainer = proxyquire('../../../src/containers/ModalContainer', {
      '../components/modal/Modal': modalStub,
      '../redux/modules/modal': modalActionsStub
    }
    ).default;
  });

  it('is rendered', () => {
    const wrapper = mount(<ModalContainer store={store} />);
    expect(wrapper).to.exist;
  });

  it('renders <Modal /> if prosp.modal.display is true', () => {
    const wrapper = mount(<ModalContainer store={store} />);
    expect(wrapper.find(modalStub)).to.have.length(1);
  });

  it('does not render <Modal /> if prosp.modal.display is false', () => {
    state.modal.display = false;
    const wrapper = mount(<ModalContainer store={store} />);
    expect(wrapper.find(modalStub)).to.have.length(0);
  });

  it('passes state.modal to <Modal />', () => {
    const wrapper = mount(<ModalContainer store={store} />);
    const modalProps = wrapper.find(modalStub).props();
    expect(modalProps.modal).to.equal(state.modal);
  });

  it('maps dispatch to modalActions.closeModal', () => {
    const wrapper = mount(<ModalContainer store={store} />);
    const modal = wrapper.find(modalStub);
    modal.props().closeModal();
    expect(modalActionsStub.closeModal).to.have.been.calledOnce;
  });
});
