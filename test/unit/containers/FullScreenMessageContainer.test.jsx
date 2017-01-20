import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<FullScreenMessageContainer />', () => {
  let FullScreenMessageContainer;
  let FullScreenMessageStub;
  let store;
  let state;

  beforeEach(() => {
    FullScreenMessageStub = () => <div />;
    state = { fullScreenMessage: { display: true } };
    store = storeMock(state);

    FullScreenMessageContainer = proxyquire('../../../src/containers/FullScreenMessageContainer', {
      '../components/full-screen-message/FullScreenMessage': FullScreenMessageStub
    }
    ).default;
  });

  it('renders <FullScreenMessage /> if props.modal.display is true', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    expect(wrapper.find(FullScreenMessageStub)).to.have.length(1);
  });

  it('does not <FullScreenMessage /> if props.modal.display is false', () => {
    state.fullScreenMessage.display = false;
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    expect(wrapper.find(FullScreenMessageStub)).to.have.length(0);
  });

  it('passes state.fullScreenMessage.message to <FullScreenMessage />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    const FullScreenMessageProps = wrapper.find(FullScreenMessageStub).props();
    expect(FullScreenMessageProps.message).to.equal(state.fullScreenMessage.message);
  });
});
