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

  it('renders props.option as text', () => {
    props.option = 'option';
    const wrapper = shallow(<RadioInput {...props} />);
    expect(wrapper.text()).to.contain(props.option);
  });

  it('calls props.input.onClick with props.option when input is clicked', () => {
    props.input.onChange = sinon.stub();
    props.option = 'option';
    const wrapper = shallow(<RadioInput {...props} />);
    wrapper.find('input').simulate('click');
    expect(props.input.onChange).to.be.calledWith(props.option);
  });
});
