// @flow

import React from 'react';

type Props = {
    name: String,
    option: String,
    checked: Boolean,
    input: {
        onChange: Function
    }
}

const RadioInput = (props: Props): React$Element<any> => (
  <label
    className="form-radio"
    htmlFor={props.option}
  >
    <input
      type="radio"
      checked={props.checked}
      name={props.name}
      onClick={() => props.input.onChange(props.option)}
      id={props.option}
    />
    <i className="form-icon" /> {props.option}
  </label>
);

export default RadioInput;
