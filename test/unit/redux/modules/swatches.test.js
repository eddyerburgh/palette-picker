import swatches, * as swatchesActions from '../../../../src/redux/modules/swatches';

describe('swatches', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        swatches: [{ rgb: '', hex: '', id: '1' }, { rgb: '', hex: '', id: '2' }, { rgb: '', hex: '', id: '3' }],
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

    it('moves swatch to new position, pushing other swatches back when passed moveSwatch', () => {
      initialState.swatches = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
      const state = (swatches(initialState, swatchesActions.moveSwatch(1, 3)));
      expect(state.swatches.length).to.equal(4);
      expect(state.swatches[0].id).to.equal(0);
      expect(state.swatches[1].id).to.equal(2);
      expect(state.swatches[2].id).to.equal(3);
      expect(state.swatches[3].id).to.equal(1);
    });

    it('moves swatch to new position, pushing other swatches forward when passed moveSwatch', () => {
      initialState.swatches = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }];
      const state = (swatches(initialState, swatchesActions.moveSwatch(3, 1)));
      expect(state.swatches.length).to.equal(4);
      expect(state.swatches[0].id).to.equal(0);
      expect(state.swatches[1].id).to.equal(3);
      expect(state.swatches[2].id).to.equal(1);
      expect(state.swatches[3].id).to.equal(2);
    });

    it('returns state with swatches as an empty array when passed deleteSwatches', () => {
      const state = (swatches(initialState, swatchesActions.deleteSwatches()));
      expect(state.swatches.length).to.equal(0);
      expect(Array.isArray(state.swatches)).to.equal(true);
    });
  });
  describe('action creators', () => {
    describe('addNewSwatch', () => {
      const swatch = {
        id: 1,
        color: 'red',
        hex: '#ff0000',
        rgb: 'rgb(255,0,0)',
      };

      it('returns an action with swatch as payload', () => {
        const expectedAction = {
          type: 'ADD_SWATCH',
          swatch,
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
          swatchId,
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
          swatchId,
        };
        const action = swatchesActions.replaceSwatch(swatchId, swatch);
        expect(action).to.deep.equal(expectedAction);
      });
    });

    describe('moveSwatch', () => {
      it('returns an action with swatch and swatchId as payload', () => {
        const oldIndex = 9;
        const newIndex = 8;
        const expectedAction = {
          type: 'MOVE_SWATCH',
          oldIndex,
          newIndex,
        };
        const action = swatchesActions.moveSwatch(oldIndex, newIndex);
        expect(action).to.deep.equal(expectedAction);
      });
    });

    describe('deleteSwatches', () => {
      it('returns an action with DELETE_SWATCHES type', () => {
        const expectedAction = {
          type: 'DELETE_SWATCHES',
        };
        const action = swatchesActions.deleteSwatches();
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
