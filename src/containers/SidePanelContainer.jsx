// @flow

import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/side-panel/tabs/Tabs';
import * as tabsActions from '../redux/modules/tabs';

type Props = {
  tabs: Array<string>,
  activeTab: string,
  switchActiveTab: Function
}

const SidePanelContainer = (props: Props): React$Element<any> => (
  <Tabs
    tabs={props.tabs}
    activeTab={props.activeTab}
    switchActiveTab={props.switchActiveTab}
  />
);

const mapStateToProps = state => ({
  tabs: state.tabs.tabs,
  activeTab: state.tabs.activeTab
});

const mapDispatchToProps = {
  switchActiveTab: tabsActions.switchActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
