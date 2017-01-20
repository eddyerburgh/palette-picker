import fullScreen, * as fullScreenActions from '../../../../src/redux/modules/fullScreenMessage';

describe('fullScreenMessage', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        display: false,
        message: null
      };
    });

    it('returns initialState with display set to true and message set to message when NEW_MESSAGE is passed', () => {
      const message = 'test message';
      const closeMessageAction = fullScreenActions.displayNewFullScreenMessage(message);
      const state = (fullScreen(initialState, closeMessageAction));
      expect(state.message).to.equal(message);
      expect(state.display).to.equal(true);
    });

    it('returns initialState with display set to false when CLOSE_MESSAGE is passed', () => {
      initialState.display = true;
      const state = (fullScreen(initialState, fullScreenActions.closeFullScreenMessage()));
      expect(state.display).to.equal(false);
    });
  });

  describe('action creators', () => {
    describe('displayNewMessage', () => {
      const message = 'test message';

      it('returns an action with message property', () => {
        const expectedAction = {
          type: 'NEW_MESSAGE',
          message
        };
        const action = fullScreenActions.displayNewFullScreenMessage(message);
        expect(action).to.deep.equal(expectedAction);
      });
    });

    describe('closefullScreen', () => {
      it('returns an action type set to CLOSE_fullScreen', () => {
        const expectedAction = {
          type: 'CLOSE_MESSAGE'
        };
        const action = fullScreenActions.closeFullScreenMessage();
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
