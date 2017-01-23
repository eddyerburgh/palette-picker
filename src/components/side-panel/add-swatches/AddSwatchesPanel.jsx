// @flow

import React from 'react';
import AddSwatchForm from './AddSwatchForm';
import Palette from './Palette';
import type { PaletteType } from '../../../redux/modules/palettes';

type Props = {
  palettes: Array<PaletteType>,
  addNewSwatch: Function
}

const AddSwatchesPanel = (props: Props): React$Element<any> => {
  const palettes = props.palettes.map((palette, i) =>
    <Palette
      {...palette}
      addNewSwatch={props.addNewSwatch}
      key={`palette${i}`}
    />);
  return (
    <div>
      <p>Enter a valid RGB, hex or CSS to add a swatch</p>
      <AddSwatchForm addNewSwatch={props.addNewSwatch} />
      <p>Or choose from some pre made palettes</p>
      {palettes}
    </div>
  );
};

export default AddSwatchesPanel;
