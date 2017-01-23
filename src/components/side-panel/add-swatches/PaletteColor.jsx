// @flow

import React from 'react';
import Swatch from '../../../lib/Swatch';

type Props = {
  addNewSwatch: Function,
  color: string
}

const PaletteColor = (props: Props): React$Element<any> => (
  <button
    className="palette__color"
    onClick={() => props.addNewSwatch(new Swatch(props.color))}
    style={{ backgroundColor: props.color }}
  />
);

export default PaletteColor;
