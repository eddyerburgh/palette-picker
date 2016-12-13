// @flow

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal/Modal';
import * as modalActions from '../redux/modules/modal';
import type { ModalStateType } from '../redux/modules/modal';

type Props = {
  modal: ModalStateType,
  closeModal: Function
}

const ModalContainer = (props: Props): React$Element<any> => (
  <Modal
    modal={props.modal}
    closeModal={props.closeModal}
  />
);

ModalContainer.propTypes = {
  modal: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  closeModal: PropTypes.func
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
    mapStateToProps,
    { closeModal: modalActions.closeModal }
)(ModalContainer);
