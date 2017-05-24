// Reducer
const initialState = {
  palettes: [
    {
      name: 'cheer up emo kid',
      colors: ['#556270', '#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']
    },
    {
      name: 'Blazin Jell-O Rainbo',
      colors: ['#DF151A', '#FD8603', '#F4F328', '#00DA3C', '#00CBE7']
    },
    {
      name: 'Ocean Five',
      colors: ['#00A0B0', '#6A4A3C', '#CC333F', '#EB6841', '#EDC951']
    },
    {
      name: 'Giant Goldfish',
      colors: ['#69D2E7', '#A7DBD8', '#E0E4CC', '#F38630', '#FA6900']
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
