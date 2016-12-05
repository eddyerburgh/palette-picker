import { createStore } from 'redux';
import reducer from './modules/reducer';

export default createStore(
        reducer,
);
