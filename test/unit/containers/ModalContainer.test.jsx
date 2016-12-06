import { shallow } from 'enzyme';
import React from 'react';
import ModalContainer from '../../../src/containers/ModalContainer';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<ModalContainer />', () => {
  let ModalContainer;
  let modalMessageStub;

  beforeEach(() => {
    modalMessageStub = () => <div />;

    ModalContainer = proxyquire('../../../src/containers/ModalContainer', {
      '../components/modal/ModalMessage': modalMessageStub
        }
    ).default
  });

  it('is rendered', () => {
    const wrapper = shallow(<ModalContainer />);
    expect(wrapper).to.exist;
  });

  it('renders <ModalMessage />', () => {
    const wrapper = shallow(<ModalContainer />);
    expect(wrapper.find(modalMessageStub)).to.have.length(1);
  });
  //
  // it('passes state.modal to <ModalMessage />', () => {
  //   const wrapper = shallow(<ModalContainer />);
  //   expect(wrapper).to.contain('ModalMessage');
  // });
});
