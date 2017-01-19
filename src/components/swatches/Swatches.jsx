// @flow

import React from 'react';
import type { Swatch } from '../../redux/modules/swatches';
import SwatchComponent from './SwatchComponent';

type Props = {
  swatches: Array<Swatch>,
}

const Swatches = (props: Props): React$Element<any> => {
  const swatches = props.swatches.map(swatch => <SwatchComponent {...swatch} />);
  return (
    <div>
      {swatches}
    </div>
  );
};

export default Swatches;
