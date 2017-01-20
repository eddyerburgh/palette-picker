import { shallow } from 'enzyme';
import React from 'react';
import FullScreenMessage from '../../../../src/components/full-screen-message/FullScreenMessage';

describe('<FullScreenMessage />', () => {
  let props;

  beforeEach(() => {
    props = {
      message: 'message'
    };
  });

  it('renders props.message inside a <h2> tag', () => {
    const wrapper = shallow(<FullScreenMessage {...props} />);
    expect(wrapper.find('h2')).to.have.text(props.message);
  });
});
