// @flow

import React, { PropTypes } from 'react';
import ModalMessage from './ModalMessage';
import CloseButton from './CloseButton';
import type { ModalState } from '../../redux/modules/modal';

type Props = {
  modal: ModalState,
  closeModal: Function
}
const Modal = (props: Props): React$Element<any> => (
  <div className="modal">
    <ModalMessage
      message={props.modal.message}
      heading={props.modal.heading}
    />
    <CloseButton
      clickHandler={props.closeModal}
      value="Close"
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
