// @flow

import React from 'react';

type Props = {
  message: string,
  closeMessage: Function,
  background: string,
  color: string
}

const FullScreenMessage = (props: Props): React$Element<any> => {
  setTimeout(() => props.closeMessage(), 500);
  return (
    <div className={`fullscreen-message color-${props.color}`} style={{ backgroundColor: props.background }}>
      <h2 className="fullscreen-message__text">{props.message}</h2>
    </div>
  );
};

export default FullScreenMessage;
