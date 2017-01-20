// @flow

import React from 'react';

type Props = {
  message: string
}

const fullScreenMessage = (props: Props): React$Element<any> => (
  <div>
    <h2>{props.message}</h2>
  </div>
);

export default fullScreenMessage;
