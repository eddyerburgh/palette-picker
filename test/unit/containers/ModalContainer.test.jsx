import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<ModalContainer />', () => {
  let ModalContainer;
  let modalMessageStub;
  let store;
  let state;

  beforeEach(() => {
    modalMessageStub = () => <div />;
    state = { modal: {} };
    store = storeMock(state);

    ModalContainer = proxyquire('../../../src/containers/ModalContainer', {
      '../components/modal/ModalMessage': modalMessageStub
    }
    ).default;
  });

  it('is rendered', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
      ); expect(wrapper).to.exist;
  });

  it('renders <ModalMessage />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
      ); expect(wrapper.find(modalMessageStub)).to.have.length(1);
  });

  it('passes state.modal to <ModalMessage />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ModalContainer />
      </Provider>
    );
    const modalMessageProps = wrapper.find(modalMessageStub).props();
    expect(modalMessageProps.modal).to.equal(state.modal);
  });
});
