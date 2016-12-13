import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
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
    state = { modal: {} };
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
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
      );
    expect(wrapper).to.exist;
  });

  it('renders <Modal />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
      );
    expect(wrapper.find(modalStub)).to.have.length(1);
  });

  it('passes state.modal to <Modal />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
    );
    const modalProps = wrapper.find(modalStub).props();
    expect(modalProps.modal).to.equal(state.modal);
  });

  it('maps dispatch to modalActions.closeModal', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
    );
    const modal = wrapper.find(modalStub);
    modal.props().closeModal();
    expect(modalActionsStub.closeModal).to.have.been.calledOnce;
  });
});
