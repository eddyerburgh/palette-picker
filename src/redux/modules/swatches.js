// @flow

// Constants

const ADD_SWATCH = 'ADD_SWATCH';
const REMOVE_SWATCH = 'REMOVE_SWATCH';

// Flow types

export type SwatchType = {
  id: string,
  hex: string,
  rgb: string,
  rgbArray: Array<number>,
  lightness: string
};

export type SwatchesState = {
  swatches: Array<SwatchType>
};

export type NewSwatchAction = {
  type: string,
  swatch: SwatchType
};

export type RemoveSwatchAction = {
  type: string,
  swatchId: string
};

// Reducer

const initialState = {
  swatches: [
    {
      id: '1',
      hex: '#AF9EFA',
      rgb: 'rgb(175,158,250)',
      rgbArray: [175, 158, 250],
      lightness: 'light'
    },
    {
      id: '2',
      hex: '#978BEF',
      rgb: 'rgb(151,139,239)',
      rgbArray: [151, 139, 239],
      lightness: 'light'
    },
    {
      id: '3',
      hex: '#7A72D5',
      rgb: 'rgb(122,114,213)',
      rgbArray: [122, 114, 213],
      lightness: 'light'
    },
    {
      id: '4',
      hex: '#282248',
      rgb: 'rgb(40,34,72)',
      rgbArray: [40, 34, 72],
      lightness: 'dark'
    }]
};

export default function reducer(
  state: SwatchesState = initialState,
  action: Object = {}): SwatchesState {
  switch (action.type) {
    case ADD_SWATCH:
      return {
        ...state,
        swatches: [...state.swatches, action.swatch]
      };
    default:
      return state;
  }
}

// Action Creators

export function addNewSwatch(swatch: SwatchType): NewSwatchAction {
  return {
    type: ADD_SWATCH,
    swatch
  };
}

export function removeSwatch(swatchId: string): RemoveSwatchAction {
  return {
    type: REMOVE_SWATCH,
    swatchId
  };
}
