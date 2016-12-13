// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal/Modal';
import type { ModalStateType } from '../redux/modules/modal';

const ModalContainer = (props: { modal: ModalStateType}): React$Element<any> => (
  <Modal modal={props.modal} />
);

const mapStateToProps = state => ({
  modal: state.modal
});

ModalContainer.propTypes = {
  modal: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default connect(
    mapStateToProps
)(ModalContainer);
