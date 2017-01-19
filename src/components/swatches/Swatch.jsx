// @flow

import React from 'react';

type Props = {
  rgb: string,
  lightness: string
}
const Swatch = (props: Props): React$Element<any> => (
  <div
    style={{ background: props.rgb }}
    className={`color-${props.lightness}`}
  />
);

export default Swatch;
