// @flow

const NEW_MESSAGE = 'NEW_MESSAGE';
const CLOSE_MESSAGE = 'CLOSE_MESSAGE';

type FullScreenMessageState = {
    display: boolean,
    message: string|null,
};

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

type NewMessageAction = {
    type: string,
    message: string
}

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

type CloseMessageAction = {
    type: string
}

export function closeFullScreenMessage(): CloseMessageAction {
  return {
    type: CLOSE_MESSAGE
  };
}
