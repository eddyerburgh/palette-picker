// @flow

import React from 'react';

type Props = {
  rgb: string
}
const Swatch = (props: Props): React$Element<any> => (
  <div style={{ background: props.rgb }} />
);

export default Swatch;
