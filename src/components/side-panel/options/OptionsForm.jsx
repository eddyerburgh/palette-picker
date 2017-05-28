// @flow

import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import RadioInput from '../../form/RadioInput';

const selector = formValueSelector('options');

type Props = {
    format: String,
}

let OptionsForm = (props: Props): React$Element<any> => ( // eslint-disable-line import/no-mutable-exports,max-len
  <form className="add-swatch-form mb-10">
    <div className="input-group">
      <Field
        component={RadioInput}
        name="format"
        checked={props.format === 'rgb'}
        option="rgb"
      />
      <Field
        component={RadioInput}
        name="format"
        checked={props.format === 'hex'}
        option="hex"
      />
    </div>
  </form>
);

OptionsForm = reduxForm({
  form: 'options',
  initialValues: {
    format: 'rgb'
  }
})(OptionsForm);

OptionsForm = connect(
    state => ({
      format: selector(state, 'format')
    })
)(OptionsForm);

export default OptionsForm;
