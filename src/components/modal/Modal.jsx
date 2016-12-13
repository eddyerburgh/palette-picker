// @flow

import React from 'react';
import ModalMessage from './ModalMessage';
import type { ModalType } from '../../redux/modules/modal';

const Modal = (props: { modal: ModalType}): React$Element<any> => (
  <ModalMessage message={props.modal.message} />
);

Modal.propTypes = {
  modal: ModalType
};

export default Modal;
