import { shallow } from 'enzyme';
import React from 'react';
import Input from '../../../../src/components/form/Input';

describe('<Input />', () => {
  let props;

  beforeEach(() => {
    props = { meta: {}, input: {} };
  });

  it('renders input with class form-input if props.meta.touched is false', () => {
    props.meta.touched = false;
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('input')).to.have.className('form-input');
    expect(wrapper.find('input')).to.not.have.className('is-error');
    expect(wrapper.find('input')).to.not.have.className('is-success');
  });

  it('renders input with class form-input and is-success if props.meta.touched is true and props.meta.error is false', () => {
    props.meta.touched = true;
    props.meta.error = false;
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('input')).to.have.className('form-input');
    expect(wrapper.find('input')).to.not.have.className('is-error');
    expect(wrapper.find('input')).to.have.className('is-success');
  });

  it('renders input with class form-input and is-error if props.meta.touched is true and props.meta.error is true', () => {
    props.meta.touched = true;
    props.meta.error = true;
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('input')).to.have.className('form-input');
    expect(wrapper.find('input')).to.have.className('is-error');
    expect(wrapper.find('input')).to.not.have.className('is-success');
  });

  it('renders hint with props.error', () => {
    props.meta.error = 'some error';
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper.find('.form-input-hint').text()).to.equal(props.meta.error);
  });

  it('renders input with props.type props.value props.name and props.id', () => {
    props.name = 'name';
    props.id = 'id';
    props.value = 'value';
    props.type = 'type';
    props.input.onChange = () => {};
    const wrapper = shallow(<Input {...props} />);
    const inputProps = wrapper.find('input').props();
    expect(inputProps.name).to.equal(props.name);
    expect(inputProps.id).to.equal(props.id);
    expect(inputProps.value).to.equal(props.value);
    expect(inputProps.type).to.equal(props.type);
    expect(inputProps.onChange).to.equal(props.input.onChange);
  });
});
