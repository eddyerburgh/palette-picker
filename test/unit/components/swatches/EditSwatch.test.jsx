import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import EditSwatch from '../../../../src/components/swatches/EditSwatch';
import Swatch from '../../../../src/lib/Swatch';

describe('<EditSwatch />', () => {
  let props;

  beforeEach(() => {
    props = {
      id: 'id',
      replaceSwatch: sinon.stub(),
    };
  });

  it('render a text input', () => {
    const wrapper = shallow(<EditSwatch {...props} />);
    expect(wrapper.find('[type="text"]')).to.have.length(1);
  });

  it('calls EditSwatch with Swatch using input value onChange if input value is valid hex', () => {
    const value = 'not valid color';
    const wrapper = shallow(<EditSwatch {...props} />);
    wrapper.find('[type="text"]').simulate('change', { target: { value } });

    expect(props.replaceSwatch).to.have.not.been.called;
  });

  it('calls EditSwatch with Swatch using input value onChange if input value is valid hex', () => {
    const hex = '#555555';
    const wrapper = shallow(<EditSwatch {...props} />);
    wrapper.find('[type="text"]').simulate('change', { target: { value: hex } });
    const firstArgument = props.replaceSwatch.args[0][0];
    const secondArgument = props.replaceSwatch.args[0][1];

    expect(firstArgument).to.equal(props.id);
    expect(secondArgument).to.be.instanceOf(Swatch);
    expect(secondArgument.hex).to.equal(hex);
  });
});
