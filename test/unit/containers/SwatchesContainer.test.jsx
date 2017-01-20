import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SwatchesContainer />', () => {
  let SwatchesContainer;
  let SwatchesStub;
  let swatchesStub;
  let modalStub;
  let store;
  let state;

  beforeEach(() => {
    SwatchesStub = () => <div />;
    swatchesStub = {
      removeSwatch: sinon.stub()
    };
    modalStub = {
      displayNewModal: sinon.stub()
    };
    state = { swatches: { swatches: [{}, {}] } };
    store = storeMock(state);

    SwatchesContainer = proxyquire('../../../src/containers/SwatchesContainer', {
      '../components/swatches/Swatches': SwatchesStub,
      '../redux/modules/swatches': swatchesStub,
      '../redux/modules/modal': modalStub
    }
    ).default;
  });

  it('passes state.swatches to <Swatches />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchesStub);
    expect(Swatches.props().swatches).to.equal(state.swatches.swatches);
  });

  it('maps dispatch to removeSwatch() and passes it to <Swatches />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchesStub);
    Swatches.props().removeSwatch();
    expect(swatchesStub.removeSwatch).to.have.been.calledOnce;
  });

  it('maps dispatch to displayNewModal() and passes it to <Swatches />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchesStub);
    Swatches.props().displayNewModal();
    expect(modalStub.displayNewModal).to.have.been.calledOnce;
  });
});
