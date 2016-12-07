import { shallow } from 'enzyme';
import React from 'react';
import ModalMessage from '../../../../src/components/modal/ModalMessage';

describe('<ModalMessage />', () => {
  it('is rendered', () => {
    const wrapper = shallow(<ModalMessage />);
    expect(wrapper).to.exist;
  });
});
