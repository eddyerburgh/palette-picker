// @flow

import React from 'react';
import { connect } from 'react-redux';
import FullScreenMessage from '../components/full-screen-message/FullScreenMessage';
import * as fullScreenMessageActions from '../redux/modules/fullScreenMessage';

type Props = {
  display: Boolean,
  message: string,
  closeMessage: Function
}

const FullScreenMessageContainer = (props: Props): React$Element<any> => (
  props.display && <FullScreenMessage message={props.message} closeMessage={props.closeMessage} />
);

const mapStateToProps = state => ({
  message: state.fullScreenMessage.message,
  display: state.fullScreenMessage.display
});

const mapDispatchToProps = {
  closeMessage: fullScreenMessageActions.closeFullScreenMessage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FullScreenMessageContainer);
