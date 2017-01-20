// @flow

import React from 'react';
import { connect } from 'react-redux';
import FullScreenMessage from '../components/full-screen-message/FullScreenMessage';

type Props = {
  display: Boolean,
  message: string
}

const ModalContainer = (props: Props): React$Element<any> => (
  props.display && <FullScreenMessage message={props.message} />
);

const mapStateToProps = state => ({
  message: state.fullScreenMessage.message,
  display: state.fullScreenMessage.display
});

export default connect(
  mapStateToProps
)(ModalContainer);
