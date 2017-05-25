// @flow

import React from 'react';
import AddSwatchForm from './AddSwatchForm';
import Palette from './Palette';
import type { PaletteType } from '../../../../types';

type Props = {
  palettes: Array<PaletteType>,
  addNewSwatch: Function,
  deleteSwatches: Function
}

const AddSwatchesPanel = (props: Props): React$Element<any> => (
  <div>
    <p>Enter a valid RGB, hex or CSS to add a swatch</p>
    <AddSwatchForm addNewSwatch={props.addNewSwatch} />
    <p>Or choose from some pre made palettes</p>
    {props.palettes.map((palette, i) =>
      <Palette
        {...palette}
        addNewSwatch={props.addNewSwatch}
        key={`palette${i}`}
      />)}
    <button
      className="btn btn-primary btn-block"
      id="delete-all"
      onClick={props.deleteSwatches}
    >
      <i className="icon icon-delete" /> Delete all
      </button>
  </div>
);

export default AddSwatchesPanel;
