// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { SwatchType } from '../redux/modules/swatches';
import Swatch from '../components/swatches/Swatch';
import * as swatchesActions from '../redux/modules/swatches';
import * as modalActions from '../redux/modules/modal';

type Props = {
  swatches: Array<SwatchType>,
  displayNewModal: Function,  // eslint-disable-line react/no-unused-prop-types
  removeSwatch: Function,
  replaceSwatch: Function  // eslint-disable-line react/no-unused-prop-types
}

const SwatchesContainer = (props: Props): React$Element<any> => {
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

  const swatches = props.swatches.map(swatch =>
    <Swatch
      {...swatch}
      displayNewModal={props.displayNewModal}
      replaceSwatch={props.replaceSwatch}
      removeSwatch={props.removeSwatch}
      height={returnSwatchHeight()}
      key={`swatch-${swatch.id}`}
    />
  );
  return (
    <div className="swatches">
      {swatches}
    </div>
  );
};

const mapStateToProps = state => ({
  swatches: state.swatches.swatches
});

const mapDispatchToProps = {
  removeSwatch: swatchesActions.removeSwatch,
  replaceSwatch: swatchesActions.replaceSwatch,
  displayNewModal: modalActions.displayNewModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwatchesContainer);
