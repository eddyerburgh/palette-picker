// @flow

import type { ModalType } from '../../../types';

const NEW_MODAL = 'NEW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const initialState = {
  display: true,
  heading: 'Welcome!',
  message: 'This app lets you store swatches of color. Click them to copy to clipboard.'
};

export default function reducer(
    state: ModalType = initialState,
    action: Object = {}): ModalType {
  switch (action.type) {
    case NEW_MODAL:
      return {
        ...state,
        display: true,
        heading: action.payload.heading,
        message: action.payload.message
      };
    case CLOSE_MODAL:
      return {
        ...state,
        display: false
      };
    default:
      return state;
  }
}

type NewModalArgs = {
  message?: string,
    heading?: string
}

type NewModalAction = {
    type: string,
    payload: {
        message: string|null,
        heading: string|null
    }
}

export function displayNewModal(args: NewModalArgs): NewModalAction {
  return {
    type: NEW_MODAL,
    payload: {
      message: args.message || null,
      heading: args.heading || null
    }
  };
}

type CloseModalAction = {
    type: string
}

export function closeModal(): CloseModalAction {
  return {
    type: CLOSE_MODAL
  };
}
