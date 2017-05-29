import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SidePanelContainer />', () => {
  let SidePanelContainer;
  let swatchesActionsStub;
  let tabsActionsStub;
  let SidePanelStub;
  let state;
  let store;

  beforeEach(() => {
    SidePanelStub = () => <div />;
    tabsActionsStub = {
      switchActiveTab: sinon.stub(),
    };
    swatchesActionsStub = {
      addNewSwatch: sinon.stub(),
    };
    state = {
      tabs: { activeTab: 'add swatches', tabs: ['add swatches'] },
      palettes: { palettes: [{ color: '' }, { color: '' }] },
      form: { color: '' },
    };
    store = storeMock(state);

    SidePanelContainer = proxyquire('../../../src/containers/SidePanelContainer', {
      '../components/side-panel/SidePanel': SidePanelStub,
      '../redux/modules/tabs': tabsActionsStub,
      '../redux/modules/swatches': swatchesActionsStub,
    }
    ).default;
  });

  it('renders <Tabs /> with props.activeTab', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    expect(wrapper.find(SidePanelStub).props().activeTab).to.equal(state.tabs.activeTab);
  });

  it('passes props.tabs to <SidePanel />', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    expect(wrapper.find(SidePanelStub).props().tabs).to.deep.equal(state.tabs.tabs);
  });

  it('maps dispatch to switchActiveTab and passes it to <SidePanel />', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    wrapper.find(SidePanelStub).props().switchActiveTab();
    expect(tabsActionsStub.switchActiveTab).to.have.been.calledOnce;
  });

  it('passes state.palettes.palettes to <SidePanel />', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    expect(wrapper.find(SidePanelStub).props().palettes).to.deep.equal(state.palettes.palettes);
  });

  it('passes state.form.color to <SidePanel />', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    expect(wrapper.find(SidePanelStub).props().color).to.equal(state.form.color);
  });

  it('maps dispatch to switchActiveTab and passes it to <SidePanel />', () => {
    const wrapper = mount(<SidePanelContainer store={store} />);
    wrapper.find(SidePanelStub).props().addNewSwatch();
    expect(swatchesActionsStub.addNewSwatch).to.have.been.calledOnce;
  });
});
