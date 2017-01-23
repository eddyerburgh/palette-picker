// @flow

import React from 'react';
import isColor from 'is-color';
import Swatch from '../../lib/Swatch';

type Props = {
  id: string,
  hex: string,
  replaceSwatch: Function
}

const EditSwatch = (props: Props): React$Element<any> => {
  function handleChange(event) {
    const inputValue = event.target.value;
    if (isColor(inputValue)) {
      props.replaceSwatch(props.id, new Swatch(inputValue));
    }
  }
  return (
    <input
      placeholder={props.hex}
      onChange={handleChange}
      type="text"
      className="swatch__edit-input"
    />
  );
};

export default EditSwatch;
