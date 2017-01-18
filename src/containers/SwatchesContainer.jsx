// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import type { Swatch } from '../redux/modules/swatches';
import Swatches from '../components/swatches/Swatches';

type Props = {
  swatches: Array<Swatch>,
}

const SwatchesContainer = (props: Props): React$Element<any> => (
  <Swatches swatches={props.swatches} />
);

SwatchesContainer.propTypes = {
  swatches: PropTypes.array // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = state => ({
  swatches: state.swatches.swatches
});

export default connect(
  mapStateToProps
)(SwatchesContainer);
