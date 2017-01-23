// @flow

import React from 'react';

type Props = {
  addNewSwatch: Function,
  color: string
}

const PaletteColor = (props: Props): React$Element<any> => (
  <button
    className="palette__color"
    onClick={() => props.addNewSwatch(props.color)}
    style={{ backgroundColor: props.color }}
  />
);

export default PaletteColor;
