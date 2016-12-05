import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import ModalContainer from './ModalContainer';

const Root = props => (
  <Provider store={props.store}>
    <ModalContainer />
  </Provider>
);

export default Root;

Root.propTypes = {
  store: PropTypes.object // eslint-disable-line react/forbid-prop-types
};
