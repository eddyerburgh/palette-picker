// @flow

import React from 'react';
import ModalMessage from './ModalMessage';
import CloseButton from './CloseButton';
import type { ModalType } from '../../../types';

type Props = {
  modal: ModalType,
  closeModal: Function
}
const Modal = (props: Props): React$Element<any> => (
  <div className="modal">
    <div className="modal__card">
      <ModalMessage
        message={props.modal.message}
        heading={props.modal.heading}
      />
      <footer className="modal__footer">
        <CloseButton
          clickHandler={props.closeModal}
          value="Close"
        />
      </footer>
    </div>
  </div>

);

export default Modal;
