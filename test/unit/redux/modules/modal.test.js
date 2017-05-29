import modal, * as modalActions from '../../../../src/redux/modules/modal';

describe('modal', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        display: false,
        heading: null,
        message: null,
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

    it('returns initialState with display set to false when CLOSE_MODAL is passed', () => {
      initialState.display = true;
      const state = (modal(initialState, modalActions.closeModal()));
      expect(state.display).to.equal(false);
    });
  });
  describe('action creators', () => {
    describe('displayNewModal', () => {
      const heading = 'test heading';
      const message = 'test message';

      it('returns an action with args.message and args.heading in payload', () => {
        const expectedAction = {
          type: 'NEW_MODAL',
          payload: {
            message,
            heading,
          },
        };
        const action = modalActions.displayNewModal({ message, heading });
        expect(action).to.deep.equal(expectedAction);
      });

      it('returns an action with payload.message set to null if not passed in args', () => {
        const expectedAction = {
          type: 'NEW_MODAL',
          payload: {
            message: null,
            heading,
          },
        };
        const action = modalActions.displayNewModal({ heading });
        expect(action).to.deep.equal(expectedAction);
      });

      it('returns an action with payload.message set to null if not passed in args', () => {
        const expectedAction = {
          type: 'NEW_MODAL',
          payload: {
            message,
            heading: null,
          },
        };
        const action = modalActions.displayNewModal({ message });
        expect(action).to.deep.equal(expectedAction);
      });
    });
    describe('closeModal', () => {
      it('returns an action type set to CLOSE_MODAL', () => {
        const expectedAction = {
          type: 'CLOSE_MODAL',
        };
        const action = modalActions.closeModal();
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
