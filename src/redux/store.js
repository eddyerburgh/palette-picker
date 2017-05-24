import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducer';

export default createStore(reducer, composeWithDevTools());
