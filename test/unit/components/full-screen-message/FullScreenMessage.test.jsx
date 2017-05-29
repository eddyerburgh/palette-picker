import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import FullScreenMessage from '../../../../src/components/full-screen-message/FullScreenMessage';

describe('<FullScreenMessage />', () => {
  let props;

  beforeEach(() => {
    props = {
      message: 'message',
      closeMessage: sinon.stub(),
      background: 'rgb(0,0,0)',
      color: 'light',
    };
  });

  it('renders props.message inside a <h2> tag', () => {
    const wrapper = shallow(<FullScreenMessage {...props} />);
    expect(wrapper.find('h2')).to.have.text(props.message);
  });

  it('sets background-color to props.background', () => {
    const wrapper = shallow(<FullScreenMessage {...props} />);
    expect(wrapper).to.have.style('background-color', props.background);
  });

  it('sets class to color-props.color', () => {
    const wrapper = shallow(<FullScreenMessage {...props} />);
    expect(wrapper).to.have.className('color-light');
  });

  it('calls props.closeMessage after 1 second', (done) => {
    shallow(<FullScreenMessage {...props} />);
    setTimeout(() => {
      expect(props.closeMessage).to.have.been.calledOnce;
      done();
    }, 1500);
  });
});
