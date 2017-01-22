// @flow

import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/side-panel/tabs/Tabs';
import AddSwatchesPanel from '../components/side-panel/add-swatches/AddSwatchesPanel';
import * as tabsActions from '../redux/modules/tabs';
import * as swatchesActions from '../redux/modules/swatches';

type Props = {
  addNewSwatch: Function,
  tabs: Array<string>,
  activeTab: string,
  switchActiveTab: Function
}

const SidePanelContainer = (props: Props): React$Element<any> => (
  <div>
    <Tabs
      tabs={props.tabs}
      activeTab={props.activeTab}
      switchActiveTab={props.switchActiveTab}
    />
    {props.activeTab === 'add swatches' && <AddSwatchesPanel addNewSwatch={props.addNewSwatch} />}
  </div>
);

const mapStateToProps = state => ({
  tabs: state.tabs.tabs,
  activeTab: state.tabs.activeTab
});

const mapDispatchToProps = {
  addNewSwatch: swatchesActions.addNewSwatch,
  switchActiveTab: tabsActions.switchActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
