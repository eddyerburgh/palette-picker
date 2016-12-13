// @flow

import React, { PropTypes } from 'react';
import ModalMessage from './ModalMessage';
import CloseModalButton from './CloseModalButton';
import type { ModalStateType } from '../../redux/modules/modal';

const Modal = (props: {
  modal: ModalStateType,
  closeModal: Function}): React$Element<any> => (
    <div>
      <ModalMessage
        message={props.modal.message}
        heading={props.modal.heading}
      />
      <CloseModalButton
        closeModal={props.closeModal}
      />
    </div>

);

Modal.propTypes = {
  modal: PropTypes.shape({
    heading: PropTypes.string,
    message: PropTypes.string
  })
};

export default Modal;
