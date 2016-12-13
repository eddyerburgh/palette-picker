// @flow

import React, { PropTypes } from 'react';

type Props = {
    closeModal: Function
}

const CloseModalButton = (props: Props): React$Element<any> => (
  <input
    onClick={props.closeModal}
    type="button"
  />
);

CloseModalButton.propTypes = {
  closeModal: PropTypes.func
};

export default CloseModalButton;
