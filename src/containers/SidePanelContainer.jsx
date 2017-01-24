// @flow

import React from 'react';
import { connect } from 'react-redux';
import Tabs from '../components/side-panel/tabs/Tabs';
import AddSwatchesPanel from '../components/side-panel/add-swatches/AddSwatchesPanel';
import AboutPanel from '../components/side-panel/about/AboutPanel';
import * as tabsActions from '../redux/modules/tabs';
import * as swatchesActions from '../redux/modules/swatches';
import type { PaletteType } from '../redux/modules/palettes';

type Props = {
  addNewSwatch: Function, // eslint-disable-line  react/no-unused-prop-types
  tabs: Array<string>,
  activeTab: string,
  switchActiveTab: Function,
  palettes: Array<PaletteType> // eslint-disable-line react/no-unused-prop-types
}

const SidePanelContainer = (props: Props): React$Element<any> => {
  function renderPanel() {
    switch (props.activeTab) {
      case 'add swatches':
        return (
          <AddSwatchesPanel
            addNewSwatch={props.addNewSwatch}
            palettes={props.palettes}
          />
        );
      case 'about':
        return (
          <AboutPanel />
        );
      default:
        return null;
    }
  }
  return (
    <div className="sidepanel">
      <header className="sidepanel__header bg-secondary">
        <Tabs
          tabs={props.tabs}
          activeTab={props.activeTab}
          switchActiveTab={props.switchActiveTab}
        />
      </header>
      <main className="sidepanel__content">
        {renderPanel()}
      </main>
    </div>
  );
};

const mapStateToProps = state => ({
  tabs: state.tabs.tabs,
  activeTab: state.tabs.activeTab,
  palettes: state.palettes.palettes
});

const mapDispatchToProps = {
  addNewSwatch: swatchesActions.addNewSwatch,
  switchActiveTab: tabsActions.switchActiveTab
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SidePanelContainer);
