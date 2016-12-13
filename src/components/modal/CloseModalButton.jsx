// @flow

import React, { PropTypes } from 'react';

const CloseModalButton = (props: { closeModal: Function}): React$Element<any> => (
  <input
    onClick={props.closeModal}
    type="button"
  />
);

CloseModalButton.propTypes = {
  closeModal: PropTypes.func
};

export default CloseModalButton;
