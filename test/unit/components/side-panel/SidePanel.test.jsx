import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import SidePanel from '../../../../src/components/side-panel/SidePanel';
import Tabs from '../../../../src/components/side-panel/tabs/Tabs';
import AddSwatchesPanel from '../../../../src/components/side-panel/add-swatches/AddSwatchesPanel';
import AboutPanel from '../../../../src/components/side-panel/about/AboutPanel';

describe('<SidePanel {...props} />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('renders <Tabs /> with props.activeTab', () => {
    props.activeTab = 'active tab';
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(Tabs).props().activeTab).to.equal(props.activeTab);
  });

  it('passes props.tabs to <Tabs />', () => {
    props.tabs = [{}, {}];
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(Tabs).props().tabs).to.deep.equal(props.tabs);
  });

  it('passes switchActiveTab to Tabs <Tabs />', () => {
    props.switchActiveTab = sinon.stub();
    const wrapper = shallow(<SidePanel {...props} />);
    wrapper.find(Tabs).props().switchActiveTab();
    expect(props.switchActiveTab).to.have.been.calledOnce;
  });

  it('does not render <AddSwatchesPanel /> if props.activeTab do not equal "add swatches"', () => {
    props.activeTab = 'not add swatches';
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(AddSwatchesPanel).length).to.equal(0);
  });

  it('passes state.palettes.palettes to <AddSwatchesPanel />', () => {
    props.activeTab = 'add swatches';
    props.palettes = [{}];
    const wrapper = shallow(<SidePanel {...props} />);
    const AddSwatchesPanelProps = wrapper.find(AddSwatchesPanel).props();
    expect(AddSwatchesPanelProps.palettes).to.deep.equal(props.palettes);
  });

  it('renders <AboutPanel /> if props.activeTab equals "about"', () => {
    props.activeTab = 'about';
    const wrapper = shallow(<SidePanel {...props} />);
    expect(wrapper.find(AboutPanel).length).to.equal(1);
  });

  it('passes props.switchActiveTab to <AddSwatchesPanel />', () => {
    props.activeTab = 'add swatches';
    props.addNewSwatch = sinon.stub();
    const wrapper = shallow(<SidePanel {...props} />);
    wrapper.find(AddSwatchesPanel).props().addNewSwatch();
    expect(props.addNewSwatch).to.have.been.calledOnce;
  });
});
