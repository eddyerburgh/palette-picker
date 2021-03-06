// @flow

import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import validate from '../../../lib/validate';
import Swatch from '../../../lib/Swatch';
import Input from '../../form/Input';

const selector = formValueSelector('add-swatch');

type Props = {
    color: String,
    addNewSwatch: Function,
    displayNewFullScreenMessage: Function
}

let AddSwatchForm = (props: Props): React$Element<any> => { // eslint-disable-line import/no-mutable-exports,max-len
  function handleSubmit(event) {
    event.preventDefault();
    props.displayNewFullScreenMessage('Color added!');
    props.addNewSwatch(new Swatch(props.color));
  }

  return (
    <form className="add-swatch-form mb-10" onSubmit={handleSubmit}>
      <div className="input-group">
        <Field
          id="add-swatch"
          name="color"
          component={Input}
          type="text"
        />
        <input
          type="submit"
          value="add swatch"
          className="btn btn-primary input-group-btn"
        />
      </div>
    </form>
  );
};

AddSwatchForm = reduxForm({
  form: 'add-swatch',
  validate,
})(AddSwatchForm);

AddSwatchForm = connect(
    state => ({
      color: selector(state, 'color'),
    })
)(AddSwatchForm);

export default AddSwatchForm;
