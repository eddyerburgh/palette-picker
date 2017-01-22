// @flow

import React from 'react';

type Props = {
  name: string,
  isActive: boolean,
  switchActiveTab: Function
}

const Tab = (props: Props): React$Element<any> => (
  <button
    onClick={() => props.switchActiveTab(props.name)}
    className={props.isActive && 'active'}
  >
    {props.name}
  </button>
);

export default Tab;
