// @flow

import React from 'react';
import CloseButton from './CloseButton';
import type { ModalType } from '../../../types';

type Props = {
  modal: ModalType,
  closeModal: Function
}
const Modal = (props: Props): React$Element<any> => (
  <div className="modal active">
    <div className="modal-overlay" />
    <div className="modal-container">
      <div className="modal-header">
        <h2 className="modal-title">{props.modal.heading}</h2>
      </div>
      <div className="modal-body">
        <div className="content">
          {props.modal.message}
        </div>
      </div>
      <footer className="modal-footer">
        <CloseButton
          clickHandler={props.closeModal}
          value="Close"
        />
      </footer>
    </div>
  </div>

);

export default Modal;
