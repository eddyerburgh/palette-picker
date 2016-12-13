// @flow

import React, { PropTypes } from 'react';

type Props = {
    clickHandler: Function,
    value: string
}

const CloseButton = (props: Props): React$Element<any> => (
  <input
    type="button"
    onClick={props.clickHandler}
    value={props.value}
  />
);

CloseButton.propTypes = {
  clickHandler: PropTypes.func,
  value: PropTypes.string
};

export default CloseButton;
