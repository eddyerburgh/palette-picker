// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { SwatchType } from '../redux/modules/swatches';
import Swatches from '../components/swatches/Swatches';
import * as swatchesActions from '../redux/modules/swatches';
import * as modalActions from '../redux/modules/modal';

type Props = {
  swatches: Array<SwatchType>,
  displayNewModal: Function,
  removeSwatch: Function,
  replaceSwatch: Function
}

const SwatchesContainer = (props: Props): React$Element<any> => (
  <div>
    <Swatches
      swatches={props.swatches}
      displayNewModal={props.displayNewModal}
      removeSwatch={props.removeSwatch}
      replaceSwatch={props.replaceSwatch}
    />
  </div>
);

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
