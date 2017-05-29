// @flow

/* eslint-disable jsx-a11y/href-no-hash */

import React from 'react';
import PaletteColor from './PaletteColor';
import Swatch from '../../../lib/Swatch';

type Props = {
  addNewSwatch: Function,
    colors: Array<string>
}

const Palette = (props: Props): React$Element<any> => {
  function addNewPalette() {
    props.displayNewFullScreenMessage('Palette added!');
    props.colors.forEach(color => props.addNewSwatch(new Swatch(color)));
  }
  return (
    <div className="palette tile tile-centered mb-5">
      <div className="tile-content">
        <div className="columns col-gapless">
          {props.colors.map((color, i) =>
            <PaletteColor
              key={`palette-color-${i}`}
              displayNewFullScreenMessage={props.displayNewFullScreenMessage}
              addNewSwatch={props.addNewSwatch}
              color={color}
            />
          )}
        </div>
      </div>
      <div className="tile-action">
        <button
          className="btn btn-primary btn-action btn-lg"
          onClick={addNewPalette}
        ><i className="icon icon-plus" /></button>
      </div>
    </div>
  );
};

export default Palette ;
