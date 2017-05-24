// @flow

import React from 'react';
import Tabs from './tabs/Tabs';
import AddSwatchesPanel from './add-swatches/AddSwatchesPanel';
import AboutPanel from './about/AboutPanel';
import type { PaletteType } from '../../../types';

type Props = {
    addNewSwatch: Function,
    tabs: Array<string>,
    activeTab: string,
    switchActiveTab: Function,
    palettes: Array<PaletteType>,
    deleteSwatches: Function
}

const SidePanel = (props: Props): React$Element<any> => (
  <div className="sidepanel">
    <header className="sidepanel__header bg-secondary">
      <Tabs
        tabs={props.tabs}
        activeTab={props.activeTab}
        switchActiveTab={props.switchActiveTab}
      />
    </header>
    <main className="sidepanel__content">
      {props.activeTab === 'add swatches' &&
        <AddSwatchesPanel
          addNewSwatch={props.addNewSwatch}
          deleteSwatches={props.deleteSwatches}
          palettes={props.palettes}
        />}
      {props.activeTab === 'about' && <AboutPanel />}
    </main>
  </div>
);

export default SidePanel;
