// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { SwatchType } from '../../types';
import * as swatchesActions from '../redux/modules/swatches';
import * as modalActions from '../redux/modules/modal';
import * as fullScreenMessageActions from '../redux/modules/fullScreenMessage';
import Swatches from '../components/swatches/Swatches';

type Props = {
  swatches: Array<SwatchType>,
  displayNewModal: Function,  // eslint-disable-line react/no-unused-prop-types
  removeSwatch: Function, // eslint-disable-line react/no-unused-prop-types
  replaceSwatch: Function,  // eslint-disable-line react/no-unused-prop-types
  displayNewFullScreenMessage: Function,
  moveSwatch: Function
}

const SwatchesContainer = (props: Props): React$Element<any> => (
  <Swatches
    swatches={props.swatches}
    displayNewModal={props.displayNewModal}
    moveSwatch={props.moveSwatch}
    replaceSwatch={props.replaceSwatch}
    removeSwatch={props.removeSwatch}
    displayNewFullScreenMessage={props.displayNewFullScreenMessage}
  />
);

const mapStateToProps = state => ({
  swatches: state.swatches.swatches
});

const mapDispatchToProps = {
  removeSwatch: swatchesActions.removeSwatch,
  replaceSwatch: swatchesActions.replaceSwatch,
  moveSwatch: swatchesActions.moveSwatch,
  displayNewModal: modalActions.displayNewModal,
  displayNewFullScreenMessage: fullScreenMessageActions.displayNewFullScreenMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwatchesContainer);
