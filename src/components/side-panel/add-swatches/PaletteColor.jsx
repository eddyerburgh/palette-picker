// @flow

import React from 'react';
import Swatch from '../../../lib/Swatch';

type Props = {
  addNewSwatch: Function,
  color: string,
    displayNewFullScreenMessage: Function

}

const PaletteColor = (props: Props): React$Element<any> => {
  function handleClick() {
    props.displayNewFullScreenMessage('Color added!');
    props.addNewSwatch(new Swatch(props.color));
  }
  return (
    <button
      className="palette__color col-2"
      onClick={handleClick}
      style={{ backgroundColor: props.color }}
    />
  );
};

export default PaletteColor;
