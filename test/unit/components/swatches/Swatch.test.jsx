import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

proxyquire.noCallThru();

describe('<Swatch />', () => {
  let props;
  let Swatch;
  let copyStub;
  let EditSwatchStub;

  beforeEach(() => {
    EditSwatchStub = () => <div />;
    copyStub = sinon.stub();
    props = {
      id: 'id',
      rgb: 'rgb(4,5,6)',
      fontColor: 'light',
      removeSwatch: sinon.stub(),
      displayNewModal: sinon.stub(),
      displayNewFullScreenMessage: sinon.stub(),
      replaceSwatch: sinon.stub()
    };
    Swatch = proxyquire('../../../../src/components/swatches/Swatch', {
      'copy-to-clipboard': copyStub,
      './EditSwatch': EditSwatchStub
    }).default;
  });

  it('sets background to props.rgb', () => {
    const wrapper = shallow(<Swatch {...props} />);
    expect(wrapper.find('.swatch')).to.have.style('background-color', props.rgb);
  });

  it('renders div with class color-light if props.fontColor is light', () => {
    const wrapper = shallow(<Swatch {...props} />);
    expect(wrapper.find('.swatch').hasClass('color-light')).to.equal(true);
  });

  it('renders div with class color-dark if props.fontColor is dark', () => {
    props.fontColor = 'dark';
    const wrapper = shallow(<Swatch {...props} />);
    expect(wrapper.find('.swatch').hasClass('color-dark')).to.equal(true);
  });

  it('calls props.removeSwatch with props.id when .swatch__remove is clicked', () => {
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.find('.swatch__remove').simulate('click');
    expect(props.removeSwatch).to.have.been.calledOnce;
    expect(props.removeSwatch).to.have.been.calledWith(props.id);
  });

  it('calls props.displayNewFullScreenMessage when copy does not throw an error', () => {
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.simulate('click', { target: { className: 'swatch ' } });
    expect(props.displayNewFullScreenMessage).to.have.been.calledOnce;
    expect(props.displayNewFullScreenMessage.args[0][0]).to.equal('Copied to clipboard!');
  });

  it('does nothing when .swatch__remove or .swatch__edit are clicked', () => {
    const wrapper = mount(<Swatch {...props} />);
    wrapper.find('.swatch__remove').simulate('click', { target: { className: 'swatch__remove' } });
    wrapper.find('.swatch__edit').simulate('click', { target: { className: 'swatch__edit' } });
    expect(props.displayNewFullScreenMessage).to.have.not.been.calledOnce;
  });

  it('calls props.displayModal when copy throws an error', () => {
    copyStub.throws();
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.simulate('click', { target: { className: 'swatch ' } });
    expect(props.displayNewModal).to.have.been.calledOnce;
    expect(props.displayNewModal.args[0][0].heading).to.equal('Error');
  });

  it('toggles state.displayEdit when .swatch__edit is clicked', () => {
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.find('.swatch__edit').simulate('click');
    expect(wrapper.state('displayEdit')).to.equal(true);
    wrapper.find('.swatch__edit').simulate('click');
    expect(wrapper.state('displayEdit')).to.equal(false);
  });

  it('does not render EditSwatch when state.displayEdit is false', () => {
    const wrapper = shallow(<Swatch {...props} />);
    expect(wrapper.find(EditSwatchStub)).to.have.length(0);
  });

  it('renders EditSwatch when state.displayEdit is true', () => {
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.setState({ displayEdit: true });
    expect(wrapper.find(EditSwatchStub)).to.have.length(1);
  });

  it('has className swatch--props.height', () => {
    props.height = 'third';
    const wrapper = shallow(<Swatch {...props} />);
    expect(wrapper).to.have.className(`swatch--${props.height}`);
  });

  it('passes props replaceSwatch to EditSwatch', () => {
    const wrapper = shallow(<Swatch {...props} />);
    wrapper.setState({ displayEdit: true });
    wrapper.find(EditSwatchStub).props().replaceSwatch();
    expect(props.replaceSwatch).to.have.been.calledOnce;
  });
});
