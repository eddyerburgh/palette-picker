import tabs, * as tabsActions from '../../../../src/redux/modules/tabs';

describe('tabs', () => {
  describe('reducer', () => {
    let initialState;

    beforeEach(() => {
      initialState = {
        activeTab: 'addSwatches'
      };
    });

    it('returns initialstate with new active tab when passed SWITCH_ACTIVE_TAB', () => {
      const tab = 'newTab';
      const closeMessageAction = tabsActions.switchActiveTab(tab);
      const state = (tabs(initialState, closeMessageAction));
      expect(state.activeTab).to.equal(tab);
    });
  });

  describe('action creators', () => {
    describe('switchActiveTab', () => {
      const activeTab = 'activeTab';

      it('returns an action with activeTab property', () => {
        const expectedAction = {
          type: 'SWITCH_ACTIVE_TAB',
          activeTab
        };
        const action = tabsActions.switchActiveTab(activeTab);
        expect(action).to.deep.equal(expectedAction);
      });
    });
  });
});
