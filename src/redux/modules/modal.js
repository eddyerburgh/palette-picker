// @flow

// Constants

const NEW_MODAL = 'NEW_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

// Flow types

export type ModalState = {
  display: boolean,
  message: string|null,
  heading: string|null
};

type NewModalAction = {
  type: string,
  payload: {
    message: string|null,
    heading: string|null
  }
}

type CloseModalAction = {
  type: string
}

// Reducer

const initialState = {
  display: true,
  heading: 'Welcome!',
  message: 'This app lets you add swatches of color and copy them on click.'
};

export default function reducer(
    state: ModalState = initialState,
    action: Object = {}): ModalState {
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

type NewModalArgs = {
  message?: string,
    heading?: string
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

export function closeModal(): CloseModalAction {
  return {
    type: CLOSE_MODAL
  };
}
