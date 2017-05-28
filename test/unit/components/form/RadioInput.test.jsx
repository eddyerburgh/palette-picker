import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import RadioInput from '../../../../src/components/form/RadioInput';

describe('<RadioInput />', () => {
  let props;

  beforeEach(() => {
    props = { input: {} };
  });

  it('renders input with props.name', () => {
    props.name = 'name';
    const wrapper = shallow(<RadioInput {...props} />);
    expect(wrapper.find('input').prop('name')).to.equal(props.name);
  });

  it('renders props.value as text', () => {
    props.value = 'value';
    const wrapper = shallow(<RadioInput {...props} />);
    expect(wrapper.text()).to.contain(props.value);
  });

  it('calls props.input.onClick with props.value when input is clicked', () => {
    props.input.onChange = sinon.stub();
    props.value = 'value';
    const wrapper = shallow(<RadioInput {...props} />);
    wrapper.find('input').simulate('click');
    expect(props.input.onChange).to.be.calledWith(props.value);
  });
});
