// @flow

import React from 'react';

type Props = {
  message: string,
  closeMessage: Function
}

const FullScreenMessage = (props: Props): React$Element<any> => {
  setTimeout(() => props.closeMessage(), 1000);
  return (
    <div>
      <h2>{props.message}</h2>
    </div>
  );
};

export default FullScreenMessage;
