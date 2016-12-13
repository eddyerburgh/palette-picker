// @flow

import React, { PropTypes } from 'react';
import ModalMessage from './ModalMessage';
import type { ModalStateType } from '../../redux/modules/modal';

const Modal = (props: { modal: ModalStateType}): React$Element<any> => (
  <ModalMessage
    message={props.modal.message}
    heading={props.modal.heading}
  />
);

Modal.propTypes = {
  modal: PropTypes.shape({
    heading: PropTypes.string,
    message: PropTypes.string
  })
};

export default Modal;
