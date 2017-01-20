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
  let store;
  let state;

  beforeEach(() => {
    SwatchesStub = () => <div />;
    swatchesStub = {
      removeSwatch: sinon.stub()
    };
    state = { swatches: { swatches: [{}, {}] } };
    store = storeMock(state);

    SwatchesContainer = proxyquire('../../../src/containers/SwatchesContainer', {
      '../components/swatches/Swatches': SwatchesStub,
      '../redux/modules/swatches': swatchesStub
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

  it('passes removeSwatch() to <Swatches />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchesStub);
    Swatches.props().removeSwatch();
    expect(swatchesStub.removeSwatch).to.have.been.calledOnce;
  });
});
