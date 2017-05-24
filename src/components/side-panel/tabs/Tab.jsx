// @flow

import React from 'react';

type Props = {
  name: string,
  isActive: boolean,
  switchActiveTab: Function
}

const Tab = (props: Props): React$Element<any> => (
  <li className={props.isActive ? 'active tab-item' : 'tab-item'} >
    <a
      onClick={() => props.switchActiveTab(props.name)}
      href={`#${props.name}`}
    >
      {props.name}
    </a>
  </li>
);

export default Tab;
