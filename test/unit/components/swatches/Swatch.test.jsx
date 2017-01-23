import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Swatch />', () => {
  let props;
  let SwatchComponent;
  let copyStub;
  let EditSwatchStub;

  beforeEach(() => {
    EditSwatchStub = () => <div />;
    copyStub = {
      copy: sinon.stub()
    };
    props = {
      id: 'id',
      rgb: 'rgb(4,5,6)',
      lightness: 'light',
      removeSwatch: sinon.stub(),
      displayNewModal: sinon.stub(),
      replaceSwatch: sinon.stub()
    };
    SwatchComponent = proxyquire('../../../../src/components/swatches/Swatch', {
      'copy-to-clipboard': copyStub,
      './EditSwatch': EditSwatchStub
    }).default;
  });

  it('sets background to props.rgb', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find('.swatch')).to.have.style('background-color', props.rgb);
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
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.find('.swatch__remove').simulate('click');
    expect(props.removeSwatch).to.have.been.calledOnce;
    expect(props.removeSwatch).to.have.been.calledWith(props.id);
  });

  it('calls props.displayModal when copy throws an error', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.simulate('click');
    expect(props.displayNewModal.args[0][0].heading).to.equal('Error');
    expect(props.displayNewModal).to.have.been.calledOnce;
  });

  it('toggles state.displayEdit when .swatch__edit is clicked', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.find('.swatch__edit').simulate('click');
    expect(wrapper.state('displayEdit')).to.equal(true);
  });

  it('does not render EditSwatch when state.displayEdit is false', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper.find(EditSwatchStub)).to.have.length(0);
  });

  it('renders EditSwatch when state.displayEdit is true', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.setState({ displayEdit: true });
    expect(wrapper.find(EditSwatchStub)).to.have.length(1);
  });

  it('has className swatch--${props.height}', () => {
    props.height = 'third';
    const wrapper = shallow(<SwatchComponent {...props} />);
    expect(wrapper).to.have.className(`swatch--${props.height}`);
  });

  it('passes props replaceSwatch to EditSwatch', () => {
    const wrapper = shallow(<SwatchComponent {...props} />);
    wrapper.setState({ displayEdit: true });
    wrapper.find(EditSwatchStub).props().replaceSwatch();
    expect(props.replaceSwatch).to.have.been.calledOnce;
  });
});
