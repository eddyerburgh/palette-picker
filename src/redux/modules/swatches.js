// @flow

// Constants

const NEW_SWATCH = 'NEW_SWATCH';

// Flow types

export type Swatch = {
  color: string|null,
  rgb: string,
  hex: string,
  tone: string
};

export type SwatchesState = {
  swatches: Array<Swatch>
};

export type NewSwatchAction = {
  type: string,
  swatch: Swatch
};

// Reducer

const initialState = {
  swatches: []
};

export default function reducer(
  state: SwatchesState = initialState,
  action: Object = {}): SwatchesState {
  switch (action.type) {
    case NEW_SWATCH:
      return {
        ...state,
        swatches: [...state.swatches, action.swatch]
      };
    default:
      return state;
  }
}

// Action Creators

export function addNewSwatch(swatch: Swatch): NewSwatchAction {
  return {
    type: NEW_SWATCH,
    swatch
  };
}
