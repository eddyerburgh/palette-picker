// @flow

import React, { PropTypes } from 'react';
import type { Swatch } from '../../redux/modules/swatches';

type Props = {
  swatches: Array<Swatch>,
}
const Swatches = (props: Props): React$Element<any> => (
  <div hex={props.swatches[0].hex} />
);

Swatches.propTypes = {
  swatches: PropTypes.arrayOf(React.PropTypes.shape({
    hex: React.PropTypes.string.isRequired
  }))
};

export default Swatches;
