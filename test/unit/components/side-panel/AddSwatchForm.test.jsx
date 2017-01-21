import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import AddSwatchForm from '../../../../src/components/side-panel/add-swatches/AddSwatchForm';
import Swatch from '../../../../src/lib/Swatch';

describe('<AddSwatchForm />', () => {
  let props;

  beforeEach(() => {
    props = {
      addNewSwatch: sinon.stub()
    };
  });

  it('renders a text input', () => {
    const wrapper = shallow(<AddSwatchForm {...props} />);
    expect(wrapper.find('[type="text"]')).to.have.length(1);
  });

  it('renders a submit input', () => {
    const wrapper = shallow(<AddSwatchForm {...props} />);
    expect(wrapper.find('[type="submit"]')).to.have.length(1);
  });

  it('calls props.addNewSwatch with Swatch instance of input value if value is valid RGB color when form is submitted', () => {
    const validRgb = 'rgb(0, 0, 0)';
    const wrapper = mount(<AddSwatchForm {...props} />);
    wrapper.find('[type="text"]').node.value = validRgb;
    wrapper.find('[type="submit"]').get(0).click();
    expect(props.addNewSwatch).to.have.been.calledOnce;
    expect(props.addNewSwatch.args[0][0]).to.be.instanceOf(Swatch);
    expect(props.addNewSwatch.args[0][0].hex).to.equal('#000000');
  });

  it('calls props.addNewSwatch with Swatch instance of input value if value is valid hex color when form is submitted', () => {
    const validHex = '#555';
    const wrapper = mount(<AddSwatchForm {...props} />);
    wrapper.find('[type="text"]').node.value = validHex;
    wrapper.find('[type="submit"]').get(0).click();
    expect(props.addNewSwatch).to.have.been.calledOnce;
    expect(props.addNewSwatch.args[0][0]).to.be.instanceOf(Swatch);
    expect(props.addNewSwatch.args[0][0].hex).to.equal('#555555');
  });

  it('calls props.addNewSwatch with Swatch instance of input value if value is valid CSS color when form is submitted', () => {
    const validColor = 'yellow';
    const wrapper = mount(<AddSwatchForm {...props} />);
    wrapper.find('[type="text"]').node.value = validColor;
    wrapper.find('[type="submit"]').get(0).click();
    expect(props.addNewSwatch).to.have.been.calledOnce;
    expect(props.addNewSwatch.args[0][0]).to.be.instanceOf(Swatch);
    expect(props.addNewSwatch.args[0][0].hex).to.equal('#FFFF00');
  });

  it('sets state.error to true if value is invalid color when form is submitted', () => {
    const validColor = 'sfdadf##';
    const wrapper = mount(<AddSwatchForm {...props} />);
    wrapper.find('[type="text"]').node.value = validColor;
    wrapper.find('[type="submit"]').get(0).click();
    expect(wrapper.state().error).to.equal(true);
  });

  it('renders an error message if state.error is true', () => {
    const wrapper = mount(<AddSwatchForm {...props} />);
    wrapper.setState({ error: true });
    expect(wrapper.find('.color-warning').length).to.equal(1);
  });
});
