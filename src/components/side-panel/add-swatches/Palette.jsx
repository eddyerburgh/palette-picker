// @flow

import React from 'react';
import PaletteColor from './PaletteColor';
import Swatch from '../../../lib/Swatch';

type Props = {
  addNewSwatch: Function,
  name: string,
  colors: Array<string>
}

const Palette = (props: Props): React$Element<any> => {
  function addNewPalette() {
    props.colors.forEach(color => props.addNewSwatch(new Swatch(color)));
  }
  const paletteColors = props.colors.map((color, i) =>
    <PaletteColor
      key={`palette-color-${i}`}
      addNewSwatch={props.addNewSwatch}
      color={color}
    />
  );
  return (
    <div className="palette">
      <a href="javascript:" className="palette__name" onClick={addNewPalette}>{props.name}</a>
      <div>
        {paletteColors}
      </div>
      </div>
  );
};

export default Palette ;
