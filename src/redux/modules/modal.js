const MESSAGE_UPDATE = 'MESSAGE_UPDATE';

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

export function increment(message) {
  return {
    type: MESSAGE_UPDATE,
    payload: {
      message
    }
  };
}
