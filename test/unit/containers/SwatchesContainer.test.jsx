import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SwatchesContainer />', () => {
  let SwatchesContainer;
  let SwatchesStub;
  let swatchesStub;
  let fullScreenMessageStub;
  let modalStub;
  let store;
  let state;

  beforeEach(() => {
    SwatchesStub = () => <div />;
    swatchesStub = {
      removeSwatch: sinon.stub(),
      replaceSwatch: sinon.stub(),
      moveSwatch: sinon.stub(),
    };
    modalStub = {
      displayNewModal: sinon.stub(),
    };
    fullScreenMessageStub = {
      displayNewFullScreenMessage: sinon.stub(),
    };
    state = { swatches: { swatches: [{ hex: '#666666', id: '1' }, { hex: '#777777', id: '2' }] } };
    store = storeMock(state);

    SwatchesContainer = proxyquire('../../../src/containers/SwatchesContainer', {
      '../components/swatches/Swatches': SwatchesStub,
      '../redux/modules/swatches': swatchesStub,
      '../redux/modules/modal': modalStub,
      '../redux/modules/fullScreenMessage': fullScreenMessageStub,
    }
    ).default;
  });

  it('maps dispatch to displayNewFullScreenMessage() and passes it to <Swatches />', () => {
    const wrapper = mount(<SwatchesContainer store={store} />);
    const Swatches = wrapper.find(SwatchesStub).first();
    Swatches.props().displayNewFullScreenMessage();
    expect(fullScreenMessageStub.displayNewFullScreenMessage).to.have.been.calledOnce;
  });

  it('maps dispatch to replaceSwatch() and passes it to <Swatches />', () => {
    const wrapper = mount(<SwatchesContainer store={store} />);

    const Swatches = wrapper.find(SwatchesStub).first();
    Swatches.props().replaceSwatch();
    expect(swatchesStub.replaceSwatch).to.have.been.calledOnce;
  });

  it('maps dispatch to removeSwatch() and passes it to <Swatches />', () => {
    const wrapper = mount(<SwatchesContainer store={store} />);

    const Swatches = wrapper.find(SwatchesStub).first();
    Swatches.props().removeSwatch();
    expect(swatchesStub.removeSwatch).to.have.been.calledOnce;
  });

  it('maps dispatch to displayNewModal() and passes it to <Swatches />', () => {
    const wrapper = mount(<SwatchesContainer store={store} />);
    const Swatches = wrapper.find(SwatchesStub).first();
    Swatches.props().displayNewModal();
    expect(modalStub.displayNewModal).to.have.been.calledOnce;
  });

  it('maps dispatch to moveSwatch() and passes it to <Swatches />', () => {
    const wrapper = mount(<SwatchesContainer store={store} />);
    const Swatches = wrapper.find(SwatchesStub).first();
    Swatches.props().moveSwatch();
    expect(swatchesStub.moveSwatch).to.have.been.calledOnce;
  });
});
