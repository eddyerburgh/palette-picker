// @flow

import React from 'react';
import Tab from './Tab';

type Props = {
  switchActiveTab: Function,
  activeTab: string, // eslint-disable-line react/no-unused-prop-types
  tabs: Array<string>
}

const Tabs = (props: Props): React$Element<any> => (
  <div className="panel-nav">
    <ul className="tab tab-block">
      {props.tabs.map((tab, i) =>
        <Tab
          key={i}
          name={tab}
          isActive={tab === props.activeTab}
          switchActiveTab={props.switchActiveTab}
        />
    )}
    </ul>
  </div>
);

export default Tabs;
