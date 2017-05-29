import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import ModalContainer from './ModalContainer';
import SwatchesContainer from './SwatchesContainer';
import SidePanelContainer from './SidePanelContainer';
import FullScreenMessageContainer from './FullScreenMessageContainer';

const Root = props => (
  <Provider store={props.store}>
    <div>
      <ModalContainer />
      <FullScreenMessageContainer />
      <SidePanelContainer />
      <SwatchesContainer />
    </div>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

export default Root;

