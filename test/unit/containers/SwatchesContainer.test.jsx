import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SwatchesContainer />', () => {
  let SwatchesContainer;
  let SwatchesStub;
  let store;
  let state;

  beforeEach(() => {
    SwatchesStub = () => <div />;
    state = { swatches: { swatches: [{}, {}] } };
    store = storeMock(state);

    SwatchesContainer = proxyquire('../../../src/containers/SwatchesContainer', {
      '../components/swatches/Swatches': SwatchesStub
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
});
