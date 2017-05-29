import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import fullScreenMessage from './fullScreenMessage';
import modal from './modal';
import palettes from './palettes';
import swatches from './swatches';
import tabs from './tabs';

export default combineReducers({
  fullScreenMessage,
  form: formReducer,
  modal,
  palettes,
  swatches,
  tabs,
});
