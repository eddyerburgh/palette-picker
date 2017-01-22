import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import ModalContainer from './ModalContainer';
import SwatchesContainer from './SwatchesContainer';
import SidePanelContainer from './SidePanelContainer';

const Root = props => (
  <Provider store={props.store}>
    <div>
      <ModalContainer />
      <SidePanelContainer />
      <SwatchesContainer />
    </div>
  </Provider>
);

export default Root;

Root.propTypes = {
  store: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
