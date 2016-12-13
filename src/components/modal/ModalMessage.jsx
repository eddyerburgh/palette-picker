// @flow

import React, { PropTypes } from 'react';

const ModalMessage = (props: {
    heading: string|null,
    message: string|null}): React$Element<any> => (
      <div>
        <h2>{props.heading}</h2>
        <p>{props.message}</p>
      </div>
);

ModalMessage.propTypes = {
  props: PropTypes.shape({
    heading: PropTypes.string,
    message: PropTypes.string
  })
};

export default ModalMessage;
