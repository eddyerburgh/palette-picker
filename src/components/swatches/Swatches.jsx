// @flow

import React, { PropTypes } from 'react';
import type { Swatch } from '../../redux/modules/swatches';
import SwatchComponent from './SwatchComponent';

type Props = {
  swatches: Array<Swatch>,
}


const Swatches = (props: Props): React$Element<any> => {
  const swatches = props.swatches.map(swatch => <SwatchComponent hex={swatch.hex} />);
  return (
    <div>
      {swatches}
    </div>
  );
};

Swatches.propTypes = {
  swatches: PropTypes.array  // eslint-disable-line react/forbid-prop-types
};

export default Swatches;
