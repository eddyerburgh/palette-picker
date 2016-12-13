// @flow

// Constants

const NEW_MODAL = 'NEW_MODAL';

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

// Reducer

const initialState = {
  display: false,
  heading: null,
  message: null
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
    default:
      return state;
  }
}

// Actions

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
