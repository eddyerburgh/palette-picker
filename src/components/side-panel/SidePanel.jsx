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
  <div className="sidepanel panel">
    <header className="bg-secondary panel-header">
      <div className="panel-title">Palette Picker</div>
      <div className="panel-subtitle">Enter a color to add a swatch or choose from some pre made palettes</div>
    </header>
    <nav className="panel-nav mb-10">
      <Tabs
        tabs={props.tabs}
        activeTab={props.activeTab}
        switchActiveTab={props.switchActiveTab}
      />
    </nav>
    <main className="panel-body">
      {props.activeTab === 'add swatches' &&
        <AddSwatchesPanel
          addNewSwatch={props.addNewSwatch}
          deleteSwatches={props.deleteSwatches}
          palettes={props.palettes}
        />}
      {props.activeTab === 'about' && <AboutPanel />}
    </main>
    <div className="panel-footer">
          Edd Yerburgh
      </div>
  </div>
);

export default SidePanel;
