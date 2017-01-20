import swatches, * as swatchesActions from '../../../../src/redux/modules/swatches';

describe('swatches', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        swatches: [{ rgb: '', hex: '', id: '' }]
      };
    });

    it('returns initialState with new swatch added to array when passed addNewSwatch', () => {
      const id = '1';
      const rgb = 'test rgb';
      const hex = 'test hex';
      const state = (swatches(initialState, swatchesActions.addNewSwatch({ rgb, hex, id })));
      expect(state.swatches[1].rgb).to.equal(rgb);
      expect(state.swatches[1].hex).to.equal(hex);
      expect(state.swatches[1].id).to.equal(id);
    });
  });
  describe('action creators', () => {
    describe('addNewSwatch', () => {
      const swatch = {
        id: 1,
        color: 'red',
        hex: '#ff0000',
        rgb: 'rgb(255,0,0)'
      };

      it('returns an action with swatch as payload', () => {
        const expectedAction = {
          type: 'ADD_SWATCH',
          swatch
        };
        const action = swatchesActions.addNewSwatch(swatch);
        expect(action).to.deep.equal(expectedAction);
      });
    });
    describe('removeSwatch', () => {
      it('returns an action with swatchId as payload', () => {
        const swatchId = 'some id';

        const expectedAction = {
          type: 'REMOVE_SWATCH',
          swatchId
        };
        const action = swatchesActions.removeSwatch(swatchId);
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
