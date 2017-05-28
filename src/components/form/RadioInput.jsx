// @flow

import React from 'react';

type Props = {
    name: String,
    value: String,
    input: {
        onChange: Function
    }
}

const RadioInput = (props: Props): React$Element<any> => (
  <label
    className="form-radio"
    htmlFor={props.value}
  >
    <input
      type="radio"
      name={props.name}
      onClick={() => props.input.onChange(props.value)}
      id={props.value}
    />
    <i className="form-icon" /> {props.value}
  </label>
);

export default RadioInput;
