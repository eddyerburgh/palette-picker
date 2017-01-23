// @flow

import React from 'react';
import isColor from 'is-color';
import Swatch from '../../lib/Swatch';

type Props = {
  id: string,
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
    <input onChange={handleChange} type="text" />
  );
};

export default EditSwatch;
