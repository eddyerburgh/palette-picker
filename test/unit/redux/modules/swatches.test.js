import swatches, * as swatchesActions from '../../../../src/redux/modules/swatches';

describe('swatches', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        swatches: [{ rgb: '', hex: '', id: '1' }, { rgb: '', hex: '', id: '2' }, { rgb: '', hex: '', id: '3' }]
      };
    });

    it('returns initialState with new swatch added to array when passed addNewSwatch', () => {
      const id = '1';
      const rgb = 'test rgb';
      const hex = 'test hex';
      const state = (swatches(initialState, swatchesActions.addNewSwatch({ rgb, hex, id })));
      expect(state.swatches[3].rgb).to.equal(rgb);
      expect(state.swatches[3].hex).to.equal(hex);
      expect(state.swatches[3].id).to.equal(id);
    });

    it('returns initialState with swatch matching swatchId removed when passed removeSwatch', () => {
      const id = initialState.swatches[0].id;
      const state = (swatches(initialState, swatchesActions.removeSwatch(id)));
      expect(state.swatches[0].id).to.equal(initialState.swatches[1].id);
    });

    it('returns initialState with swatch matching swatchId replaced with new swatch when passed removeSwatch', () => {
      const swatchId = initialState.swatches[1].id;
      const swatch = { hex: '#fff' };
      const state = (swatches(initialState, swatchesActions.replaceSwatch(swatchId, swatch)));
      expect(state.swatches[1]).to.deep.equal(swatch);
    });

    it('returns initialState with swatches replaced by new swatches when passed replaceSwatches', () => {
      const newSwatches = [{}, {}];
      const state = (swatches(initialState, swatchesActions.replaceSwatches(newSwatches)));
      expect(state.swatches[0]).deep.equal(newSwatches[0]);
      expect(state.swatches[1]).deep.equal(newSwatches[1]);
      expect(state.swatches.length).to.equal(2);
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

    describe('replaceSwatch', () => {
      it('returns an action with swatch and swatchId as payload', () => {
        const swatchId = 'some id';
        const swatch = {};

        const expectedAction = {
          type: 'REPLACE_SWATCH',
          swatch,
          swatchId
        };
        const action = swatchesActions.replaceSwatch(swatchId, swatch);
        expect(action).to.deep.equal(expectedAction);
      });
    });

    describe('replaceSwatches', () => {
      it('returns an action with swatch and swatchId as payload', () => {
        const newSwatches = [{}, {}];
        const expectedAction = {
          type: 'REPLACE_SWATCHES',
          swatches
        };
        const action = swatchesActions.replaceSwatches(newSwatches);
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
