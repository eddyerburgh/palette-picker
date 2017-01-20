import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Swatch />', () => {
  let props;
  let SwatchComponent;
  let copyStub;

  beforeEach(() => {
    props = {
      id: 'id',
      rgb: 'rgb(4,5,6)',
      lightness: 'light'
    };

    copyStub = {
      copy: sinon.stub()
    };

    SwatchComponent = proxyquire('../../../../src/components/swatches/Swatch', {
      'copy-to-clipboard': copyStub
    }).default;
  });

  it('sets background to props.rgb', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('.swatch')).to.have.style('background', props.rgb);
  });

  it('renders div with class color-light if props.lightness is light', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('.swatch').hasClass('color-light')).to.equal(true);
  });

  it('renders div with class color-dark if props.lightness is dark', () => {
    props.lightness = 'dark';
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('.swatch').hasClass('color-dark')).to.equal(true);
  });

  it('calls props.removeSwatch with props.id when .swatch__remove is clicked', () => {
    const removeSwatch = sinon.stub();
    props.removeSwatch = removeSwatch;
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.find('.swatch__remove').simulate('click');
    expect(removeSwatch).to.have.been.calledOnce;
    expect(removeSwatch).to.have.been.calledWith(props.id);
  });

  it('calls props.removeSwatch with props.id when .swatch__remove is clicked', () => {
    const removeSwatch = sinon.stub();
    props.removeSwatch = removeSwatch;
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.find('.swatch__remove').simulate('click');
    expect(removeSwatch).to.have.been.calledOnce;
    expect(removeSwatch).to.have.been.calledWith(props.id);
  });

  it('calls props.displayModal when copy throws an error', () => {
    copyStub.copy = sinon.stub().throws();
    const displayNewModal = sinon.stub();
    props.displayNewModal = displayNewModal;
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.simulate('click');
    expect(displayNewModal).to.have.been.calledOnce;
  });
});
