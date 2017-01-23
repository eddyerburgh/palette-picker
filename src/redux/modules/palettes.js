// Flow types

export type PaletteType = {
  name: string,
  colors: Array<string>
};

export type PalettesState = {
  palettes: Array<PaletteType>
};

// Reducer

const initialState = {
  palettes: [
    {
      name: 'cheer up emo kid',
      colors: ['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']
    }
  ]
};

export default function reducer(
  state: ModalState = initialState,
  action: Object = {}): ModalState {
  switch (action.type) {
    default:
      return state;
  }
}
