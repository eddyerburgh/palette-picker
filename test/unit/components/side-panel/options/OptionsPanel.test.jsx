import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import OptionsPanel from '../../../../../src/components/side-panel/options/OptionsPanel';

describe('<SidePanel {...props} />', () => {
  let props;

  beforeEach(() => {
    props = {};
  });

  it('calls props.deleteSwatches when button is clicked', () => {
    props.deleteSwatches = sinon.stub();
    shallow(<OptionsPanel {...props} />).find('button').simulate('click');
    expect(props.deleteSwatches).to.have.been.calledOnce;
  });
});
