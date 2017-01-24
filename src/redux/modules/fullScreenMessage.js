// @flow

// Constants

const NEW_MESSAGE = 'NEW_MESSAGE';
const CLOSE_MESSAGE = 'CLOSE_MESSAGE';

// Flow types

export type FullScreenMessageState = {
  display: boolean,
  message: string|null,
};

type NewMessageAction = {
  type: string,
  message: string
}

type CloseMessageAction = {
type: string
}


// Reducer

const initialState = {
  display: false,
  message: null,
  swatch: {}
};

export default function reducer(
  state: FullScreenMessageState = initialState,
  action: Object = {}): FullScreenMessageState {
  switch (action.type) {
    case NEW_MESSAGE:
      return {
        ...state,
        display: true,
        message: action.message,
        rgb: action.rgb,
        fontColor: action.fontColor
      };
    case CLOSE_MESSAGE:
      return {
        ...state,
        display: false
      };
    default:
      return state;
  }
}

// Action Creators

export function displayNewFullScreenMessage(
  message: string,
  rgb: string,
  fontColor: string
): NewMessageAction {
  return {
    type: NEW_MESSAGE,
    message,
    rgb,
    fontColor
  };
}

export function closeFullScreenMessage(): CloseMessageAction {
  return {
    type: CLOSE_MESSAGE
  };
}
