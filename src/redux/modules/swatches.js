// @flow

// Constants

const ADD_SWATCH = 'ADD_SWATCH';
const REMOVE_SWATCH = 'REMOVE_SWATCH';
const REPLACE_SWATCH = 'REPLACE_SWATCH';
const MOVE_SWATCH = 'MOVE_SWATCH';
const DELETE_SWATCHES = 'DELETE_SWATCHES';

// Flow types

export type SwatchType = {
  id: string,
  hex: string,
  rgb: string,
  rgbArray: Array<number>,
  fontColor: string
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

export type ReplaceSwatchAction = {
  type: string,
  swatch: SwatchType,
  swatchId: string
}

export type MoveSwatchAction = {
  type: string,
  oldIndex: number,
  newIndex: number,
}

export type DeleteSwatchesAction = {
  type: string
}

// Reducer

const initialState = {
  swatches: [
    {
      id: '1',
      hex: '#AF9EFA',
      rgb: 'rgb(175,158,250)',
      rgbArray: [175, 158, 250],
      fontColor: 'light'
    },
    {
      id: '2',
      hex: '#978BEF',
      rgb: 'rgb(151,139,239)',
      rgbArray: [151, 139, 239],
      fontColor: 'light'
    },
    {
      id: '3',
      hex: '#7A72D5',
      rgb: 'rgb(122,114,213)',
      rgbArray: [122, 114, 213],
      fontColor: 'light'
    },
    {
      id: '4',
      hex: '#282248',
      rgb: 'rgb(40,34,72)',
      rgbArray: [40, 34, 72],
      fontColor: 'light'
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
    case REMOVE_SWATCH:
      return {
        ...state,
        swatches: state.swatches.filter(swatch => swatch.id !== action.swatchId)
      };
    case REPLACE_SWATCH:
      return {
        ...state,
        swatches: state.swatches.map((swatch) => {
          if (swatch.id === action.swatchId) {
            return action.swatch;
          }
          return swatch;
        })
      };
    case DELETE_SWATCHES:
      return {
        ...state,
        swatches: []
      };
    case MOVE_SWATCH: // eslint-disable-line no-case-declarations
      const { oldIndex, newIndex } = action;
      let newSwatches;
      if (newIndex > oldIndex) {
        newSwatches = [
          ...state.swatches.slice(0, oldIndex),
          ...state.swatches.slice(oldIndex + 1, newIndex + 1),
          state.swatches[oldIndex],
          ...state.swatches.slice(newIndex + 1)
        ];
      } else {
        newSwatches = [
          ...state.swatches.slice(0, newIndex),
          state.swatches[oldIndex],
          ...state.swatches.slice(newIndex, oldIndex),
          ...state.swatches.slice(oldIndex + 1)
        ];
      }
      return {
        ...state,
        swatches: newSwatches
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

export function replaceSwatch(swatchId: string, swatch: SwatchType): ReplaceSwatchAction {
  return {
    type: REPLACE_SWATCH,
    swatch,
    swatchId
  };
}

export function moveSwatch(oldIndex: number, newIndex: number): MoveSwatchAction {
  return {
    type: MOVE_SWATCH,
    oldIndex,
    newIndex
  };
}

export function deleteSwatches(): DeleteSwatchesAction {
  return {
    type: DELETE_SWATCHES
  };
}
