// Constants

const MESSAGE_UPDATE = 'MESSAGE_UPDATE';

// Reducer

const initialState = {
  message: null
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case MESSAGE_UPDATE:
      return {
        ...state,
        message: action.payload.message
      };
    default:
      return state;
  }
}

// Flow types

export type ModalType = {
  message: string
};

// Actions

export function increment(message) {
  return {
    type: MESSAGE_UPDATE,
    payload: {
      message
    }
  };
}
