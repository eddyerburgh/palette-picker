import { mount } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

proxyquire.noCallThru();

describe('<Tabs />', () => {
  let Tabs;
  let TabStub;
  let props;

  beforeEach(() => {
    TabStub = () => <div />;

    Tabs = proxyquire('../../../../../src/components/side-panel/tabs/Tabs', {
      './Tab': TabStub
    }).default;

    props = {
      tabs: ['active tab', ''],
      activeTab: 'active tab',
      switchActiveTab: () => {}
    };
  });

  it('renders a Tab for each tab object passed in props', () => {
    const wrapper = mount(<Tabs {...props} />);
    expect(wrapper.find(TabStub)).to.have.length(props.tabs.length);
  });

  it('passes props.switchActiveTab to each Swatch component', () => {
    const switchActiveTab = sinon.stub();
    props.switchActiveTab = switchActiveTab;
    const wrapper = mount(<Tabs {...props} />);
    const Swatch = wrapper.find(TabStub).first();
    Swatch.props().switchActiveTab();

    expect(switchActiveTab).to.have.been.calledOnce;
  });

  it('gives prop name to each tab', () => {
    const wrapper = mount(<Tabs {...props} />);
    expect(wrapper.find(TabStub).first().props().name).to.equal(props.tabs[0]);
  });

  it('gives prop isActive to active tab', () => {
    const wrapper = mount(<Tabs {...props} />);
    expect(wrapper.find(TabStub).first().props().isActive).to.equal(true);
    expect(wrapper.find(TabStub).at(1).props().isActive).to.equal(false);
  });
});
