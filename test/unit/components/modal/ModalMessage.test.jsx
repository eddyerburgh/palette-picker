import { shallow } from 'enzyme';
import React from 'react';
import ModalMessage from '../../../../src/components/modal/ModalMessage';

describe('<ModalMessage />', () => {
  let props;

  beforeEach(() => {
    props = {
      heading: 'heading',
      message: 'message'
    };
  });

  it('is rendered', () => {
    const wrapper = shallow(<ModalMessage />);
    expect(wrapper).to.have.length(1);
  });

  it('renders props.message inside a <p> tag', () => {
    const wrapper = shallow(<ModalMessage {...props} />);
    expect(wrapper.find('p')).to.have.text(props.message);
  });

  it('renders props.message inside a <h2> tag', () => {
    const wrapper = shallow(<ModalMessage {...props} />);
    expect(wrapper.find('h2')).to.have.text(props.heading);
  });
});
