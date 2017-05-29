// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
    name: String,
    id: String,
    type: String,
    value: String,
    input: {
        onBlur: Function,
        onChange: Function
    },
    meta: {
        touched: Boolean,
        error: String
    }
}

const Input = (props: Props): React$Element<any> => (
  <input
    className={
                classNames({
                  'form-input': true,
                  'is-success': props.meta.touched && !props.meta.error,
                  'is-error': props.meta.touched && props.meta.error,
                })
            }
    name={props.name}
    id={props.id}
    type={props.type}
    value={props.value}
    onBlur={props.input.onBlur}
    onChange={props.input.onChange}
  />
);

export default Input;
