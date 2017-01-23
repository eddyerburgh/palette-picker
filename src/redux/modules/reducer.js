import { combineReducers } from 'redux';

import fullScreenMessage from './fullScreenMessage';
import modal from './modal';
import palettes from './palettes';
import swatches from './swatches';
import tabs from './tabs';

export default combineReducers({
  fullScreenMessage,
  modal,
  palettes,
  swatches,
  tabs
});
