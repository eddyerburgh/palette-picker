// @flow

import React from 'react';
import AddSwatchForm from './AddSwatchForm';
import Palette from './Palette';
import type { PaletteType } from '../../../redux/modules/palettes';

type Props = {
  palettes: Array<PaletteType>,
  addNewSwatch: Function,
  deleteSwatches: Function
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
      <hr />
      <button
        className="btn"
        id="delete-all"
        onClick={props.deleteSwatches}
      >
          Delete all
      </button>
    </div>
  );
};

export default AddSwatchesPanel;
