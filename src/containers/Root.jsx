import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import ModalContainer from './ModalContainer';
import SwatchesContainer from './SwatchesContainer';

const Root = props => (
  <Provider store={props.store}>
    <div>
      <ModalContainer />
      <SwatchesContainer />
    </div>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
