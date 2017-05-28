// @flow

import React from 'react';
import Tabs from './tabs/Tabs';
import AddSwatchesPanel from './add-swatches/AddSwatchesPanel';
import AboutPanel from './about/AboutPanel';
import OptionsPanel from './options/OptionsPanel';
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
      {props.activeTab === 'add' &&
        <AddSwatchesPanel
          addNewSwatch={props.addNewSwatch}
          palettes={props.palettes}
        />}
      {props.activeTab === 'about' && <AboutPanel />}
      {props.activeTab === 'options' &&
        <OptionsPanel
          deleteSwatches={props.deleteSwatches}
        />}
    </main>
    <div className="panel-footer">
        Made by <a rel="noopener noreferrer" href="https://github.com/eddyerburgh" target="_blank">Edd Yerburgh</a>
    </div>
  </div>
);

export default SidePanel;
