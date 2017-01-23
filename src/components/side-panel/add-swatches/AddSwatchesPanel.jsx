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
      <h2>Add a swatch</h2>
      <AddSwatchForm addNewSwatch={props.addNewSwatch} />
      <h2>Palettes</h2>
      {palettes}
    </div>
  );
};

export default AddSwatchesPanel;
