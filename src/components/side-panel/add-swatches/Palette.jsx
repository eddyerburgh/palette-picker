// @flow

import React from 'react';
import PaletteColor from './PaletteColor';

type Props = {
  addNewSwatch: Function,
  name: string,
  colors: Array<string>
}

const Palette = (props: Props): React$Element<any> => {
  function addNewPalette() {
    props.colors.forEach(color => props.addNewSwatch(color));
  }
  const paletteColors = props.colors.map(color =>
    <PaletteColor
      addNewSwatch={props.addNewSwatch}
      color={color}
    />
  );
  return (
    <div className="palette">
      <button className="palette__name" onClick={addNewPalette}>{props.name}</button>
      {paletteColors}
    </div>
  );
};

export default Palette ;
