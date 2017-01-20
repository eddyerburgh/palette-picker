import { combineReducers } from 'redux';

import fullScreenMessage from './fullScreenMessage';
import modal from './modal';
import swatches from './swatches';

export default combineReducers({
  fullScreenMessage,
  modal,
  swatches
});
