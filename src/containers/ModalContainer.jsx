// @flow

import React from 'react';
import { connect } from 'react-redux';
import Modal from '../components/modal/Modal';
import * as modalActions from '../redux/modules/modal';
import type { ModalType } from '../../types';

type Props = {
  display: Boolean,
  modal: ModalType,
  closeModal: Function
}

const ModalContainer = (props: Props): React$Element<any> => (
  props.display &&
    <Modal
      modal={props.modal}
      closeModal={props.closeModal}
    />
);

const mapStateToProps = state => ({
  modal: state.modal,
  display: state.modal.display
});

export default connect(
    mapStateToProps,
    { closeModal: modalActions.closeModal }
)(ModalContainer);
