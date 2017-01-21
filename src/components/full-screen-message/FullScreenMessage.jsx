// @flow

import React from 'react';

type Props = {
  message: string
}

const FullScreenMessage = (props: Props): React$Element<any> => (
  <div>
    <h2>{props.message}</h2>
  </div>
);

export default FullScreenMessage;
