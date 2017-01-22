// @flow

import React from 'react';
import AddSwatchesPanel from './add-swatches/AddSwatchesPanel';
import Tabs from './tabs/Tabs';

type Props = {
  addNewSwatch: Function,
  tabs: Array<string>,
  activeTab: string,
  switchActiveTab: Function
}

const SidePanel = (props: Props): React$Element<any> => (
  <div>
    <Tabs
      switchActiveTab={props.switchActiveTab}
      tabs={props.tabs}
      activeTab={props.activeTab}
    />
    {props.activeTab === 'add swatches' && <AddSwatchesPanel addNewSwatch={props.addNewSwatch} />}
  </div>
);

export default SidePanel;
