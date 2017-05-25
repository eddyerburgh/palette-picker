// @flow
import isColor from 'is-color';

export default function validate(values: String) {
  const errors = {};
  if (!values.color) {
    errors.color = 'Required';
  } else if (!isColor(values.color)) {
    errors.color = 'Not valid color';
  }
  return errors;
}
