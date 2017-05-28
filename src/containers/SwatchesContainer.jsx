// @flow

import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import type { SwatchType } from '../../types';
import * as swatchesActions from '../redux/modules/swatches';
import * as modalActions from '../redux/modules/modal';
import * as fullScreenMessageActions from '../redux/modules/fullScreenMessage';
import Swatches from '../components/swatches/Swatches';

const selector = formValueSelector('options');

type Props = {
  swatches: Array<SwatchType>,
  displayNewModal: Function,
  removeSwatch: Function,
  replaceSwatch: Function,
  displayNewFullScreenMessage: Function,
  moveSwatch: Function,
  format: String
}

const SwatchesContainer = (props: Props): React$Element<any> => (
  <Swatches
    swatches={props.swatches}
    format={props.format}
    displayNewModal={props.displayNewModal}
    moveSwatch={props.moveSwatch}
    replaceSwatch={props.replaceSwatch}
    removeSwatch={props.removeSwatch}
    displayNewFullScreenMessage={props.displayNewFullScreenMessage}
  />
);

const mapStateToProps = state => ({
  swatches: state.swatches.swatches,
  format: selector(state, 'format')
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
