import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<FullScreenMessageContainer />', () => {
  let FullScreenMessageContainer;
  let FullScreenMessageStub;
  let fullScreenMessageActionsStub;
  let store;
  let state;

  beforeEach(() => {
    FullScreenMessageStub = () => <div />;
    fullScreenMessageActionsStub = {
      closeFullScreenMessage: sinon.stub()
    };
    state = { fullScreenMessage: { display: true, rgb: 'rgb', fontColor: 'light' } };
    store = storeMock(state);

    FullScreenMessageContainer = proxyquire('../../../src/containers/FullScreenMessageContainer', {
      '../components/full-screen-message/FullScreenMessage': FullScreenMessageStub,
      '../redux/modules/fullScreenMessage': fullScreenMessageActionsStub
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

  it('passes state.fullScreenMessage.fontColor to <FullScreenMessage /> as color', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    const FullScreenMessageProps = wrapper.find(FullScreenMessageStub).props();
    expect(FullScreenMessageProps.color).to.equal(state.fullScreenMessage.fontColor);
  });

  it('passes state.fullScreenMessage.rgb to <FullScreenMessage /> as background', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    const FullScreenMessageProps = wrapper.find(FullScreenMessageStub).props();
    expect(FullScreenMessageProps.background).to.equal(state.fullScreenMessage.rgb);
  });

  it('maps dispatch to closeFullScreenMessage and passes to <FullScreenMessage />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <FullScreenMessageContainer />
      </Provider>
    );
    const FullScreenMessageProps = wrapper.find(FullScreenMessageStub).props();
    FullScreenMessageProps.closeMessage();
    expect(fullScreenMessageActionsStub.closeFullScreenMessage).to.have.been.calledOnce;
  });
});
