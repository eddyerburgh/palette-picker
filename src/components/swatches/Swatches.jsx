import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import SwatchDragContainer from './SwatchDragContainer';

type Props = {
    swatches: Array<SwatchType>,
    displayNewModal: Function,  // eslint-disable-line react/no-unused-prop-types
    removeSwatch: Function, // eslint-disable-line react/no-unused-prop-types
    replaceSwatch: Function,  // eslint-disable-line react/no-unused-prop-types
    displayNewFullScreenMessage: Function
}

const Swatches = (props: Props): React$Element<any> => {
  function returnSwatchHeight() {
    const numberOfSwatches = props.swatches.length;

    if (numberOfSwatches > 8) {
      return 'third';
    }

    if (numberOfSwatches > 4) {
      return 'half';
    }

    return 'whole';
  }

  return (
    <div className="swatches">
      {props.swatches.map((swatch, index) =>
        <SwatchDragContainer
          {...swatch}
          format={props.format}
          displayNewModal={props.displayNewModal}
          replaceSwatch={props.replaceSwatch}
          removeSwatch={props.removeSwatch}
          moveSwatch={props.moveSwatch}
          displayNewFullScreenMessage={props.displayNewFullScreenMessage}
          height={returnSwatchHeight()}
          key={`swatch-${swatch.id}`}
          source={swatch}
          index={index}
        />
      )}
    </div>
  );
};

export default DragDropContext(HTML5Backend)(Swatches); // eslint-disable-line new-cap
