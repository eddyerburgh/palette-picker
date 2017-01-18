// @flow

// Constants

const NEW_MODAL = 'NEW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Flow types

export type ModalStateType = {
  display: boolean,
  message: string|null,
  heading: string|null
};

type NewModalActionType = {
  type: string,
  payload: {
    message: string|null,
    heading: string|null
  }
}

type CloseModalActionType = {
  type: string
}

// Reducer

const initialState = {
  display: true,
  heading: 'Welcome!',
  message: 'This app lets you add swatches of color and copy them on click.'
};

export default function reducer(
    state: ModalStateType = initialState,
    action: Object = {}): ModalStateType {
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

// Action Creators

export function displayNewModal(args: {
  message?: string,
  heading?: string
}): NewModalActionType {
  return {
    type: NEW_MODAL,
    payload: {
      message: args.message || null,
      heading: args.heading || null
    }
  };
}

export function closeModal(): CloseModalActionType {
  return {
    type: CLOSE_MODAL
  };
}
