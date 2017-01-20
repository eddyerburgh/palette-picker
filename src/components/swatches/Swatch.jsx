// @flow

import React from 'react';

type Props = {
  id: string,
  rgb: string,
  lightness: string,
  removeSwatch: Function
}
const Swatch = (props: Props): React$Element<any> => (
  <div
    style={{ background: props.rgb }}
    className={`swatch color-${props.lightness}`}
  >
    <button
      className="remove-swatch material-icons"
      onClick={() => props.removeSwatch(props.id)}
    />
  </div>
);

export default Swatch;
