// @flow

import React from 'react';

type Props = {
    clickHandler: Function,
    value: string
}

const CloseButton = (props: Props): React$Element<any> => (
  <input
    type="button"
    className="btn"
    onClick={props.clickHandler}
    value={props.value}
  />
);

export default CloseButton;
