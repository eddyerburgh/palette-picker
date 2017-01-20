// @flow

import React from 'react';
import { connect } from 'react-redux';
import type { SwatchType } from '../redux/modules/swatches';
import Swatches from '../components/swatches/Swatches';
import * as swatchesActions from '../redux/modules/swatches';

type Props = {
  swatches: Array<SwatchType>,
  removeSwatch: Function
}

const SwatchesContainer = (props: Props): React$Element<any> => (
  <Swatches
    swatches={props.swatches}
    removeSwatch={props.removeSwatch}
  />
);

const mapStateToProps = state => ({
  swatches: state.swatches.swatches
});

const mapDispatchToProps = {
  removeSwatch: swatchesActions.removeSwatch
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SwatchesContainer);
