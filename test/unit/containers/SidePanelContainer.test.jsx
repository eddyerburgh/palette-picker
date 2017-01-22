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
  let tabsActionsStub;
  let state;
  let store;

  beforeEach(() => {
    TabsStub = () => <div />;
    tabsActionsStub = {
      switchActiveTab: sinon.stub()
    };
    state = { tabs: { activeTab: 'active tab', tabs: ['tabs'] } };
    store = storeMock(state);

    SidePanelContainerStub = proxyquire('../../../src/containers/SidePanelContainer', {
      '../components/side-panel/Tabs': TabsStub,
      '../redux/modules/tabs': tabsActionsStub
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
});
