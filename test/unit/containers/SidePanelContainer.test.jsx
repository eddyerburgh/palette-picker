import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import proxyquire from 'proxyquire';
import sinon from 'sinon';
import storeMock from '../../resources/mocks/store.mock';

proxyquire.noCallThru();

describe('<SidePanelContainer />', () => {
  let SidePanelContainerStub;
  let TabsStub;
  let AddSwatchesPanelStub;
  let swatchesActionsStub;
  let tabsActionsStub;
  let state;
  let store;

  beforeEach(() => {
    TabsStub = () => <div />;
    AddSwatchesPanelStub = () => <div />;
    tabsActionsStub = {
      switchActiveTab: sinon.stub()
    };
    swatchesActionsStub = {
      addNewSwatch: sinon.stub()
    };
    state = {
      tabs: { activeTab: 'add swatches', tabs: ['add swatches'] },
      palettes: { palettes: [{ color: '' }, { color: '' }] }
    };
    store = storeMock(state);

    SidePanelContainerStub = proxyquire('../../../src/containers/SidePanelContainer', {
      '../components/side-panel/tabs/Tabs': TabsStub,
      '../components/side-panel/add-swatches/AddSwatchesPanel': AddSwatchesPanelStub,
      '../redux/modules/tabs': tabsActionsStub,
      '../redux/modules/swatches': swatchesActionsStub
    }
    ).default;
  });

  it('renders <Tabs /> with props.activeTab', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    expect(wrapper.find(TabsStub).props().activeTab).to.equal(state.tabs.activeTab);
  });

  it('passes props.tabs to <Tabs />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    expect(wrapper.find(TabsStub).props().tabs).to.deep.equal(state.tabs.tabs);
  });

  it('maps dispatch to switchActiveTab and passes it to <Tabs />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    const TabsProps = wrapper.find(TabsStub).props();
    TabsProps.switchActiveTab();
    expect(tabsActionsStub.switchActiveTab).to.have.been.calledOnce;
  });

  it('does not render <AddSwatchesPanel /> if props.activeTab do not equal "add swatches"', () => {
    state.tabs.activeTab = 'not add swatches';
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    const AddSwatchesPanel = wrapper.find(AddSwatchesPanelStub);
    expect(AddSwatchesPanel.length).to.equal(0);
  });

  it('passes state.palettes.palettes to <AddSwatchesPanel />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    const AddSwatchesPanelProps = wrapper.find(AddSwatchesPanelStub).props();
    expect(AddSwatchesPanelProps.palettes).to.deep.equal(state.palettes.palettes);
  });

  it('maps dispatch to switchActiveTab and passes it to <AddSwatchesPanel />', () => {
    const wrapper = mount(
      <Provider store={store}>
        <SidePanelContainerStub />
      </Provider>
    );
    const AddSwatchesPanelProps = wrapper.find(AddSwatchesPanelStub).props();
    AddSwatchesPanelProps.addNewSwatch();
    expect(swatchesActionsStub.addNewSwatch).to.have.been.calledOnce;
  });
});
