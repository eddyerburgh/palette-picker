// @flow

import React from 'react';

type Props = {
    heading: string|null,
    message: string|null
}

const ModalMessage = (props: Props): React$Element<any> => (
  <div className="modal__message">
    <h2>{props.heading}</h2>
    <p>{props.message}</p>
  </div>
);

export default ModalMessage;
