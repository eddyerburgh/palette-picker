import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<ModalContainer />', () => {
  let ModalContainer;
  let modalStub;
  let store;
  let state;

  beforeEach(() => {
    modalStub = () => <div />;
    state = { modal: {} };
    store = storeMock(state);

    ModalContainer = proxyquire('../../../src/containers/ModalContainer', {
      '../components/modal/Modal': modalStub
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
});
