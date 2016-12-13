import modal, * as modalActions from '../../../../src/redux/modules/modal';

describe('modal', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        display: false,
        heading: null,
        message: null
      };
    });

    it('returns initialState with display set to true and heading and null set to payload when NEW_MODAL is passed', () => {
      const message = 'test message';
      const heading = 'test message';
      const state = (modal(initialState, modalActions.displayNewModal({ message, heading })));
      expect(state.message).to.equal(message);
      expect(state.heading).to.equal(heading);
      expect(state.display).to.equal(true);
    });
  });
});
