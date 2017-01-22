import { shallow } from 'enzyme';
import React from 'react';
import proxyquire from 'proxyquire';
import sinon from 'sinon';

proxyquire.noCallThru();

describe('<SidePanel />', () => {
  let props;
  let AddSwatchesPanelStub;
  let SidePanel;
  let TabsStub;

  beforeEach(() => {
    TabsStub = () => <div />;
    AddSwatchesPanelStub = () => <div />;
    SidePanel = proxyquire('../../../../src/components/side-panel/SidePanel', {
      './add-swatches/AddSwatchesPanel': AddSwatchesPanelStub,
      './tabs/Tabs': TabsStub
    }).default;

    props = {
      addNewSwatch: sinon.stub(),
      switchActiveTab: sinon.stub(),
      activeTab: 'add swatches',
      tabs: ['add swatches']
    };
  });

  it('renders Tabs with props.activeTab passed down', () => {
    const wrapper = shallow(<SidePanel {...props} />);
    const tabs = wrapper.find(TabsStub);
    expect(tabs.props().activeTab).to.equal(props.activeTab);
  });

  it('passes props.tabs to Tabs', () => {
    const wrapper = shallow(<SidePanel {...props} />);
    const tabs = wrapper.find(TabsStub);
    expect(tabs.props().tabs).to.equal(props.tabs);
  });

  it('passes props.switchActiveTab to Tabs', () => {
    const wrapper = shallow(<SidePanel {...props} />);
    const switchActiveTab = wrapper.find(TabsStub).props().switchActiveTab;
    switchActiveTab();
    expect(props.switchActiveTab).to.have.been.calledOnce;
  });

  it('renders AddSwatchesPanel if props.activePanel equals "add swatches"', () => {
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(AddSwatchesPanelStub)).to.have.length(1);
  });

  it('does not render AddSwatchesPanel if props.activePanel doesnot equal "add-swatches"', () => {
    props.activeTab = 'not add-swatches';
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(AddSwatchesPanelStub)).to.have.length(0);
  });

  it('passes addNewSwatch to AddSwatchesPanel', () => {
    const wrapper = shallow(<SidePanel {...props} />);
    const addNewSwatch = wrapper.find(AddSwatchesPanelStub).props().addNewSwatch;
    addNewSwatch();
    expect(props.addNewSwatch).to.have.been.calledOnce;
  });
});
