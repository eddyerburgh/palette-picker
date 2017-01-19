// @flow

import React from 'react';
import type { SwatchType } from '../../redux/modules/swatches';
import Swatch from './Swatch';

type Props = {
  swatches: Array<SwatchType>,
}

const Swatches = (props: Props): React$Element<any> => {
  const swatches = props.swatches.map(swatch => <Swatch key={swatch.id} {...swatch} />);
  return (
    <div>
      {swatches}
    </div>
  );
};

export default Swatches;
