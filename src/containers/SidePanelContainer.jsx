// @flow

import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/side-panel/Tabs';
import * as tabsActions from '../redux/modules/tabs';

type Props = {
  activeTab: string,
  switchActiveTab: Function
}

const SidePanelContainer = (props: Props): React$Element<any> => (
  <Tabs
    activeTab={props.activeTab}
    switchActiveTab={props.switchActiveTab}
  />
);

const mapStateToProps = state => ({
  activeTab: state.tabs.activeTab
});

const mapDispatchToProps = {
  switchActiveTab: tabsActions.switchActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
