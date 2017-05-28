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
    <h4>Custom swatch</h4>
    <AddSwatchForm addNewSwatch={props.addNewSwatch} />
    <h4 className="mt-10">Pre-made palettes</h4>
    {props.palettes.map((palette, i) =>
      <Palette
        {...palette}
        addNewSwatch={props.addNewSwatch}
        key={`palette${i}`}
      />)}
    <h4 className="mt-10">Options</h4>
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
