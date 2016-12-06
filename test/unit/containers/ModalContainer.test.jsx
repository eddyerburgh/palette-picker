import { shallow } from 'enzyme';
import React from 'react';
import ModalContainer from '../../../src/containers/ModalContainer';

describe('<ModalContainer />', () => {
  it('is rendered', () => {
    const wrapper = shallow(<ModalContainer />);
    expect(wrapper).to.exist;
  });
});
