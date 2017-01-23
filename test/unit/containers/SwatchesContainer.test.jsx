import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SwatchesContainer />', () => {
  let SwatchesContainer;
  let SwatchStub;
  let swatchesStub;
  let modalStub;
  let store;
  let state;

  beforeEach(() => {
    SwatchStub = () => <div />;
    swatchesStub = {
      removeSwatch: sinon.stub(),
      replaceSwatch: sinon.stub()
    };
    modalStub = {
      displayNewModal: sinon.stub()
    };
    state = { swatches: { swatches: [{ hex: '#666666', id: '1' }, { hex: '#777777', id: '2' }] } };
    store = storeMock(state);

    SwatchesContainer = proxyquire('../../../src/containers/SwatchesContainer', {
      '../components/swatches/Swatch': SwatchStub,
      '../redux/modules/swatches': swatchesStub,
      '../redux/modules/modal': modalStub
    }
    ).default;
  });

  it('renders a <Swatch /> for each object in state.swatches.swatches', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatch = wrapper.find(SwatchStub).first();
    expect(Swatch.props()).to.shallowDeepEqual(state.swatches.swatches[0]);
  });

  it('maps dispatch to replaceSwatch() and passes it to <Swatch />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchStub).first();
    Swatches.props().replaceSwatch();
    expect(swatchesStub.replaceSwatch).to.have.been.calledOnce;
  });

  it('maps dispatch to removeSwatch() and passes it to <Swatch />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchStub).first();
    Swatches.props().removeSwatch();
    expect(swatchesStub.removeSwatch).to.have.been.calledOnce;
  });

  it('maps dispatch to displayNewModal() and passes it to <Swatch />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SwatchesContainer />
      </Provider>
    );
    const Swatches = wrapper.find(SwatchStub).first();
    Swatches.props().displayNewModal();
    expect(modalStub.displayNewModal).to.have.been.calledOnce;
  });
});
