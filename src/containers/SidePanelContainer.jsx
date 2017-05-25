// @flow

import React from 'react';
import { connect } from 'react-redux';
import * as tabsActions from '../redux/modules/tabs';
import * as swatchesActions from '../redux/modules/swatches';
import type { PaletteType } from '../../types';
import SidePanel from '../components/side-panel/SidePanel';

type Props = {
  addNewSwatch: Function, // eslint-disable-line  react/no-unused-prop-types
  tabs: Array<string>,
  color: String,
  activeTab: string,
  switchActiveTab: Function,
  palettes: Array<PaletteType>, // eslint-disable-line react/no-unused-prop-types
  deleteSwatches: Function // eslint-disable-line react/no-unused-prop-types
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
  />
);

const mapStateToProps = state => ({
  tabs: state.tabs.tabs,
  activeTab: state.tabs.activeTab,
  palettes: state.palettes.palettes,
  color: state.form.color
});

const mapDispatchToProps = {
  addNewSwatch: swatchesActions.addNewSwatch,
  deleteSwatches: swatchesActions.deleteSwatches,
  switchActiveTab: tabsActions.switchActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
