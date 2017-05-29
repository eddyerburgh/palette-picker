// @flow

import React from 'react';
import { connect } from 'react-redux';
import * as tabsActions from '../redux/modules/tabs';
import * as swatchesActions from '../redux/modules/swatches';
import * as fullScreenMessageActions from '../redux/modules/fullScreenMessage';
import type { PaletteType } from '../../types';
import SidePanel from '../components/side-panel/SidePanel';

type Props = {
  addNewSwatch: Function,
      displayNewFullScreenMessage: Function,
  tabs: Array<string>,
  color: String,
  activeTab: string,
  switchActiveTab: Function,
  palettes: Array<PaletteType>,
  deleteSwatches: Function
}

const SidePanelContainer = (props: Props): React$Element<any> => (
  <SidePanel
    color={props.color}
    addNewSwatch={props.addNewSwatch}
    tabs={props.tabs}
    activeTab={props.activeTab}
    switchActiveTab={props.switchActiveTab}
    palettes={props.palettes}
    deleteSwatches={props.deleteSwatches}
    displayNewFullScreenMessage={props.displayNewFullScreenMessage}
  />
);

const mapStateToProps = state => ({
  tabs: state.tabs.tabs,
  activeTab: state.tabs.activeTab,
  palettes: state.palettes.palettes,
  color: state.form.color,
});

const mapDispatchToProps = {
  addNewSwatch: swatchesActions.addNewSwatch,
  deleteSwatches: swatchesActions.deleteSwatches,
  switchActiveTab: tabsActions.switchActiveTab,
  displayNewFullScreenMessage: fullScreenMessageActions.displayNewFullScreenMessage,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
