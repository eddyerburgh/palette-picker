import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Tab from '../../../../../src/components/side-panel/tabs/Tab';

describe('<Tab />', () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'tab'
    };
  });

  it('renders text props.name', () => {
    const wrapper = shallow(<Tab {...props} />);
    expect(wrapper).to.have.text(props.name);
  });

  it('has class active if isActive is true', () => {
    props.isActive = true;
    const wrapper = shallow(<Tab {...props} />);
    expect(wrapper).to.have.className('active');
  });

  it('does not have class active if isActive is false', () => {
    const wrapper = shallow(<Tab {...props} />);
    expect(wrapper).to.not.have.className('active');
  });

  it('calls switchActiveTab with props.name when clicked', () => {
    const switchActiveTab = sinon.stub();
    props.switchActiveTab = switchActiveTab;
    const wrapper = shallow(<Tab {...props} />);
    wrapper.simulate('click');
    expect(switchActiveTab).to.have.been.calledOnce;
  });
});
